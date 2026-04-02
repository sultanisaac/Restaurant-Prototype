import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './contexts/LanguageContext';
import PrototypeBanner from './components/PrototypeBanner';
import Header from './components/Header';
import Hero from './components/Hero';
import BestSellers from './components/BestSellers';
import MenuSection from './components/MenuSection';
import FamilySets from './components/FamilySets';
import SocialProof from './components/SocialProof';
import LocationHours from './components/LocationHours';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import StickyBottomBar from './components/StickyBottomBar';
import SEO from './components/SEO';

export default function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <div className="min-h-screen">
          <SEO />
          <PrototypeBanner />
          <Header />
          <main>
            <Hero />
            <BestSellers />
            <MenuSection />
            <FamilySets />
            <SocialProof />
            <LocationHours />
            <FAQ />
            <FinalCTA />
          </main>
          <Footer />
          <StickyBottomBar />
          <div className="h-16 sm:hidden" aria-hidden="true" />
        </div>
      </LanguageProvider>
    </HelmetProvider>
  );
}
