import { MessageCircle, CalendarDays, MapPin } from 'lucide-react';
import { useLang } from '../contexts/LanguageContext';
import { t } from '../data/translations';
import { getOrderUrl, getReservationUrl, MAPS_URL } from '../utils/whatsapp';

export default function StickyBottomBar() {
  const { lang } = useLang();
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-cream-50 border-t border-cream-200 shadow-lg px-3 py-2.5 safe-area-pb">
      <div className="flex items-center gap-2">
        <a
          href={getOrderUrl(lang)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-chili-600 hover:bg-chili-700 text-white font-semibold text-sm py-2.5 rounded-xl transition-colors shadow-sm"
        >
          <MessageCircle size={16} />
          {lang === 'id' ? 'Pesan WhatsApp' : 'Order WhatsApp'}
        </a>

        <a
          href={getReservationUrl(lang)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-cream-200 hover:bg-cream-300 text-bark-800 font-semibold text-sm py-2.5 rounded-xl transition-colors"
        >
          <CalendarDays size={16} />
          {lang === 'id' ? 'Reservasi' : 'Reserve'}
        </a>

        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-0.5 px-3 py-2 text-bark-600 hover:text-chili-600 transition-colors"
        >
          <MapPin size={18} />
          <span className="text-[10px] font-medium">Maps</span>
        </a>
      </div>
    </div>
  );
}
