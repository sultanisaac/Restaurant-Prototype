import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { MenuItem } from '../types';
import { allMenuItems } from '../data/menu';

const STORAGE_KEY = 'dpn_custom_menu';

interface MenuContextValue {
  menuItems: MenuItem[];
  addMenuItem: (item: MenuItem) => void;
  updateMenuItem: (item: MenuItem) => void;
  deleteMenuItem: (id: string) => void;
  resetMenu: () => void;
}

const MenuContext = createContext<MenuContextValue | null>(null);

export function MenuProvider({ children }: { children: ReactNode }) {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error('Failed to parse stored menu', e);
    }
    return allMenuItems;
  });

  const saveAndSet = (items: MenuItem[]) => {
    setMenuItems(items);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.error('Failed to save menu to localStorage', e);
    }
  };

  const addMenuItem = (item: MenuItem) => {
    saveAndSet([item, ...menuItems]);
  };

  const updateMenuItem = (updatedItem: MenuItem) => {
    saveAndSet(menuItems.map((item) => (item.id === updatedItem.id ? updatedItem : item)));
  };

  const deleteMenuItem = (id: string) => {
    saveAndSet(menuItems.filter((item) => item.id !== id));
  };

  const resetMenu = () => {
    localStorage.removeItem(STORAGE_KEY);
    setMenuItems(allMenuItems);
  };

  return (
    <MenuContext.Provider
      value={{
        menuItems,
        addMenuItem,
        updateMenuItem,
        deleteMenuItem,
        resetMenu,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
}

