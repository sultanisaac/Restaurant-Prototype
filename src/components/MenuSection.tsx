import { useState } from 'react';
import { MessageCircle, AlertCircle } from 'lucide-react';
import { useLang } from '../contexts/LanguageContext';
import { t } from '../data/translations';
import { allMenuItems } from '../data/menu';
import { getOrderUrl } from '../utils/whatsapp';
import MenuCard from './ui/MenuCard';
import type { MenuTab } from '../types';

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
    <section id="menu" className="py-16 sm:py-20 px-4 sm:px-6 bg-cream-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-bark-950 mb-3">
            {t(lang, 'menu_title')}
          </h2>
          <p className="text-bark-600 text-sm sm:text-base max-w-lg mx-auto">
            {t(lang, 'menu_subtitle')}
          </p>
        </div>

        <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0 pb-2 mb-6">
          <div className="flex gap-2 min-w-max sm:justify-center">
            {TABS.map(({ key, labelKey }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                  activeTab === key
                    ? 'bg-chili-600 text-white shadow-sm'
                    : 'bg-white text-bark-700 border border-cream-300 hover:border-chili-300 hover:text-chili-600'
                }`}
              >
                {t(lang, labelKey)}
              </button>
            ))}
          </div>
        </div>

        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredItems.map((item) => (
              <MenuCard key={item.id} item={item} lang={lang} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-bark-500">
            <AlertCircle size={32} className="mx-auto mb-3 text-bark-300" />
            <p className="text-sm">{lang === 'id' ? 'Tidak ada item di kategori ini.' : 'No items in this category.'}</p>
          </div>
        )}

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-cream-200">
          <p className="text-xs text-bark-500 flex items-center gap-1.5">
            <AlertCircle size={12} />
            {t(lang, 'menu_pricing_note')}
          </p>
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
