import { MessageCircle, CalendarDays, Flame, Sparkles } from 'lucide-react';
import { useLang } from '../contexts/LanguageContext';
import { t } from '../data/translations';
import { getOrderUrl, getReservationUrl } from '../utils/whatsapp';

export default function FinalCTA() {
  const { lang } = useLang();

  return (
    <section
      id="order"
      className="py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden texture-grain"
      style={{
        background: 'linear-gradient(135deg, #2c1a10 0%, #3e2617 60%, #5c1b12 100%)',
      }}
    >
      {/* Background glow layers */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        {/* Chili Red glow bottom-right */}
        <div
          className="absolute -bottom-48 -right-48 w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(192,57,43,0.3) 0%, transparent 70%)' }}
        />
        {/* Gold glow top-left */}
        <div
          className="absolute -top-48 -left-48 w-[400px] h-[400px] rounded-full blur-[100px]"
          style={{ background: 'radial-gradient(circle, rgba(212,160,23,0.15) 0%, transparent 70%)' }}
        />
      </div>

      {/* Decorative accent divider top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 bg-chili-500/15 border border-chili-400/35 text-chili-300 text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
          <Flame size={12} className="fill-chili-400 text-chili-400 animate-pulse" />
          {lang === 'id' ? 'Sambal Segar Setiap Hari' : 'Fresh Sambal Every Day'}
        </div>

        {/* Title */}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-cream-50 mb-6 leading-tight text-balance">
          {t(lang, 'final_title')}
        </h2>

        {/* Subtitle */}
        <p className="text-cream-200/80 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 max-w-xl mx-auto">
          {t(lang, 'final_subtitle')}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={getOrderUrl(lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-chili-600 hover:bg-chili-500 active:bg-chili-700 text-white font-bold text-base px-8 py-4 rounded-2xl transition-all duration-200 shadow-lg shadow-chili-950/50 hover:shadow-xl hover:-translate-y-0.5"
          >
            <MessageCircle size={20} />
            {t(lang, 'final_cta_order')}
          </a>
          
          <a
            href={getReservationUrl(lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/18 border border-white/25 text-white font-bold text-base px-8 py-4 rounded-2xl transition-all duration-200 backdrop-blur-sm hover:-translate-y-0.5"
          >
            <CalendarDays size={18} />
            {t(lang, 'final_cta_reserve')}
          </a>
        </div>
      </div>
    </section>
  );
}
