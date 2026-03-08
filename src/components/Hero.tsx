import { MessageCircle, CalendarDays, CheckCircle2, AlertTriangle } from 'lucide-react';
import { useLang } from '../contexts/LanguageContext';
import { t } from '../data/translations';
import { getOrderUrl, getReservationUrl } from '../utils/whatsapp';

export default function Hero() {
  const { lang } = useLang();

  const trustChips = [
    t(lang, 'hero_trust1'),
    t(lang, 'hero_trust2'),
    t(lang, 'hero_trust3'),
  ];

  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col"
      style={{
        background:
          'linear-gradient(135deg, #2c1a10 0%, #4e3423 40%, #734b2e 70%, #a06328 100%)',
      }}
    >
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-bark-950/70 via-bark-950/50 to-bark-950/80" />

      <div className="relative z-10 flex-1 flex flex-col justify-center pt-24 pb-28 sm:pb-20 px-4 sm:px-6 max-w-4xl mx-auto w-full">
        <div className="mb-4">
          <span className="inline-flex items-center gap-1.5 bg-gold-400/20 border border-gold-400/40 text-gold-300 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            <AlertTriangle size={11} />
            {t(lang, 'prototype_short')}
          </span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-cream-50 leading-tight mb-5 text-balance">
          {t(lang, 'hero_headline')}
        </h1>

        <p className="text-cream-200 text-base sm:text-lg leading-relaxed max-w-xl mb-7">
          {t(lang, 'hero_subheadline')}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {trustChips.map((chip) => (
            <span
              key={chip}
              className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-cream-100 text-xs font-medium px-3 py-1.5 rounded-full"
            >
              <CheckCircle2 size={12} className="text-gold-400 shrink-0" />
              {chip}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={getOrderUrl(lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-chili-600 hover:bg-chili-700 active:bg-chili-800 text-white font-bold text-base px-7 py-4 rounded-2xl transition-all shadow-lg shadow-chili-900/30 hover:shadow-xl hover:shadow-chili-900/40 hover:-translate-y-0.5"
          >
            <MessageCircle size={20} />
            {t(lang, 'hero_cta_order')}
          </a>
          <a
            href={getReservationUrl(lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-base px-7 py-4 rounded-2xl transition-all backdrop-blur-sm"
          >
            <CalendarDays size={18} />
            {t(lang, 'hero_cta_reserve')}
          </a>
        </div>

        <p className="mt-6 text-cream-300/70 text-xs leading-relaxed max-w-lg">
          <AlertTriangle size={10} className="inline mr-1 relative -top-px" />
          {t(lang, 'prototype_disclaimer')}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-cream-50 to-transparent pointer-events-none" />
    </section>
  );
}
