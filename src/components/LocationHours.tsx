import { MapPin, Clock, Phone, Instagram, MessageCircle, ExternalLink } from 'lucide-react';
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
    <section id="location" className="py-16 sm:py-20 px-4 sm:px-6 bg-cream-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-bark-950 mb-3">
            {t(lang, 'location_title')}
          </h2>
          <p className="text-bark-600 text-sm sm:text-base">
            {t(lang, 'location_subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            {infoItems.map(({ icon: Icon, label, value, href, linkLabel }) => (
              <div
                key={label}
                className="bg-white rounded-2xl border border-cream-200 p-5 flex gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-chili-50 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-chili-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-bark-500 uppercase tracking-wide mb-0.5">
                    {label}
                  </p>
                  <p className="text-sm font-medium text-bark-900 leading-snug">{value}</p>
                  {href && linkLabel && (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-chili-600 hover:text-chili-700 mt-1.5 transition-colors"
                    >
                      {linkLabel}
                      <ExternalLink size={10} />
                    </a>
                  )}
                </div>
              </div>
            ))}

            <div className="flex gap-3">
              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-white border border-cream-300 hover:border-chili-300 text-bark-700 hover:text-chili-600 font-semibold text-sm py-3 rounded-xl transition-all"
              >
                <Instagram size={16} />
                {t(lang, 'location_ig_cta')}
              </a>
              <a
                href={getOrderUrl(lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-chili-600 hover:bg-chili-700 text-white font-semibold text-sm py-3 rounded-xl transition-all shadow-sm"
              >
                <MessageCircle size={16} />
                {t(lang, 'location_cta')}
              </a>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-cream-200 shadow-sm bg-bark-100 h-64 lg:h-auto lg:min-h-[380px] flex flex-col items-center justify-center gap-4">
            <div className="text-center px-6">
              <MapPin size={36} className="mx-auto text-chili-400 mb-3" />
              <p className="font-serif text-lg font-semibold text-bark-800 mb-1">
                Dapur Pusaka Nusantara
              </p>
              <p className="text-sm text-bark-600 mb-4">{address}</p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-chili-600 hover:bg-chili-700 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-colors shadow-sm"
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
