import React, { createContext, useContext, useState, type ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionContextType {
  activeItem: string | null;
  toggleItem: (value: string) => void;
  collapsible: boolean;
}

const AccordionContext = createContext<AccordionContextType | null>(null);

export interface AccordionProps {
  type?: 'single';
  collapsible?: boolean;
  defaultValue?: string;
  className?: string;
  children: ReactNode;
}

export function Accordion({
  collapsible = true,
  defaultValue = '',
  className = '',
  children,
}: AccordionProps) {
  const [activeItem, setActiveItem] = useState<string | null>(defaultValue || null);

  const toggleItem = (value: string) => {
    setActiveItem((prev) => {
      if (prev === value) {
        return collapsible ? null : prev;
      }
      return value;
    });
  };

  return (
    <AccordionContext.Provider value={{ activeItem, toggleItem, collapsible }}>
      <div className={`divide-y divide-cream-200 ${className}`}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

interface AccordionItemContextType {
  value: string;
  isOpen: boolean;
}

const AccordionItemContext = createContext<AccordionItemContextType | null>(null);

export interface AccordionItemProps {
  value: string;
  className?: string;
  children: ReactNode;
}

export function AccordionItem({ value, className = '', children }: AccordionItemProps) {
  const ctx = useContext(AccordionContext);
  if (!ctx) throw new Error('AccordionItem must be used within Accordion');

  const isOpen = ctx.activeItem === value;

  return (
    <AccordionItemContext.Provider value={{ value, isOpen }}>
      <div className={`border-b border-cream-200/80 transition-colors ${className}`}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
}

export interface AccordionTriggerProps {
  className?: string;
  children: ReactNode;
}

export function AccordionTrigger({ className = '', children }: AccordionTriggerProps) {
  const accCtx = useContext(AccordionContext);
  const itemCtx = useContext(AccordionItemContext);
  if (!accCtx || !itemCtx) {
    throw new Error('AccordionTrigger must be used within AccordionItem');
  }

  const { isOpen, value } = itemCtx;

  return (
    <button
      type="button"
      onClick={() => accCtx.toggleItem(value)}
      aria-expanded={isOpen}
      className={`flex w-full items-center justify-between py-4 sm:py-5 text-left font-serif text-base sm:text-lg font-bold text-bark-900 transition-all hover:text-chili-600 group ${className}`}
    >
      <div className="flex-1 pr-4">{children}</div>
      <ChevronDown
        size={18}
        className={`shrink-0 text-bark-400 transition-transform duration-300 ease-out group-hover:text-chili-600 ${
          isOpen ? 'rotate-180 text-chili-600' : ''
        }`}
      />
    </button>
  );
}

export interface AccordionContentProps {
  className?: string;
  children: ReactNode;
}

export function AccordionContent({ className = '', children }: AccordionContentProps) {
  const itemCtx = useContext(AccordionItemContext);
  if (!itemCtx) {
    throw new Error('AccordionContent must be used within AccordionItem');
  }

  const { isOpen } = itemCtx;

  return (
    <div
      className={`grid transition-all duration-300 ease-out overflow-hidden ${
        isOpen ? 'grid-rows-[1fr] opacity-100 pb-5 pt-1' : 'grid-rows-[0fr] opacity-0 pb-0 pt-0'
      }`}
    >
      <div className={`min-h-0 text-sm sm:text-base leading-relaxed text-bark-600 ${className}`}>
        {children}
      </div>
    </div>
  );
}

export default Accordion;

