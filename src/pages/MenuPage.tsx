import { UtensilsCrossed } from 'lucide-react';
import CoverFlowCarousel from '../components/ui/CoverFlowCarousel';
import MenuSection from '../components/MenuSection';
import { useLang } from '../contexts/LanguageContext';
import { getOrderUrl } from '../utils/whatsapp';

export default function MenuPage() {
  const { lang } = useLang();

  const handleCtaClick = () => {
    window.open(getOrderUrl(lang), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="pt-24 min-h-screen bg-cream-50">
      {/* Page Hero */}
      <section className="py-14 sm:py-16 px-4 sm:px-6 bg-gradient-to-b from-bark-950 via-bark-900 to-bark-850 text-cream-50 text-center relative overflow-hidden">
        {/* Ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle at 50% 30%, rgba(212,160,23,0.3) 0%, transparent 60%)',
          }}
        />

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

      {/* 21st.dev 3D Coverflow Showcase */}
      <CoverFlowCarousel onCtaClick={handleCtaClick} />

      {/* Complete Categorized Menu Section */}
      <MenuSection />
    </div>
  );
}

