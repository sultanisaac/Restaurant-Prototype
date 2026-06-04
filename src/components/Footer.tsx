import { MessageCircle, Instagram, Phone, MapPin, Clock, Sparkles } from 'lucide-react';
import { useLang } from '../contexts/LanguageContext';
import { t } from '../data/translations';
import { getOrderUrl, getReservationUrl, MAPS_URL, IG_URL, PHONE_RAW } from '../utils/whatsapp';

export default function Footer() {
  const { lang } = useLang();

  const navLinks = [
    { label: t(lang, 'nav_menu'), href: '#menu' },
    { label: t(lang, 'nav_family'), href: '#family-sets' },
    { label: lang === 'id' ? 'Testimoni' : 'Reviews', href: '#testimonials' },
    { label: t(lang, 'nav_location'), href: '#location' },
    { label: t(lang, 'nav_faq'), href: '#faq' },
  ];

  return (
    <footer className="bg-bark-950 text-cream-200 border-t border-bark-900 texture-grain relative overflow-hidden">
      
      {/* Subtle bottom safe-area space on mobile to prevent overlap with sticky bottom bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-20 sm:pb-8 relative z-10">
        
        {/* Footer Top Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Info and Brand */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-4">
            <div>
              <span className="font-serif text-2xl font-bold text-cream-50 block leading-tight">
                Dapur Pusaka Nusantara
              </span>
              <span className="text-[10px] text-gold-400 font-bold tracking-widest uppercase block mt-1">
                {lang === 'id' ? 'Masakan Tradisional Indonesia' : 'Traditional Indonesian Food'}
              </span>
            </div>
            <p className="text-sm text-bark-400 leading-relaxed max-w-sm">
              {t(lang, 'footer_tagline')}
            </p>
            
            {/* Quick Actions */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={getOrderUrl(lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 bg-chili-600 hover:bg-chili-500 active:bg-chili-700 text-white text-xs font-bold px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm shadow-chili-950/20"
              >
                <MessageCircle size={14} />
                {lang === 'id' ? 'Pesan Sekarang' : 'Order'}
              </a>
              <a
                href={getReservationUrl(lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 bg-bark-900 hover:bg-bark-800 text-cream-100 text-xs font-semibold px-5 py-2.5 rounded-full transition-all duration-200 border border-bark-800"
              >
                {lang === 'id' ? 'Reservasi' : 'Reserve'}
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-bold text-cream-100 uppercase tracking-widest mb-4">
              {t(lang, 'footer_links_title')}
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-bark-400 hover:text-gold-300 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-xs font-bold text-cream-100 uppercase tracking-widest mb-4">
              {lang === 'id' ? 'Hubungi Kami' : 'Contact Us'}
            </h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-2.5 text-sm text-bark-400">
                <MapPin size={15} className="shrink-0 mt-0.5 text-gold-400/80" />
                <span className="leading-snug">{t(lang, 'footer_address')}</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-bark-400">
                <Clock size={15} className="shrink-0 text-gold-400/80" />
                <span>{t(lang, 'footer_hours')}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="shrink-0 text-gold-400/80" />
                <a
                  href={`tel:${PHONE_RAW}`}
                  className="text-sm text-bark-400 hover:text-gold-300 transition-colors"
                >
                  +62 21 5555 0000
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Instagram size={15} className="shrink-0 text-gold-400/80" />
                <a
                  href={IG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-bark-400 hover:text-gold-300 transition-colors"
                >
                  @dapurpusaka.nusantara
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Block */}
        <div className="border-t border-bark-900 pt-8 space-y-4">
          <div className="flex items-start gap-2.5 bg-bark-900/60 border border-bark-800/40 rounded-2xl p-4">
            <Sparkles size={14} className="text-gold-400 shrink-0 mt-0.5 animate-pulse" />
            <p className="text-xs text-bark-400 leading-relaxed">
              {t(lang, 'footer_disclaimer')}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-bark-500">
            <span className="text-center sm:text-left">{t(lang, 'footer_copyright')}</span>
            <span className="bg-bark-900 text-gold-400/85 px-3 py-1 rounded-full font-bold uppercase tracking-widest text-[9px] border border-bark-800/40">
              {t(lang, 'footer_proto_note')}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
