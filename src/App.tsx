import { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import BestSellers from './components/BestSellers';
import CulinaryHeritage from './components/CulinaryHeritage';
import FamilySets from './components/FamilySets';
import SocialProof from './components/SocialProof';
import LocationHours from './components/LocationHours';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import StickyBottomBar from './components/StickyBottomBar';
import SEO from './components/SEO';
import MenuPage from './pages/MenuPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import { getRouteFromPath, type Route } from './utils/navigation';

export default function App() {
  const [route, setRoute] = useState<Route>(getRouteFromPath);

  useEffect(() => {
    const handleLocationChange = () => {
      setRoute(getRouteFromPath());
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('app-route-change', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('app-route-change', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  return (
    <HelmetProvider>
      <LanguageProvider>
        <div className="min-h-screen">
          <SEO />
          <Header currentRoute={route} />
          
          <main>
            {route === 'menu' && <MenuPage />}
            {route === 'faq' && <FAQPage />}
            {route === 'contact' && <ContactPage />}
            {route === 'home' && (
              <>
                <Hero />
                <BestSellers />
                <CulinaryHeritage />
                <FamilySets />
                <SocialProof />
                <LocationHours />
                <FinalCTA />
              </>
            )}
          </main>

          <Footer />
          <StickyBottomBar />
          <div className="h-16 sm:hidden" aria-hidden="true" />
        </div>
      </LanguageProvider>
    </HelmetProvider>
  );
}
