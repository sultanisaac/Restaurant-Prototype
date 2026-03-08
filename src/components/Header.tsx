import { useState, useEffect } from 'react';
import { MessageCircle, Menu as MenuIcon, X } from 'lucide-react';
import { useLang } from '../contexts/LanguageContext';
import { t } from '../data/translations';
import { getOrderUrl, getReservationUrl } from '../utils/whatsapp';

export default function Header() {
  const { lang, toggleLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const navLinks = [
    { label: t(lang, 'nav_menu'), href: '#menu' },
    { label: t(lang, 'nav_family'), href: '#family-sets' },
    { label: t(lang, 'nav_location'), href: '#location' },
    { label: t(lang, 'nav_faq'), href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-cream-50/95 backdrop-blur-sm shadow-sm border-b border-cream-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <a href="#top" className="flex flex-col leading-none shrink-0">
          <span className="font-serif text-lg font-bold text-bark-950 leading-tight">
            Dapur Pusaka
          </span>
          <span className="font-serif text-xs text-chili-600 font-semibold tracking-wider uppercase">
            Nusantara
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-bark-700 hover:text-chili-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleLang}
            className="hidden sm:flex items-center gap-1 text-xs font-semibold px-2.5 py-1.5 rounded-full border border-bark-300 text-bark-700 hover:border-chili-600 hover:text-chili-600 transition-colors"
          >
            {lang === 'id' ? 'EN' : 'ID'}
          </button>

          <a
            href={getReservationUrl(lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex text-sm font-medium text-bark-700 hover:text-chili-600 transition-colors px-3 py-1.5"
          >
            {t(lang, 'reserve_btn')}
          </a>

          <a
            href={getOrderUrl(lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 bg-chili-600 hover:bg-chili-700 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors shadow-sm"
          >
            <MessageCircle size={15} />
            {t(lang, 'order_btn')}
          </a>

          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="md:hidden p-2 text-bark-800 hover:text-chili-600 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-cream-50 border-t border-cream-200 px-4 pb-4 pt-2 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm font-medium text-bark-700 hover:text-chili-600 transition-colors border-b border-cream-200 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 flex items-center gap-3">
            <button
              onClick={() => { toggleLang(); setMobileOpen(false); }}
              className="text-xs font-semibold px-3 py-1.5 rounded-full border border-bark-300 text-bark-700"
            >
              {lang === 'id' ? 'EN' : 'ID'}
            </button>
            <a
              href={getReservationUrl(lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-bark-700 hover:text-chili-600 transition-colors"
            >
              {t(lang, 'reserve_btn')}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
