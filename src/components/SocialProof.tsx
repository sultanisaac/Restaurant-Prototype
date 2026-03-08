import { Star, MessageCircle, Quote, AlertCircle } from 'lucide-react';
import { useLang } from '../contexts/LanguageContext';
import { t } from '../data/translations';
import { testimonials } from '../data/menu';
import { getOrderUrl } from '../utils/whatsapp';

export default function SocialProof() {
  const { lang } = useLang();

  return (
    <section id="testimonials" className="py-16 sm:py-20 px-4 sm:px-6 bg-cream-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-bark-950 mb-3">
            {t(lang, 'social_title')}
          </h2>
          <p className="text-bark-600 text-sm sm:text-base mb-4">
            {t(lang, 'social_subtitle')}
          </p>

          <div className="inline-flex items-center gap-3 bg-white border border-cream-200 rounded-full px-5 py-2.5 shadow-sm">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={15} className="text-gold-400 fill-gold-400" />
              ))}
            </div>
            <span className="text-sm font-semibold text-bark-800">
              {t(lang, 'social_rating_label')}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {testimonials.map((testimonial) => {
            const name = lang === 'id' ? testimonial.nameId : testimonial.nameEn;
            const text = lang === 'id' ? testimonial.textId : testimonial.textEn;
            const location = lang === 'id' ? testimonial.locationId : testimonial.locationEn;

            return (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl border border-cream-200 p-5 sm:p-6 hover:shadow-md transition-shadow"
              >
                <Quote size={20} className="text-chili-200 mb-3" />
                <p className="text-bark-700 text-sm leading-relaxed mb-4">"{text}"</p>
                <div className="flex items-center gap-3 pt-3 border-t border-cream-100">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-chili-200 to-chili-400 flex items-center justify-center shrink-0">
                    <span className="text-white font-bold text-sm">{name[0]}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-bark-900">{name}</p>
                    <p className="text-xs text-bark-500">{location}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} size={11} className="text-gold-400 fill-gold-400" />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
          <p className="text-xs text-bark-400 flex items-center gap-1.5">
            <AlertCircle size={11} />
            {t(lang, 'social_review_note')}
          </p>
          <a
            href={getOrderUrl(lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-chili-600 hover:bg-chili-700 text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors shadow-sm"
          >
            <MessageCircle size={15} />
            {t(lang, 'social_cta')}
          </a>
        </div>
      </div>
    </section>
  );
}
