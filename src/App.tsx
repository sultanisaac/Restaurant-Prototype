import { useState, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './contexts/LanguageContext';
import { MenuProvider } from './contexts/MenuContext';
import Header from './components/Header';
import Hero from './components/Hero';
import DishMarquee from './components/ui/DishMarquee';
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
import AdminPage from './pages/AdminPage';
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

  if (route === 'admin') {
    return (
      <HelmetProvider>
        <LanguageProvider>
          <MenuProvider>
            <Helmet>
              <title>Admin Portal | Dapur Pusaka Nusantara</title>
              <meta name="robots" content="noindex, nofollow" />
            </Helmet>
            <AdminPage />
          </MenuProvider>
        </LanguageProvider>
      </HelmetProvider>
    );
  }

  return (
    <HelmetProvider>
      <LanguageProvider>
        <MenuProvider>
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
                  <DishMarquee />
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
        </MenuProvider>
      </LanguageProvider>
    </HelmetProvider>
  );
}
