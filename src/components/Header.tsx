import { useState, useEffect, useRef } from 'react';
import { MessageCircle, Menu as MenuIcon, X } from 'lucide-react';
import { useLang } from '../contexts/LanguageContext';
import { t } from '../data/translations';
import { getOrderUrl, getReservationUrl } from '../utils/whatsapp';

export default function Header() {
  const { lang, toggleLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navLinks = [
    { label: t(lang, 'nav_menu'), href: '#menu' },
    { label: t(lang, 'nav_family'), href: '#family-sets' },
    { label: t(lang, 'nav_location'), href: '#location' },
    { label: t(lang, 'nav_faq'), href: '#faq' },
  ];

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-cream-50/96 backdrop-blur-md shadow-sm border-b border-cream-200/80'
            : 'bg-transparent'
        }`}
      >
        {/* Spacer for the PrototypeBanner above */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">

          {/* Logo */}
          <a
            href="#top"
            className="flex flex-col leading-none shrink-0 group"
            aria-label="Dapur Pusaka Nusantara — Home"
          >
            <span className={`font-serif text-lg font-bold leading-tight transition-colors duration-300 ${
              scrolled ? 'text-bark-950' : 'text-cream-50'
            }`}>
              Dapur Pusaka
            </span>
            <span className={`font-serif text-[10px] font-bold tracking-[0.2em] uppercase transition-colors duration-300 ${
              scrolled ? 'text-chili-600' : 'text-gold-300'
            }`}>
              Nusantara
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200 ${
                  scrolled
                    ? 'text-bark-700 hover:text-chili-600 hover:bg-chili-50'
                    : 'text-cream-100/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleLang}
              aria-label={lang === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
              className={`hidden sm:flex items-center text-[11px] font-bold px-2.5 py-1.5 rounded-full border transition-all duration-200 ${
                scrolled
                  ? 'border-bark-300 text-bark-700 hover:border-chili-500 hover:text-chili-600'
                  : 'border-white/30 text-cream-100 hover:border-white/60 hover:text-white'
              }`}
            >
              {lang === 'id' ? 'EN' : 'ID'}
            </button>

            <a
              href={getReservationUrl(lang)}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden sm:flex text-sm font-semibold px-3 py-1.5 rounded-lg transition-all duration-200 ${
                scrolled
                  ? 'text-bark-700 hover:text-chili-600 hover:bg-chili-50'
                  : 'text-cream-100 hover:text-white hover:bg-white/10'
              }`}
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
              className={`md:hidden p-2 rounded-lg transition-all duration-200 ${
                scrolled
                  ? 'text-bark-800 hover:text-chili-600 hover:bg-chili-50'
                  : 'text-cream-50 hover:text-white hover:bg-white/10'
              }`}
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
        className={`fixed inset-0 z-30 md:hidden transition-all duration-300 ${
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
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMobile}
                className="flex items-center px-4 py-3 text-sm font-semibold text-bark-800 hover:text-chili-600 hover:bg-chili-50 rounded-xl transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
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
            <button
              onClick={() => { toggleLang(); closeMobile(); }}
              className="w-full text-xs font-semibold px-4 py-2 rounded-full border border-bark-300 text-bark-700 hover:border-chili-500 hover:text-chili-600 transition-colors"
            >
              {lang === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
