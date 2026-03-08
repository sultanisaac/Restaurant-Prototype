import { MessageCircle, TrendingUp } from 'lucide-react';
import { useLang } from '../contexts/LanguageContext';
import { t } from '../data/translations';
import { menuItems } from '../data/menu';
import { getOrderUrl } from '../utils/whatsapp';
import MenuCard from './ui/MenuCard';

const BEST_SELLER_IDS = ['rendang', 'ayampenyet', 'sate', 'nasigoreng', 'soto', 'gadogado'];

export default function BestSellers() {
  const { lang } = useLang();
  const items = menuItems.filter((item) => BEST_SELLER_IDS.includes(item.id));

  return (
    <section id="bestsellers" className="py-16 sm:py-20 px-4 sm:px-6 bg-cream-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-chili-600 uppercase tracking-wider mb-2">
              <TrendingUp size={13} />
              {lang === 'id' ? 'Pilihan Favorit' : 'Fan Favorites'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-bark-950">
              {t(lang, 'bestseller_title')}
            </h2>
            <p className="text-bark-600 mt-2 text-sm sm:text-base max-w-lg">
              {t(lang, 'bestseller_subtitle')}
            </p>
          </div>
          <a
            href={getOrderUrl(lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 hidden sm:inline-flex items-center gap-2 bg-chili-600 hover:bg-chili-700 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-colors shadow-sm"
          >
            <MessageCircle size={15} />
            {t(lang, 'menu_cta')}
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => (
            <MenuCard key={item.id} item={item} lang={lang} />
          ))}
        </div>

        <div className="mt-6 text-center sm:hidden">
          <a
            href={getOrderUrl(lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-chili-600 hover:bg-chili-700 text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors shadow-sm"
          >
            <MessageCircle size={15} />
            {t(lang, 'menu_cta')}
          </a>
        </div>
      </div>
    </section>
  );
}
