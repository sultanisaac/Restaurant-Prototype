import React, { useState, useEffect, useCallback, useRef } from 'react';
import { MessageCircle, Sparkles, AlertCircle } from 'lucide-react';
import { useMenu } from '../../contexts/MenuContext';
import { useLang } from '../../contexts/LanguageContext';
import { t } from '../../data/translations';
import { getOrderUrl } from '../../utils/whatsapp';
import { LAST_UPDATED } from '../../data/heritage';
import type { MenuTab, MenuItem } from '../../types';

// Inline Icons (Zero external dependencies)
const ChevronLeftIcon = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

export const MENU_IMAGES: Record<string, string> = {
  rendang: 'https://images.unsplash.com/photo-1620700668269-d3ad2a88f27e?auto=format&fit=crop&w=800&q=80',
  nasigoreng: 'https://images.unsplash.com/photo-1680674774705-90b4904b3a7f?auto=format&fit=crop&w=800&q=80',
  sate: 'https://images.unsplash.com/photo-1696385793103-71f51f6fd3b7?auto=format&fit=crop&w=800&q=80',
  soto: 'https://images.unsplash.com/photo-1677029969063-23ecbb98d0af?auto=format&fit=crop&w=800&q=80',
  bakso: 'https://images.unsplash.com/photo-1687425973269-af0d62587769?auto=format&fit=crop&w=800&q=80',
  gadogado: 'https://images.unsplash.com/photo-1707269561481-a4a0370a980a?auto=format&fit=crop&w=800&q=80',
  ayampenyet: 'https://images.unsplash.com/photo-1569058242252-623df46b5025?auto=format&fit=crop&w=800&q=80',
  rawon: 'https://images.unsplash.com/photo-1677921739245-4efaa1914ef3?auto=format&fit=crop&w=800&q=80',
  nasicampur: 'https://images.unsplash.com/photo-1569058242252-623df46b5025?auto=format&fit=crop&w=800&q=80',
  gudeg: 'https://images.unsplash.com/photo-1707529332935-bfa3925f15ac?auto=format&fit=crop&w=800&q=80',
  esteh_menu: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80',
  esjeruk_menu: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80',
  kerupuk_menu: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800',
};

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1569058242252-623df46b5025?auto=format&fit=crop&w=800&q=80';

const CATEGORY_TABS: { key: MenuTab; labelKey: Parameters<typeof t>[1] }[] = [
  { key: 'bestseller', labelKey: 'menu_tab_bestseller' },
  { key: 'mains', labelKey: 'menu_tab_mains' },
  { key: 'soup', labelKey: 'menu_tab_soup' },
  { key: 'vegetables', labelKey: 'menu_tab_vegetables' },
  { key: 'snacks', labelKey: 'menu_tab_snacks' },
  { key: 'drinks', labelKey: 'menu_tab_drinks' },
];

export interface CoverFlowCarouselProps {
  sectionLabel?: string;
  autoplay?: boolean;
  autoplayDelay?: number;
  className?: string;
  onCtaClick?: (item: MenuItem) => void;
}

export function CoverFlowCarousel({
  sectionLabel = "MENU",
  autoplay = true,
  autoplayDelay = 5000,
  className = "",
  onCtaClick,
}: CoverFlowCarouselProps) {
  const { lang } = useLang();
  const { menuItems } = useMenu();
  const [activeTab, setActiveTab] = useState<MenuTab>('bestseller');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef(0);

  // Filter items based on active category
  const filteredItems = menuItems.filter((item) => item.tabs.includes(activeTab));
  const total = filteredItems.length;

  const handleTabChange = (tab: MenuTab) => {
    setActiveTab(tab);
    setCurrentIndex(0);
  };

  const nextSlide = useCallback(() => {
    if (total <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    if (total <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = (idx: number) => {
    if (total === 0) return;
    setCurrentIndex(idx % total);
  };

  useEffect(() => {
    if (!autoplay || isHovered || total <= 1) return;
    const interval = setInterval(nextSlide, autoplayDelay);
    return () => clearInterval(interval);
  }, [autoplay, autoplayDelay, isHovered, nextSlide, total]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 45) {
      if (diff < 0) nextSlide();
      else prevSlide();
    }
  };

  // 3D placement math per item
  const getSlideStyle = (offset: number, count: number) => {
    let transform = "translateX(0px) scale(0.4) rotateY(0deg)";
    let opacity = 0;
    let zIndex = 0;
    let filter = "brightness(0.65) blur(2px)";
    let isCenter = false;

    if (offset === 0) {
      isCenter = true;
      transform = "translateX(0px) scale(1) rotateY(0deg)";
      opacity = 1;
      zIndex = 30;
      filter = "brightness(1)";
    } else if (count === 2) {
      if (offset === 1) {
        transform = "translateX(285px) scale(0.84) rotateY(-24deg)";
        opacity = 0.75;
        zIndex = 20;
        filter = "brightness(0.85)";
      }
    } else if (count === 3) {
      if (offset === 1) {
        transform = "translateX(285px) scale(0.84) rotateY(-24deg)";
        opacity = 0.75;
        zIndex = 20;
        filter = "brightness(0.85)";
      } else if (offset === 2) {
        transform = "translateX(-285px) scale(0.84) rotateY(24deg)";
        opacity = 0.75;
        zIndex = 20;
        filter = "brightness(0.85)";
      }
    } else if (count === 4) {
      if (offset === 1) {
        transform = "translateX(285px) scale(0.84) rotateY(-24deg)";
        opacity = 0.75;
        zIndex = 20;
        filter = "brightness(0.85)";
      } else if (offset === 3) {
        transform = "translateX(-285px) scale(0.84) rotateY(24deg)";
        opacity = 0.75;
        zIndex = 20;
        filter = "brightness(0.85)";
      } else if (offset === 2) {
        transform = "translateX(510px) scale(0.68) rotateY(-38deg)";
        opacity = 0.45;
        zIndex = 10;
        filter = "brightness(0.7) blur(1px)";
      }
    } else {
      // count >= 5
      if (offset === 1) {
        transform = "translateX(285px) scale(0.84) rotateY(-24deg)";
        opacity = 0.75;
        zIndex = 20;
        filter = "brightness(0.85)";
      } else if (offset === 2) {
        transform = "translateX(510px) scale(0.68) rotateY(-38deg)";
        opacity = 0.45;
        zIndex = 10;
        filter = "brightness(0.7) blur(1px)";
      } else if (offset === count - 1) {
        transform = "translateX(-285px) scale(0.84) rotateY(24deg)";
        opacity = 0.75;
        zIndex = 20;
        filter = "brightness(0.85)";
      } else if (offset === count - 2) {
        transform = "translateX(-510px) scale(0.68) rotateY(38deg)";
        opacity = 0.45;
        zIndex = 10;
        filter = "brightness(0.7) blur(1px)";
      }
    }

    return { transform, opacity, zIndex, filter, isCenter };
  };

  return (
    <section
      id="menu-showcase"
      className={`relative w-full min-h-[760px] flex flex-col items-center justify-center overflow-hidden py-16 sm:py-20 select-none bg-cream-100/50 texture-grain border-b border-cream-200 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Visual embellishments matching website branding */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-cream-300 to-transparent" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(212,160,23,0.06) 0%, rgba(250,245,232,0.4) 60%, rgba(245,234,208,0.7) 100%)",
        }}
      />

      <div className="relative w-full max-w-6xl mx-auto px-4 z-10 flex flex-col items-center">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <span className="section-badge inline-flex items-center gap-1.5 text-xs font-bold text-chili-600 uppercase tracking-widest mb-3">
            <Sparkles size={12} className="text-gold-500 animate-pulse" />
            {lang === 'id' ? 'Pilihan Otentik' : 'Our Curation'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-bark-950 mb-3 leading-tight heading-accent">
            {sectionLabel}
          </h2>
          <p className="text-bark-600 text-sm sm:text-base max-w-lg text-center leading-relaxed">
            {t(lang, 'menu_subtitle')}
          </p>
        </div>

        {/* Category Filter Tabs with Website Pill Branding */}
        <div className="w-full overflow-x-auto pb-4 mb-8 scrollbar-hide">
          <div className="flex gap-2 justify-start sm:justify-center min-w-max px-2">
            {CATEGORY_TABS.map(({ key, labelKey }) => {
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => handleTabChange(key)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 ${
                    isActive
                      ? 'bg-chili-600 text-white shadow-md shadow-chili-900/15 scale-105'
                      : 'bg-white text-bark-700 border border-cream-200 hover:border-chili-300 hover:text-chili-600 shadow-xs'
                  }`}
                >
                  {t(lang, labelKey)}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3D Coverflow Stage */}
        {filteredItems.length > 0 ? (
          <div
            className="relative w-full h-[500px] flex justify-center items-center mb-8"
            style={{ perspective: "1400px" }}
          >
            {filteredItems.map((item, idx) => {
              const offset = (idx - currentIndex + total) % total;
              const { transform, opacity, zIndex, filter, isCenter } = getSlideStyle(offset, total);

              const name = lang === 'id' ? item.nameId : item.nameEn;
              const desc = lang === 'id' ? item.descId : item.descEn;
              const image = item.image || MENU_IMAGES[item.id] || FALLBACK_IMAGE;
              const formattedPrice = `Rp ${item.price.toLocaleString('id-ID')}`;
              const waUrl = getOrderUrl(lang, name);

              // Tag badge
              const tag = item.tabs.includes('bestseller')
                ? (lang === 'id' ? 'Terlaris' : 'Bestseller')
                : item.spice > 0
                ? item.spice === 3
                  ? '🌶️🌶️🌶️ Pedas'
                  : item.spice === 2
                  ? '🌶️🌶️ Sedang'
                  : '🌶️ Ringan'
                : (lang === 'id' ? 'Otentik' : 'Authentic');

              return (
                <div
                  key={item.id}
                  onClick={() => !isCenter && goToSlide(idx)}
                  style={{
                    position: "absolute",
                    width: "320px",
                    height: "480px",
                    borderRadius: "20px",
                    overflow: "hidden",
                    backgroundColor: "#1c140e",
                    border: isCenter ? "1px solid rgba(212, 160, 23, 0.45)" : "1px solid rgba(226, 208, 184, 0.5)",
                    transform,
                    opacity,
                    zIndex,
                    filter,
                    transformOrigin: "center center",
                    transition: "all 800ms cubic-bezier(0.25, 1, 0.5, 1)",
                    boxShadow: isCenter
                      ? "0 20px 45px -10px rgba(44, 26, 16, 0.35), 0 0 25px rgba(212, 160, 23, 0.2)"
                      : "0 10px 25px -5px rgba(44, 26, 16, 0.15)",
                    cursor: isCenter ? "default" : "pointer",
                  }}
                >
                  {/* Photo */}
                  <img
                    src={image}
                    alt={name}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />

                  {/* Multi-layer vignette overlay for high contrast & luxury feel */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.05) 25%, rgba(44,26,16,0.7) 60%, rgba(44,26,16,0.98) 100%)",
                      pointerEvents: "none",
                      zIndex: 10,
                    }}
                  />

                  {/* Content Overlay */}
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      padding: "20px 18px 22px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      textAlign: "center",
                      zIndex: 20,
                      opacity: isCenter ? 1 : 0,
                      transform: isCenter ? "translateY(0px)" : "translateY(16px)",
                      transition: "opacity 500ms ease, transform 500ms ease",
                      pointerEvents: isCenter ? "auto" : "none",
                    }}
                  >
                    {/* Tag badge in top right */}
                    <div style={{ textAlign: "right", width: "100%", paddingRight: "4px" }}>
                      <span className="inline-block bg-gold-500/90 text-white text-[10px] font-bold tracking-wider px-3 py-1 rounded-full uppercase shadow-sm">
                        {tag}
                      </span>
                    </div>

                    {/* Body Content */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "4px",
                        marginTop: "auto",
                        paddingBottom: "4px",
                      }}
                    >
                      <h3
                        className="font-serif font-bold text-white text-xl sm:text-2xl drop-shadow-md"
                        style={{ margin: 0, lineHeight: 1.15 }}
                      >
                        {name}
                      </h3>

                      <span
                        className="text-gold-300 font-bold text-base sm:text-lg tracking-wide drop-shadow-sm"
                        style={{ lineHeight: 1.2 }}
                      >
                        {formattedPrice}
                      </span>

                      <div
                        style={{
                          width: "36px",
                          height: "2px",
                          backgroundColor: "#d4a017",
                          borderRadius: "2px",
                          margin: "6px auto",
                          boxShadow: "0 0 8px rgba(212,160,23,0.5)",
                        }}
                      />

                      {desc && (
                        <p
                          className="text-cream-100/95 text-xs sm:text-sm leading-relaxed max-w-[270px] drop-shadow-sm"
                          style={{ margin: "0 0 14px" }}
                        >
                          {desc}
                        </p>
                      )}

                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          if (onCtaClick) {
                            e.preventDefault();
                            onCtaClick(item);
                          }
                        }}
                        className="inline-flex items-center justify-center gap-1.5 bg-chili-600 hover:bg-chili-700 active:bg-chili-800 text-white font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded-full shadow-md shadow-chili-950/30 transition-all duration-200 hover:-translate-y-px"
                      >
                        <span>{t(lang, 'menu_cta')}</span>
                        <ArrowRightIcon />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="w-full max-w-md my-16 p-8 rounded-2xl bg-white border border-cream-200/80 text-center shadow-sm">
            <AlertCircle size={32} className="mx-auto mb-3 text-bark-300" />
            <p className="text-sm font-medium text-bark-600">
              {lang === 'id' ? 'Belum ada menu di kategori ini.' : 'No items found in this category.'}
            </p>
          </div>
        )}

        {/* Navigation Arrows with Brand Styling */}
        {total > 1 && (
          <>
            <button
              onClick={prevSlide}
              aria-label="Previous dish"
              className="absolute left-2 sm:left-4 top-[58%] -translate-y-1/2 w-11 h-11 rounded-full bg-white/95 hover:bg-white text-bark-900 hover:text-chili-600 border border-cream-300/80 shadow-md flex items-center justify-center transition-all duration-200 z-40"
            >
              <ChevronLeftIcon />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next dish"
              className="absolute right-2 sm:right-4 top-[58%] -translate-y-1/2 w-11 h-11 rounded-full bg-white/95 hover:bg-white text-bark-900 hover:text-chili-600 border border-cream-300/80 shadow-md flex items-center justify-center transition-all duration-200 z-40"
            >
              <ChevronRightIcon />
            </button>
          </>
        )}

        {/* Pagination Dots */}
        {total > 1 && (
          <div className="flex items-center justify-center gap-2 z-30 mb-8">
            {filteredItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 cursor-pointer ${
                  idx === currentIndex
                    ? 'w-7 h-2 bg-chili-600 rounded-full shadow-sm'
                    : 'w-2 h-2 bg-cream-300 hover:bg-cream-400 rounded-full'
                }`}
              />
            ))}
          </div>
        )}

        {/* Menu Footer & Pricing Info (Matching Website Format) */}
        <div className="w-full max-w-4xl mt-4 flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-cream-300/80 text-center sm:text-left z-20">
          <div className="flex flex-col gap-1.5">
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
            <span>{t(lang, 'menu_cta')}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default CoverFlowCarousel;
