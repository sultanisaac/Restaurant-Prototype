import { MessageCircle, CalendarDays, Flame } from 'lucide-react';
import { useLang } from '../contexts/LanguageContext';
import { t } from '../data/translations';
import { getOrderUrl, getReservationUrl } from '../utils/whatsapp';

export default function FinalCTA() {
  const { lang } = useLang();

  return (
    <section
      id="order"
      className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #2c1a10 0%, #4e3423 50%, #6e2520 100%)',
      }}
    >
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 50%, #c0392b 0%, transparent 50%), radial-gradient(circle at 80% 50%, #d4a017 0%, transparent 50%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center gap-1.5 bg-chili-600/20 border border-chili-500/30 text-chili-300 text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider mb-6">
          <Flame size={12} className="fill-chili-400 text-chili-400" />
          {lang === 'id' ? 'Sambal Segar Setiap Hari' : 'Fresh Sambal Every Day'}
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-50 mb-5 leading-tight text-balance">
          {t(lang, 'final_title')}
        </h2>

        <p className="text-bark-300 text-base sm:text-lg leading-relaxed mb-8 max-w-lg mx-auto">
          {t(lang, 'final_subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={getOrderUrl(lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-chili-600 hover:bg-chili-700 text-white font-bold text-base px-8 py-4 rounded-2xl transition-all shadow-lg shadow-chili-900/40 hover:shadow-xl hover:-translate-y-0.5"
          >
            <MessageCircle size={20} />
            {t(lang, 'final_cta_order')}
          </a>
          <a
            href={getReservationUrl(lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-base px-8 py-4 rounded-2xl transition-all backdrop-blur-sm"
          >
            <CalendarDays size={18} />
            {t(lang, 'final_cta_reserve')}
          </a>
        </div>
      </div>
    </section>
  );
}
