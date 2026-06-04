import { MessageCircle, TrendingUp, Sparkles } from 'lucide-react';
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
    <section id="bestsellers" className="py-20 sm:py-24 px-4 sm:px-6 bg-cream-50 texture-grain relative overflow-hidden border-b border-cream-200">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="section-badge flex items-center gap-1.5 text-chili-600 font-bold text-xs uppercase tracking-widest mb-3">
              <TrendingUp size={14} className="text-gold-500" />
              {lang === 'id' ? 'Pilihan Terpopuler' : 'Fan Favorites'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-bark-950 heading-accent">
              {t(lang, 'bestseller_title')}
            </h2>
            <p className="text-bark-600 mt-3 text-sm sm:text-base max-w-lg">
              {t(lang, 'bestseller_subtitle')}
            </p>
          </div>
          
          <a
            href={getOrderUrl(lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 hidden md:inline-flex items-center justify-center gap-2.5 bg-chili-600 hover:bg-chili-700 text-white font-bold text-sm px-6 py-3.5 rounded-full transition-all duration-200 shadow-md shadow-chili-900/20 hover:shadow-lg hover:-translate-y-px"
          >
            <MessageCircle size={16} />
            {t(lang, 'menu_cta')}
          </a>
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <MenuCard key={item.id} item={item} lang={lang} />
          ))}
        </div>

        {/* Mobile-only CTA */}
        <div className="mt-8 text-center md:hidden">
          <a
            href={getOrderUrl(lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2.5 bg-chili-600 hover:bg-chili-700 text-white font-bold text-sm px-6 py-3.5 rounded-full transition-all duration-200 shadow-md shadow-chili-900/20"
          >
            <MessageCircle size={16} />
            {t(lang, 'menu_cta')}
          </a>
        </div>
      </div>
    </section>
  );
}
