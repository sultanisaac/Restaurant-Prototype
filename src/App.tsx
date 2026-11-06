import { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import BestSellers from './components/BestSellers';
import MenuSection from './components/MenuSection';
import CulinaryHeritage from './components/CulinaryHeritage';
import FamilySets from './components/FamilySets';
import SocialProof from './components/SocialProof';
import LocationHours from './components/LocationHours';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import StickyBottomBar from './components/StickyBottomBar';
import SEO from './components/SEO';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';

type Route = 'home' | 'faq' | 'contact';

function getRouteFromHash(): Route {
  const hash = window.location.hash.toLowerCase();
  if (hash.startsWith('#/faq') || hash === '#faq') return 'faq';
  if (hash.startsWith('#/contact') || hash === '#contact') return 'contact';
  return 'home';
}

export default function App() {
  const [route, setRoute] = useState<Route>(getRouteFromHash);

  useEffect(() => {
    const handleHashChange = () => {
      const nextRoute = getRouteFromHash();
      setRoute(nextRoute);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <HelmetProvider>
      <LanguageProvider>
        <div className="min-h-screen">
          <SEO />
          <Header currentRoute={route} />
          
          <main>
            {route === 'faq' && <FAQPage />}
            {route === 'contact' && <ContactPage />}
            {route === 'home' && (
              <>
                <Hero />
                <BestSellers />
                <MenuSection />
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
