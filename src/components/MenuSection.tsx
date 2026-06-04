import { useState } from 'react';
import { MessageCircle, AlertCircle, Sparkles } from 'lucide-react';
import { useLang } from '../contexts/LanguageContext';
import { t } from '../data/translations';
import { allMenuItems } from '../data/menu';
import { getOrderUrl } from '../utils/whatsapp';
import MenuCard from './ui/MenuCard';
import type { MenuTab } from '../types';

import { LAST_UPDATED } from '../data/heritage';

const TABS: { key: MenuTab; labelKey: Parameters<typeof t>[1] }[] = [
  { key: 'bestseller', labelKey: 'menu_tab_bestseller' },
  { key: 'mains', labelKey: 'menu_tab_mains' },
  { key: 'soup', labelKey: 'menu_tab_soup' },
  { key: 'vegetables', labelKey: 'menu_tab_vegetables' },
  { key: 'snacks', labelKey: 'menu_tab_snacks' },
  { key: 'drinks', labelKey: 'menu_tab_drinks' },
];

export default function MenuSection() {
  const { lang } = useLang();
  const [activeTab, setActiveTab] = useState<MenuTab>('bestseller');

  const filteredItems = allMenuItems.filter((item) => item.tabs.includes(activeTab));

  return (
    <section
      id="menu"
      className="py-20 sm:py-24 px-4 sm:px-6 bg-cream-100/50 texture-grain relative overflow-hidden border-b border-cream-200"
    >
      {/* Visual embellishments */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-cream-300 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="section-badge flex items-center gap-1.5 text-chili-600 font-bold text-xs uppercase tracking-widest mb-3">
            <Sparkles size={12} className="text-gold-500 animate-pulse" />
            {lang === 'id' ? 'Pilihan Terbaik' : 'Our Curation'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-bark-950 mb-4 leading-tight heading-accent">
            {t(lang, 'menu_title')}
          </h2>
          <p className="text-bark-600 text-sm sm:text-base max-w-lg mt-2 text-balance leading-relaxed">
            {t(lang, 'menu_subtitle')}
          </p>
        </div>

        {/* Categories Tab Navigation */}
        <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0 pb-3 mb-8 scrollbar-hide">
          <div className="flex gap-2 min-w-max sm:justify-center">
            {TABS.map(({ key, labelKey }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  activeTab === key
                    ? 'bg-chili-600 text-white shadow-md shadow-chili-900/10'
                    : 'bg-white text-bark-700 border border-cream-200 hover:border-chili-300 hover:text-chili-600'
                }`}
              >
                {t(lang, labelKey)}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Cards Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-scale-in">
            {filteredItems.map((item) => (
              <MenuCard key={item.id} item={item} lang={lang} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-bark-500 bg-white rounded-2xl border border-cream-200/60 p-8 shadow-sm">
            <AlertCircle size={36} className="mx-auto mb-3 text-bark-300" />
            <p className="text-sm font-medium">
              {lang === 'id' ? 'Tidak ada item di kategori ini.' : 'No items in this category.'}
            </p>
          </div>
        )}

        {/* Menu Footer & Global Ordering Info */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-cream-200/80">
          <div className="flex flex-col gap-1.5 text-center sm:text-left">
            <p className="text-xs text-bark-600 flex items-center justify-center sm:justify-start gap-2">
              <AlertCircle size={14} className="text-chili-600 shrink-0" />
              <span className="font-medium">{t(lang, 'menu_pricing_note')}</span>
            </p>
            <p className="text-[10px] uppercase tracking-widest text-bark-400 font-bold sm:pl-5">
              {lang === 'id' ? 'Menu Terakhir Diperbarui' : 'Menu Last Updated'}: {LAST_UPDATED}
            </p>
          </div>
          <a
            href={getOrderUrl(lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-chili-600 hover:bg-chili-700 text-white font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-200 shadow-md shadow-chili-900/20 hover:shadow-lg hover:-translate-y-px"
          >
            <MessageCircle size={16} />
            {t(lang, 'menu_cta')}
          </a>
        </div>
      </div>
    </section>
  );
}
