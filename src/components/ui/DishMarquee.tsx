import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useLang } from '../../contexts/LanguageContext';
import { useMenu } from '../../contexts/MenuContext';
import { getOrderUrl } from '../../utils/whatsapp';
import { MENU_IMAGES } from './CoverFlowCarousel';

const FALLBACK_IMG = 'https://images.unsplash.com/photo-1569058242252-623df46b5025?auto=format&fit=crop&w=600&q=80';

export default function DishMarquee() {
  const { lang } = useLang();
  const { menuItems } = useMenu();

  // Use top dishes for the continuous marquee
  const displayItems = menuItems.slice(0, 10);

  // Duplicate items for a seamless continuous 100% -> -50% loop
  const marqueeItems = [...displayItems, ...displayItems];

  return (
    <section className="relative w-full py-10 bg-bark-950 text-cream-50 overflow-hidden border-y border-white/10 select-none">
      {/* Background ambient lighting */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(212,160,23,0.08) 0%, transparent 80%)',
        }}
      />

      {/* Eyebrow header */}
      <div className="max-w-6xl mx-auto px-4 mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold-300">
            {lang === 'id' ? 'Galeri Hidangan Nusantara' : 'Live Culinary Ribbon'}
          </span>
        </div>
        <span className="text-[11px] text-bark-400 font-medium tracking-wide hidden sm:inline">
          {lang === 'id' ? 'Sentuh untuk melihat detail' : 'Hover to pause & click to order'}
        </span>
      </div>

      {/* Marquee Track Container with Vignette Gradient Edges */}
      <div className="relative w-full overflow-hidden group">
        {/* Left & Right fade masks */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-bark-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-bark-950 to-transparent z-10 pointer-events-none" />

        {/* Continuous Animated Track */}
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] gap-6 pl-4">
          {marqueeItems.map((dish, idx) => {
            const name = lang === 'id' ? dish.nameId : dish.nameEn;
            const subtitle = lang === 'id' ? dish.nameEn : dish.nameId;
            const img = dish.image || MENU_IMAGES[dish.id] || FALLBACK_IMG;
            const price = `Rp ${dish.price.toLocaleString('id-ID')}`;
            const waUrl = getOrderUrl(lang, name);

            return (
              <a
                key={`${dish.id}-${idx}`}
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center gap-4 bg-bark-900/90 hover:bg-bark-850 border border-white/10 hover:border-gold-400/50 rounded-2xl p-3 pr-5 transition-all duration-300 hover-lift group/card cursor-pointer shrink-0"
              >
                {/* Organic backdrop blob behind dish plate (Bali Wok style) */}
                <div
                  className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shrink-0 border border-gold-400/30 shadow-md group-hover/card:scale-105 transition-transform duration-500"
                >
                  <img
                    src={img}
                    alt={name}
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Subtle dark vignette on bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Dish Info */}
                <div className="flex flex-col min-w-[140px] max-w-[180px]">
                  <div className="flex items-center gap-1.5 mb-1">
                    {dish.spice > 0 && (
                      <span className="text-[10px] text-chili-400 font-bold">
                        {'🌶️'.repeat(dish.spice)}
                      </span>
                    )}
                    {dish.tabs.includes('bestseller') && (
                      <span className="text-[9px] font-bold uppercase tracking-wider text-gold-300 bg-gold-400/15 border border-gold-400/30 px-1.5 py-0.5 rounded-full">
                        Best
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-sm sm:text-base font-bold text-white group-hover/card:text-gold-300 transition-colors line-clamp-1">
                    {name}
                  </h3>
                  <span className="text-[11px] text-bark-400 italic line-clamp-1">
                    {subtitle}
                  </span>

                  <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-white/5">
                    <span className="font-bold text-xs text-gold-400">
                      {price}
                    </span>
                    <span className="text-[10px] text-bark-300 group-hover/card:text-white flex items-center gap-1 transition-colors">
                      <span>Order</span>
                      <ArrowRight size={10} className="group-hover/card:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

