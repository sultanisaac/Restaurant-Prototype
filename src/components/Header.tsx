import { useState, useEffect, useRef } from 'react';
import { MessageCircle, Menu as MenuIcon, X } from 'lucide-react';
import { useLang } from '../contexts/LanguageContext';
import { t } from '../data/translations';
import { getOrderUrl, getReservationUrl } from '../utils/whatsapp';
import PrototypeBanner from './PrototypeBanner';

interface HeaderProps {
  currentRoute?: 'home' | 'faq' | 'contact';
}

export default function Header({ currentRoute = 'home' }: HeaderProps) {
  const { lang } = useLang();
  const [showBanner, setShowBanner] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navLinks = [
    { label: 'Home', href: '#/', key: 'home' },
    { label: t(lang, 'nav_family'), href: '#/family-sets', key: 'family' },
    { label: 'Contact', href: '#/contact', key: 'contact' },
    { label: 'FAQ', href: '#/faq', key: 'faq' },
  ];

  const closeMobile = () => setMobileOpen(false);

  const handleNavClick = (href: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    closeMobile();

    if (href === '#/faq') {
      window.location.hash = '#/faq';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (href === '#/contact') {
      window.location.hash = '#/contact';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (href === '#/menu' || href === '#/family-sets') {
      const sectionId = href === '#/menu' ? 'menu' : 'family-sets';
      if (window.location.hash.startsWith('#/faq') || window.location.hash.startsWith('#/contact')) {
        window.location.hash = '#/';
        setTimeout(() => {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }, 120);
      } else {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.hash = '#/';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    closeMobile();
    window.location.hash = '#/';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled || currentRoute !== 'home'
            ? 'bg-bark-950/70 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/15'
            : 'bg-transparent'
        }`}
      >
        {showBanner && <PrototypeBanner onClose={() => setShowBanner(false)} />}

        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">

          {/* Logo */}
          <a
            href="#/"
            onClick={handleLogoClick}
            className="flex flex-col leading-none shrink-0 group cursor-pointer"
            aria-label="Dapur Pusaka Nusantara | Home"
          >
            <span className="font-serif text-lg font-bold leading-tight text-white transition-colors duration-300">
              Dapur Pusaka
            </span>
            <span className="font-serif text-[10px] font-bold tracking-[0.2em] uppercase text-gold-300 transition-colors duration-300">
              Nusantara
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive =
                (link.key === 'home' && currentRoute === 'home') ||
                (link.key === 'faq' && currentRoute === 'faq') ||
                (link.key === 'contact' && currentRoute === 'contact');

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(link.href, e)}
                  className={`text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-gold-300 bg-white/10 font-semibold'
                      : 'text-cream-100/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="flex items-center gap-2">
            <a
              href={getReservationUrl(lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex text-sm font-semibold px-3 py-1.5 rounded-lg text-cream-100 hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              {t(lang, 'reserve_btn')}
            </a>

            <a
              href={getOrderUrl(lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-chili-600 hover:bg-chili-700 text-white text-sm font-bold px-4 py-2 rounded-full transition-all duration-200 shadow-md shadow-chili-900/30 hover:shadow-lg hover:-translate-y-px"
            >
              <MessageCircle size={14} />
              {t(lang, 'order_btn')}
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="md:hidden p-2 rounded-lg text-cream-50 hover:text-white hover:bg-white/10 transition-all duration-200"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X size={22} /> : <MenuIcon size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!mobileOpen}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-bark-950/60 backdrop-blur-sm"
          onClick={closeMobile}
        />

        {/* Drawer panel */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-72 bg-cream-50 shadow-2xl shadow-bark-950/30 transition-transform duration-300 ease-spring ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-cream-200">
            <div className="flex flex-col leading-none">
              <span className="font-serif text-base font-bold text-bark-950">Dapur Pusaka</span>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-chili-600">Nusantara</span>
            </div>
            <button
              onClick={closeMobile}
              className="p-2 rounded-lg text-bark-600 hover:text-chili-600 hover:bg-chili-50 transition-colors"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Nav links */}
          <nav className="px-3 py-4 space-y-1" aria-label="Mobile navigation">
            {navLinks.map((link) => {
              const isActive =
                (link.key === 'home' && currentRoute === 'home') ||
                (link.key === 'faq' && currentRoute === 'faq') ||
                (link.key === 'contact' && currentRoute === 'contact');

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(link.href, e)}
                  className={`flex items-center px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'text-chili-600 bg-chili-50 font-bold'
                      : 'text-bark-800 hover:text-chili-600 hover:bg-chili-50'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Mobile CTAs */}
          <div className="px-5 py-4 border-t border-cream-200 space-y-3 mt-auto">
            <a
              href={getOrderUrl(lang)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobile}
              className="flex items-center justify-center gap-2 bg-chili-600 hover:bg-chili-700 text-white font-bold text-sm py-3 rounded-xl transition-colors shadow-md shadow-chili-900/20"
            >
              <MessageCircle size={16} />
              {t(lang, 'order_btn')}
            </a>
            <a
              href={getReservationUrl(lang)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobile}
              className="flex items-center justify-center gap-2 bg-cream-100 hover:bg-cream-200 text-bark-800 font-semibold text-sm py-3 rounded-xl transition-colors border border-cream-300"
            >
              {t(lang, 'reserve_btn')}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
