import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { Lang } from '../types';

interface LanguageContextValue {
  lang: Lang;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'id',
  toggleLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang] = useState<Lang>('en');

  useEffect(() => {
    localStorage.setItem('dpn_lang', 'en');
    document.documentElement.lang = 'en';
  }, []);

  const toggleLang = () => {};

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
