import { Sparkles, X } from 'lucide-react';
import { useLang } from '../contexts/LanguageContext';
import { t } from '../data/translations';

interface PrototypeBannerProps {
  onClose?: () => void;
}

export default function PrototypeBanner({ onClose }: PrototypeBannerProps) {
  const { lang } = useLang();

  return (
    <div className="bg-bark-950/95 text-gold-300 text-[10px] sm:text-[11px] font-bold py-2 px-4 flex items-center justify-between border-b border-gold-400/20 uppercase tracking-widest relative z-50">
      <div className="flex-1 flex items-center justify-center gap-2 pl-6 text-center">
        <Sparkles size={12} className="shrink-0 text-gold-400 animate-pulse" />
        <span className="leading-tight">{t(lang, 'prototype_disclaimer')}</span>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="p-1 -mr-1 rounded-md text-gold-300/80 hover:text-white hover:bg-white/10 transition-colors shrink-0"
          aria-label="Dismiss banner"
          title="Dismiss banner"
        >
          <X size={14} />
        </button>
      )}
    </div>
  );
}
