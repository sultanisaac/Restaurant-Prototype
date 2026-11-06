import { UtensilsCrossed } from 'lucide-react';
import CoverFlowCarousel from '../components/ui/CoverFlowCarousel';
import { useLang } from '../contexts/LanguageContext';
import { getOrderUrl } from '../utils/whatsapp';
import type { MenuItem } from '../types';

export default function MenuPage() {
  const { lang } = useLang();

  const handleCtaClick = (item: MenuItem) => {
    const dishName = lang === 'id' ? item.nameId : item.nameEn;
    window.open(getOrderUrl(lang, dishName), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="pt-24 min-h-screen bg-cream-50">
      {/* Page Hero with Custom Background Image */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 text-cream-50 text-center relative overflow-hidden">
        {/* Background Image Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/Menu%20page/First%20Section.jpg")',
          }}
        />
        {/* Multi-layer gradient overlay for rich contrast & legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-bark-950/90 via-bark-950/75 to-bark-950/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-bark-950/60 via-transparent to-bark-950/60" />

        <div className="max-w-3xl mx-auto relative z-10">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-gold-400 uppercase tracking-widest px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/20 mb-4">
            <UtensilsCrossed size={13} className="text-gold-400" />
            Authentic Indonesian Cuisine
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-50 mb-4 leading-tight">
            Our Culinary Menu
          </h1>
          <p className="text-cream-200/90 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            From slow-simmered beef rendang to charcoal-grilled skewers and fragrant comfort broths, explore our complete selection.
          </p>
        </div>
      </section>

      {/* Unified 3D Coverflow Menu Showcase with Categories */}
      <CoverFlowCarousel sectionLabel="MENU" onCtaClick={handleCtaClick} />
    </div>
  );
}
