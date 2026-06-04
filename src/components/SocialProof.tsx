import { Star, MessageCircle, Quote, AlertCircle, Sparkles } from 'lucide-react';
import { useLang } from '../contexts/LanguageContext';
import { t } from '../data/translations';
import { testimonials } from '../data/menu';
import { getOrderUrl } from '../utils/whatsapp';

export default function SocialProof() {
  const { lang } = useLang();

  return (
    <section id="testimonials" className="py-20 sm:py-24 px-4 sm:px-6 bg-cream-50 texture-grain relative overflow-hidden border-b border-cream-200">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="section-badge flex items-center gap-1.5 text-chili-600 font-bold text-xs uppercase tracking-widest mb-3">
            <Sparkles size={12} className="text-gold-500" />
            {lang === 'id' ? 'Ulasan Tamu' : 'Guest Reviews'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-bark-950 mb-4 heading-accent">
            {t(lang, 'social_title')}
          </h2>
          <p className="text-bark-600 text-sm sm:text-base max-w-lg mt-2 mb-6">
            {t(lang, 'social_subtitle')}
          </p>

          {/* Rating Badge */}
          <div className="inline-flex items-center gap-3 bg-white border border-cream-200 rounded-full px-5 py-2.5 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={15} className="text-gold-400 fill-gold-400 animate-pulse" />
              ))}
            </div>
            <span className="text-xs sm:text-sm font-bold text-bark-800">
              {t(lang, 'social_rating_label')}
            </span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {testimonials.map((testimonial) => {
            const name = lang === 'id' ? testimonial.nameId : testimonial.nameEn;
            const text = lang === 'id' ? testimonial.textId : testimonial.textEn;
            const location = lang === 'id' ? testimonial.locationId : testimonial.locationEn;

            return (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl border border-cream-200/80 p-6 sm:p-7 hover:shadow-premium hover:border-chili-200/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <Quote size={24} className="text-chili-600/10 group-hover:text-chili-600/20 transition-colors duration-300 mb-4" />
                  <p className="text-bark-800 text-sm sm:text-base leading-relaxed mb-6 font-serif italic">
                    "{text}"
                  </p>
                </div>
                
                <div className="flex items-center gap-3 pt-4 border-t border-cream-100">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-chili-600 to-chili-700 flex items-center justify-center shrink-0 shadow-sm">
                    <span className="text-white font-bold text-sm uppercase">{name[0]}</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-bark-900 leading-snug">{name}</p>
                    <p className="text-[11px] font-semibold text-bark-500">{location}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5 shrink-0">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} size={11} className="text-gold-400 fill-gold-400" />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer info & CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-cream-200/80">
          <p className="text-xs text-bark-500 flex items-center gap-1.5 text-center sm:text-left">
            <AlertCircle size={14} className="text-bark-400 shrink-0" />
            <span className="font-medium">{t(lang, 'social_review_note')}</span>
          </p>
          <a
            href={getOrderUrl(lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-chili-600 hover:bg-chili-700 text-white font-bold text-sm px-6 py-3.5 rounded-full transition-all duration-200 shadow-md shadow-chili-900/20 hover:shadow-lg hover:-translate-y-px"
          >
            <MessageCircle size={16} />
            {t(lang, 'social_cta')}
          </a>
        </div>
      </div>
    </section>
  );
}
