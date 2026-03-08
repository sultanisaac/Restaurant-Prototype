import { MessageCircle, Instagram, Phone, MapPin, Clock, AlertTriangle } from 'lucide-react';
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
    <footer className="bg-bark-950 text-cream-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="mb-3">
              <span className="font-serif text-xl font-bold text-cream-50 block leading-tight">
                Dapur Pusaka Nusantara
              </span>
              <span className="text-xs text-chili-400 font-semibold tracking-wider uppercase">
                {lang === 'id' ? 'Masakan Tradisional Indonesia' : 'Traditional Indonesian Food'}
              </span>
            </div>
            <p className="text-sm text-bark-400 leading-relaxed mb-4 max-w-xs">
              {t(lang, 'footer_tagline')}
            </p>
            <div className="flex gap-3">
              <a
                href={getOrderUrl(lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-chili-600 hover:bg-chili-700 text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors"
              >
                <MessageCircle size={13} />
                {lang === 'id' ? 'Pesan' : 'Order'}
              </a>
              <a
                href={getReservationUrl(lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-bark-800 hover:bg-bark-700 text-cream-200 text-xs font-semibold px-4 py-2 rounded-full transition-colors border border-bark-700"
              >
                {lang === 'id' ? 'Reservasi' : 'Reserve'}
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-cream-100 uppercase tracking-wider mb-3">
              {t(lang, 'footer_links_title')}
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-bark-400 hover:text-cream-200 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-cream-100 uppercase tracking-wider mb-3">
              {lang === 'id' ? 'Kontak' : 'Contact'}
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2 text-sm text-bark-400">
                <MapPin size={14} className="shrink-0 mt-0.5 text-bark-500" />
                <span>{t(lang, 'footer_address')}</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-bark-400">
                <Clock size={14} className="shrink-0 text-bark-500" />
                <span>{t(lang, 'footer_hours')}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="shrink-0 text-bark-500" />
                <a
                  href={`tel:${PHONE_RAW}`}
                  className="text-sm text-bark-400 hover:text-cream-200 transition-colors"
                >
                  +62 21 5555 0000
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram size={14} className="shrink-0 text-bark-500" />
                <a
                  href={IG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-bark-400 hover:text-cream-200 transition-colors"
                >
                  @dapurpusaka.nusantara
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-bark-800 pt-6 space-y-3">
          <div className="flex items-start gap-2 bg-bark-900/50 rounded-xl p-3">
            <AlertTriangle size={13} className="text-gold-400 shrink-0 mt-0.5" />
            <p className="text-xs text-bark-400 leading-relaxed">
              {t(lang, 'footer_disclaimer')}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-bark-600">
            <span>{t(lang, 'footer_copyright')}</span>
            <span className="bg-bark-800 text-bark-400 px-2.5 py-1 rounded-full font-medium">
              {t(lang, 'footer_proto_note')}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
