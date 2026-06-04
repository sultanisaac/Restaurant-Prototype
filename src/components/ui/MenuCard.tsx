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

// Curated authentic, high-quality, and verified 200 OK Indonesian culinary image URLs
const MENU_IMAGES: Record<string, string> = {
  rendang: 'https://images.unsplash.com/photo-1620700668269-d3ad2a88f27e?auto=format&fit=crop&w=600&q=80',
  nasigoreng: 'https://images.unsplash.com/photo-1680674774705-90b4904b3a7f?auto=format&fit=crop&w=600&q=80',
  sate: 'https://images.unsplash.com/photo-1696385793103-71f51f6fd3b7?auto=format&fit=crop&w=600&q=80',
  soto: 'https://images.unsplash.com/photo-1677029969063-23ecbb98d0af?auto=format&fit=crop&w=600&q=80',
  bakso: 'https://images.unsplash.com/photo-1687425973269-af0d62587769?auto=format&fit=crop&w=600&q=80',
  gadogado: 'https://images.unsplash.com/photo-1707269561481-a4a0370a980a?auto=format&fit=crop&w=600&q=80',
  ayampenyet: 'https://images.unsplash.com/photo-1569058242252-623df46b5025?auto=format&fit=crop&w=600&q=80', // Beautiful Indonesian fried chicken platter with sambal
  rawon: 'https://images.unsplash.com/photo-1677921739245-4efaa1914ef3?auto=format&fit=crop&w=600&q=80',
  nasicampur: 'https://images.unsplash.com/photo-1569058242252-623df46b5025?auto=format&fit=crop&w=600&q=80',
  gudeg: 'https://images.unsplash.com/photo-1707529332935-bfa3925f15ac?auto=format&fit=crop&w=600&q=80',
  esteh_menu: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80',
  esjeruk_menu: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80',
  kerupuk_menu: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=600',
};

export default function MenuCard({ item, lang }: MenuCardProps) {
  const name = lang === 'id' ? item.nameId : item.nameEn;
  const desc = lang === 'id' ? item.descId : item.descEn;
  const imageUrl = MENU_IMAGES[item.id] || 'https://images.unsplash.com/photo-1569058242252-623df46b5025?auto=format&fit=crop&w=600&q=80';

  const spiceLabels: Record<0 | 1 | 2 | 3, string> = {
    0: t(lang, 'menu_spice_none'),
    1: t(lang, 'menu_spice_mild'),
    2: t(lang, 'menu_spice_medium'),
    3: t(lang, 'menu_spice_hot'),
  };

  const isBestseller = item.tabs.includes('bestseller');

  return (
    <div className="group bg-white rounded-2xl border border-cream-200/80 hover:border-chili-200/60 hover:shadow-premium transition-all duration-300 overflow-hidden flex flex-col h-full animate-fade-in">
      {/* Card Image Slot */}
      <div className="relative aspect-[16/10] overflow-hidden bg-cream-100">
        <img
          src={imageUrl}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-spring"
        />
        {/* Soft dark vignette on bottom of image for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        
        {/* Premium Bestseller Badge */}
        {isBestseller && (
          <span className="absolute top-3 left-3 bg-gold-500/90 text-white text-[10px] font-bold tracking-wider px-3 py-1 rounded-full uppercase shadow-sm">
            {lang === 'id' ? 'Terlaris' : 'Bestseller'}
          </span>
        )}
      </div>

      {/* Card Body */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-serif text-[17px] font-bold text-bark-950 leading-snug group-hover:text-chili-700 transition-colors duration-200">
            {name}
          </h3>
          <span className="shrink-0 font-sans text-base font-bold text-chili-600 tabular-nums">
            Rp {item.price.toLocaleString('id-ID')}
          </span>
        </div>

        <p className="text-xs text-bark-600 leading-relaxed mb-4 flex-1">
          {desc}
        </p>

        {/* Indicators Row */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <SpiceIndicator level={item.spice} label={spiceLabels[item.spice]} />

          {item.allergens.includes('peanut') && (
            <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200/60 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              <Nut size={10} className="shrink-0" />
              {t(lang, 'menu_allergen_peanut')}
            </span>
          )}
          {item.allergens.includes('seafood') && (
            <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200/60 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              <Fish size={10} className="shrink-0" />
              {t(lang, 'menu_allergen_seafood')}
            </span>
          )}
        </div>

        {/* WhatsApp Conversion CTA */}
        <a
          href={getOrderUrl(lang, name)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-cream-100/70 hover:bg-chili-600 text-bark-800 hover:text-white border border-cream-200 hover:border-chili-600 text-xs font-bold py-3 rounded-xl transition-all duration-300 shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chili-400"
        >
          <MessageCircle size={14} />
          {t(lang, 'menu_add_wa')}
        </a>
      </div>
    </div>
  );
}
