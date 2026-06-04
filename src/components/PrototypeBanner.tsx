import { Sparkles } from 'lucide-react';
import { useLang } from '../contexts/LanguageContext';
import { t } from '../data/translations';

export default function PrototypeBanner() {
  const { lang } = useLang();
  return (
    <div className="bg-bark-950 text-gold-300 text-[10px] font-bold text-center py-2.5 px-4 flex items-center justify-center gap-2 border-b border-gold-400/20 uppercase tracking-widest relative z-50">
      <Sparkles size={11} className="shrink-0 text-gold-400 animate-pulse" />
      <span>{t(lang, 'prototype_disclaimer')}</span>
    </div>
  );
}
