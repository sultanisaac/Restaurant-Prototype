import { MessageCircle, CalendarDays, CheckCircle2, ChevronDown } from 'lucide-react';
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
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      {/* Hero background image — higher opacity for real visual impact */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Multi-layer gradient overlay for depth & legibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-bark-950/90 via-bark-950/70 to-bark-800/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-bark-950/80 via-transparent to-bark-950/30" />

      {/* Subtle warm ambient glow bottom-left */}
      <div
        className="absolute bottom-0 left-0 w-96 h-96 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at bottom left, rgba(192,57,43,0.18) 0%, transparent 70%)',
        }}
      />
      {/* Gold top-right ambient */}
      <div
        className="absolute top-0 right-0 w-80 h-80 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at top right, rgba(212,160,23,0.10) 0%, transparent 70%)',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center pt-28 pb-32 sm:pb-24 px-4 sm:px-6 max-w-5xl mx-auto w-full">

        {/* Eyebrow label */}
        <div className="mb-5 animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
          <span className="inline-flex items-center gap-2 bg-gold-400/15 border border-gold-400/30 text-gold-300 text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
            {lang === 'id' ? 'Masakan Tradisional Indonesia' : 'Traditional Indonesian Cuisine'}
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-serif text-4xl sm:text-5xl lg:text-[3.75rem] font-bold text-cream-50 leading-[1.1] mb-5 text-balance animate-slide-up"
          style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
        >
          {t(lang, 'hero_headline')}
        </h1>

        {/* Gold accent line */}
        <div
          className="w-14 h-0.5 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full mb-5 animate-fade-in"
          style={{ animationDelay: '0.35s', animationFillMode: 'both' }}
        />

        {/* Subheadline */}
        <p
          className="text-cream-200/90 text-base sm:text-lg leading-relaxed max-w-xl mb-8 animate-fade-up"
          style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
        >
          {t(lang, 'hero_subheadline')}
        </p>

        {/* Trust chips */}
        <div
          className="flex flex-wrap gap-2 mb-9 animate-fade-up"
          style={{ animationDelay: '0.5s', animationFillMode: 'both' }}
        >
          {trustChips.map((chip) => (
            <span
              key={chip}
              className="inline-flex items-center gap-1.5 bg-white/8 backdrop-blur-sm border border-white/15 text-cream-100 text-xs font-medium px-3.5 py-1.5 rounded-full"
            >
              <CheckCircle2 size={12} className="text-gold-400 shrink-0" />
              {chip}
            </span>
          ))}
        </div>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row gap-3 animate-fade-up"
          style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
        >
          <a
            href={getOrderUrl(lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-chili-600 hover:bg-chili-500 active:bg-chili-700 text-white font-bold text-base px-8 py-4 rounded-2xl transition-all duration-200 shadow-lg shadow-chili-950/40 hover:shadow-xl hover:shadow-chili-950/50 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chili-400"
          >
            <MessageCircle size={20} />
            {t(lang, 'hero_cta_order')}
          </a>
          <a
            href={getReservationUrl(lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/18 border border-white/25 text-white font-semibold text-base px-8 py-4 rounded-2xl transition-all duration-200 backdrop-blur-sm hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
          >
            <CalendarDays size={18} />
            {t(lang, 'hero_cta_reserve')}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 animate-bounce-slow">
        <span className="text-cream-300/60 text-[10px] font-medium uppercase tracking-widest">
          {lang === 'id' ? 'Gulir' : 'Scroll'}
        </span>
        <ChevronDown size={18} className="text-cream-300/60" />
      </div>

      {/* Elegant bottom fade to page */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream-50 to-transparent pointer-events-none" />
    </section>
  );
}
