import { MessageCircle, CheckCircle2, Star } from 'lucide-react';
import { useLang } from '../contexts/LanguageContext';
import { t } from '../data/translations';
import { familySets } from '../data/menu';
import { getFamilySetOrderUrl } from '../utils/whatsapp';

export default function FamilySets() {
  const { lang } = useLang();

  return (
    <section id="family-sets" className="py-20 sm:py-24 px-4 sm:px-6 bg-bark-950 texture-grain relative overflow-hidden">
      
      {/* Decorative ambient elements */}
      <div className="absolute top-0 left-0 w-80 h-80 pointer-events-none opacity-20"
           style={{ background: 'radial-gradient(circle, rgba(212,160,23,0.1) 0%, transparent 75%)' }} />
      <div className="absolute bottom-0 right-0 w-80 h-80 pointer-events-none opacity-20"
           style={{ background: 'radial-gradient(circle, rgba(192,57,43,0.15) 0%, transparent 75%)' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-badge inline-flex items-center gap-1.5 text-xs font-bold text-gold-400 uppercase tracking-widest mb-3">
            <Star size={12} fill="currentColor" className="text-gold-400 animate-pulse" />
            {lang === 'id' ? 'Hemat Lebih Banyak' : 'Save More'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-cream-50 mb-4 heading-accent mx-auto flex flex-col items-center">
            {t(lang, 'family_title')}
          </h2>
          <p className="text-bark-300 text-sm sm:text-base max-w-lg mx-auto mt-2 leading-relaxed">
            {t(lang, 'family_subtitle')}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {familySets.map((set, index) => {
            const name = lang === 'id' ? set.nameId : set.nameEn;
            const desc = lang === 'id' ? set.descId : set.descEn;
            const items = lang === 'id' ? set.itemsId : set.itemsEn;
            const isPopular = !!set.badge;

            return (
              <div
                key={set.id}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col transition-all duration-300 border ${
                  isPopular
                    ? 'bg-chili-700 border-gold-400 text-white shadow-premium scale-[1.03] z-10 md:translate-y-[-4px]'
                    : 'bg-bark-900 border-bark-800 text-cream-100 hover:bg-bark-850 hover:border-cream-800/20'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-gold-400 to-gold-500 text-bark-950 text-[10px] font-bold px-4.5 py-1.5 rounded-full uppercase tracking-widest shadow-md">
                      {lang === 'id' ? set.badge : 'Most Popular'}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${isPopular ? 'text-gold-200' : 'text-bark-400'}`}>
                    {lang === 'id'
                      ? index === 2 ? 'Untuk 2 Orang' : `Untuk ${index === 0 ? '4' : '6'} Orang`
                      : index === 2 ? 'For 2 Guests' : `For ${index === 0 ? '4' : '6'} Guests`
                    }
                  </span>
                  <h3 className={`font-serif text-2xl font-bold mt-1 leading-snug ${isPopular ? 'text-white' : 'text-cream-50'}`}>
                    {name}
                  </h3>
                  <p className={`text-xs mt-2 leading-relaxed ${isPopular ? 'text-red-100/90' : 'text-bark-300'}`}>{desc}</p>
                </div>

                {/* Items List */}
                <ul className="space-y-3 mb-8 flex-1">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle2
                        size={15}
                        className={`mt-0.5 shrink-0 ${isPopular ? 'text-gold-400' : 'text-chili-500'}`}
                      />
                      <span className={`leading-relaxed ${isPopular ? 'text-white/90 font-medium' : 'text-bark-200'}`}>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Price Display */}
                <div className={`border-t pt-5 mb-6 ${isPopular ? 'border-white/10' : 'border-bark-800'}`}>
                  <span className={`font-serif text-3xl font-bold ${isPopular ? 'text-white' : 'text-cream-50'}`}>
                    Rp {set.price.toLocaleString('id-ID')}
                  </span>
                </div>

                {/* Reservation CTA Button */}
                <a
                  href={getFamilySetOrderUrl(lang, name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2.5 font-bold text-sm py-3.5 rounded-2xl transition-all duration-200 shadow-sm ${
                    isPopular
                      ? 'bg-white text-chili-850 hover:bg-cream-50 shadow-md shadow-chili-950/20 active:translate-y-px'
                      : 'bg-chili-600 hover:bg-chili-500 active:bg-chili-700 text-white active:translate-y-px'
                  }`}
                >
                  <MessageCircle size={16} />
                  {t(lang, 'family_cta')}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
