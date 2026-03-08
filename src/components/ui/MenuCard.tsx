import { MessageCircle, Nut, Fish } from 'lucide-react';
import type { MenuItem } from '../../types';
import type { Lang } from '../../types';
import SpiceIndicator from './SpiceIndicator';
import { t } from '../../data/translations';
import { getOrderUrl } from '../../utils/whatsapp';

interface MenuCardProps {
  item: MenuItem;
  lang: Lang;
}

export default function MenuCard({ item, lang }: MenuCardProps) {
  const name = lang === 'id' ? item.nameId : item.nameEn;
  const desc = lang === 'id' ? item.descId : item.descEn;

  const spiceLabels: Record<0 | 1 | 2 | 3, string> = {
    0: t(lang, 'menu_spice_none'),
    1: t(lang, 'menu_spice_mild'),
    2: t(lang, 'menu_spice_medium'),
    3: t(lang, 'menu_spice_hot'),
  };

  return (
    <div className="group bg-white rounded-2xl border border-cream-200 hover:border-chili-200 hover:shadow-md transition-all duration-200 overflow-hidden">
      <div className="p-4 sm:p-5 flex flex-col h-full">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-serif text-base font-semibold text-bark-950 leading-snug">{name}</h3>
          <span className="shrink-0 font-sans text-base font-bold text-chili-600 tabular-nums">
            Rp {item.price.toLocaleString('id-ID')}
          </span>
        </div>

        <p className="text-xs text-bark-600 leading-relaxed mb-3 flex-1">{desc}</p>

        <div className="flex flex-wrap items-center gap-2 mb-3">
          <SpiceIndicator level={item.spice} label={spiceLabels[item.spice]} />

          {item.allergens.includes('peanut') && (
            <span className="inline-flex items-center gap-1 text-[11px] font-medium bg-amber-50 text-amber-700 border border-amber-200 px-2 py-0.5 rounded-full">
              <Nut size={10} />
              {t(lang, 'menu_allergen_peanut')}
            </span>
          )}
          {item.allergens.includes('seafood') && (
            <span className="inline-flex items-center gap-1 text-[11px] font-medium bg-blue-50 text-blue-700 border border-blue-200 px-2 py-0.5 rounded-full">
              <Fish size={10} />
              {t(lang, 'menu_allergen_seafood')}
            </span>
          )}
        </div>

        <a
          href={getOrderUrl(lang, name)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-cream-100 hover:bg-chili-600 text-bark-700 hover:text-white border border-cream-300 hover:border-chili-600 text-xs font-semibold py-2.5 rounded-xl transition-all duration-200"
        >
          <MessageCircle size={13} />
          {t(lang, 'menu_add_wa')}
        </a>
      </div>
    </div>
  );
}
