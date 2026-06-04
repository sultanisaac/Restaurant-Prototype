import { MessageCircle, CalendarDays, MapPin } from 'lucide-react';
import { useLang } from '../contexts/LanguageContext';
import { t } from '../data/translations';
import { getOrderUrl, getReservationUrl, MAPS_URL } from '../utils/whatsapp';

export default function StickyBottomBar() {
  const { lang } = useLang();
  
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-bark-950/98 backdrop-blur-md border-t border-white/10 shadow-[0_-8px_32px_rgba(0,0,0,0.3)] px-4 py-3 safe-area-pb">
      <div className="flex items-center gap-3">
        {/* Primary Order Conversion Action */}
        <a
          href={getOrderUrl(lang)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[2] flex items-center justify-center gap-2 bg-chili-600 active:bg-chili-700 text-white font-bold text-sm py-3 rounded-xl transition-all duration-200 shadow-md shadow-chili-900/30 hover:scale-[1.02]"
        >
          <MessageCircle size={16} className="shrink-0 animate-pulse" />
          <span>{lang === 'id' ? 'Pesan Sekarang' : 'Order WhatsApp'}</span>
        </a>

        {/* Secondary Reservation Action */}
        <a
          href={getReservationUrl(lang)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[1.5] flex items-center justify-center gap-2 bg-white/10 active:bg-white/15 border border-white/20 text-cream-100 font-bold text-sm py-3 rounded-xl transition-all duration-200"
        >
          <CalendarDays size={15} className="shrink-0" />
          <span>{lang === 'id' ? 'Reservasi' : 'Reserve'}</span>
        </a>

        {/* Directions Map Action */}
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 px-2.5 py-1 text-cream-300 hover:text-gold-400 active:scale-95 transition-all"
          aria-label={lang === 'id' ? 'Buka Peta Lokasi' : 'Open Location Map'}
        >
          <MapPin size={18} className="text-gold-400 shrink-0" />
          <span className="text-[9px] font-bold uppercase tracking-wider">Maps</span>
        </a>
      </div>
    </div>
  );
}
