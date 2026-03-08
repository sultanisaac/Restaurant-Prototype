import { AlertTriangle } from 'lucide-react';
import { useLang } from '../contexts/LanguageContext';
import { t } from '../data/translations';

export default function PrototypeBanner() {
  const { lang } = useLang();
  return (
    <div className="bg-gold-400 text-bark-950 text-xs font-medium text-center py-2 px-4 flex items-center justify-center gap-2">
      <AlertTriangle size={13} className="shrink-0" />
      <span>{t(lang, 'prototype_disclaimer')}</span>
    </div>
  );
}
