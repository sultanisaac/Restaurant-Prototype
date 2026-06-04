import { MapPin, Clock, Phone, Instagram, MessageCircle, ExternalLink, Navigation } from 'lucide-react';
import { useLang } from '../contexts/LanguageContext';
import { t } from '../data/translations';
import { getOrderUrl, MAPS_URL, IG_URL, PHONE_RAW } from '../utils/whatsapp';

export default function LocationHours() {
  const { lang } = useLang();

  const address = lang === 'id'
    ? 'Jl. Kemang Raya No. 10, Jakarta Selatan'
    : 'Jl. Kemang Raya No. 10, South Jakarta';

  const infoItems = [
    {
      icon: MapPin,
      label: t(lang, 'location_address_label'),
      value: address,
      href: MAPS_URL,
      linkLabel: t(lang, 'location_maps_cta'),
    },
    {
      icon: Clock,
      label: t(lang, 'location_hours_label'),
      value: t(lang, 'location_hours_value'),
      href: null,
      linkLabel: null,
    },
    {
      icon: Phone,
      label: t(lang, 'location_phone_label'),
      value: '+62 21 5555 0000',
      href: `tel:${PHONE_RAW}`,
      linkLabel: t(lang, 'location_call_cta'),
    },
  ];

  return (
    <section id="location" className="py-20 sm:py-24 px-4 sm:px-6 bg-cream-100/50 texture-grain relative overflow-hidden border-b border-cream-200">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="section-badge inline-flex items-center gap-1.5 text-xs font-bold text-chili-600 uppercase tracking-widest mb-3">
            <Navigation size={13} className="text-gold-500" />
            {lang === 'id' ? 'Kunjungi Kami' : 'Find Us'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-bark-950 mb-4 heading-accent mx-auto flex flex-col items-center">
            {t(lang, 'location_title')}
          </h2>
          <p className="text-bark-600 text-sm sm:text-base max-w-lg mt-2 leading-relaxed">
            {t(lang, 'location_subtitle')}
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Info cards column */}
          <div className="flex flex-col justify-between gap-4">
            <div className="space-y-4">
              {infoItems.map(({ icon: Icon, label, value, href, linkLabel }) => (
                <div
                  key={label}
                  className="bg-white rounded-2xl border border-cream-200/80 p-5 flex gap-4 hover:shadow-sm transition-all duration-300 hover:border-chili-200/30 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-chili-50 flex items-center justify-center shrink-0 group-hover:bg-chili-100 transition-colors">
                    <Icon size={18} className="text-chili-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-bold text-bark-400 uppercase tracking-widest mb-1">
                      {label}
                    </p>
                    <p className="text-sm font-bold text-bark-900 leading-snug">{value}</p>
                    {href && linkLabel && (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-chili-600 hover:text-chili-700 mt-2 transition-colors"
                      >
                        {linkLabel}
                        <ExternalLink size={10} className="shrink-0" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Sub-actions */}
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-white border border-cream-300 hover:border-chili-300 text-bark-850 hover:text-chili-600 font-bold text-sm py-3.5 rounded-2xl transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                <Instagram size={16} />
                {t(lang, 'location_ig_cta')}
              </a>
              <a
                href={getOrderUrl(lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-chili-600 hover:bg-chili-700 text-white font-bold text-sm py-3.5 rounded-2xl transition-all duration-200 shadow-md shadow-chili-900/10 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                <MessageCircle size={16} />
                {t(lang, 'location_cta')}
              </a>
            </div>
          </div>

          {/* Styled Premium Map Wrapper (Uses high-end styling instead of an empty box) */}
          <div className="relative rounded-3xl overflow-hidden border border-cream-200/80 shadow-premium bg-bark-900 h-72 lg:h-auto lg:min-h-[400px] flex flex-col items-center justify-center text-center p-8 group">
            {/* Ambient overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(44,26,16,0.85)_0%,rgba(20,10,5,0.95)_100%)] z-0" />
            <div className="absolute inset-0 bg-cover bg-center opacity-25 group-hover:scale-105 transition-transform duration-1000 z-0"
                 style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800)' }} />
            
            <div className="relative z-10 max-w-sm">
              <div className="w-16 h-16 rounded-full bg-chili-600/10 border border-chili-500/35 flex items-center justify-center mx-auto mb-4 animate-bounce-slow shadow-glow-chili">
                <MapPin size={28} className="text-chili-500 fill-chili-500/20" />
              </div>
              <h3 className="font-serif text-xl font-bold text-cream-50 mb-2">
                Dapur Pusaka Nusantara
              </h3>
              <p className="text-xs sm:text-sm text-bark-300 mb-6 leading-relaxed">
                {address}
              </p>
              
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-chili-600 hover:bg-chili-500 active:bg-chili-700 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full transition-all duration-200 shadow-md shadow-chili-900/50 hover:shadow-lg hover:-translate-y-px"
              >
                <ExternalLink size={14} />
                {t(lang, 'location_maps_cta')}
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
