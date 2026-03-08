import { MessageCircle, CheckCircle2, Star } from 'lucide-react';
import { useLang } from '../contexts/LanguageContext';
import { t } from '../data/translations';
import { familySets } from '../data/menu';
import { getFamilySetOrderUrl } from '../utils/whatsapp';

export default function FamilySets() {
  const { lang } = useLang();

  return (
    <section id="family-sets" className="py-16 sm:py-20 px-4 sm:px-6 bg-bark-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-400 uppercase tracking-wider mb-3">
            <Star size={12} fill="currentColor" />
            {lang === 'id' ? 'Hemat Lebih Banyak' : 'Save More'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream-50 mb-3">
            {t(lang, 'family_title')}
          </h2>
          <p className="text-bark-300 text-sm sm:text-base max-w-lg mx-auto">
            {t(lang, 'family_subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {familySets.map((set, index) => {
            const name = lang === 'id' ? set.nameId : set.nameEn;
            const desc = lang === 'id' ? set.descId : set.descEn;
            const items = lang === 'id' ? set.itemsId : set.itemsEn;
            const isPopular = !!set.badge;

            return (
              <div
                key={set.id}
                className={`relative rounded-2xl p-6 flex flex-col transition-all ${
                  isPopular
                    ? 'bg-chili-600 text-white ring-2 ring-gold-400 ring-offset-2 ring-offset-bark-950'
                    : 'bg-bark-800 text-cream-100 hover:bg-bark-700'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gold-400 text-bark-950 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider whitespace-nowrap">
                      {lang === 'id' ? set.badge : 'Most Popular'}
                    </span>
                  </div>
                )}

                <div className="mb-4">
                  <span className={`text-xs font-semibold uppercase tracking-wider ${isPopular ? 'text-red-100' : 'text-bark-400'}`}>
                    {lang === 'id'
                      ? index === 2 ? 'Untuk 2 Orang' : `Untuk ${index === 0 ? '4' : '6'} Orang`
                      : index === 2 ? 'For 2 Guests' : `For ${index === 0 ? '4' : '6'} Guests`
                    }
                  </span>
                  <h3 className={`font-serif text-xl font-bold mt-1 ${isPopular ? 'text-white' : 'text-cream-50'}`}>
                    {name}
                  </h3>
                  <p className={`text-sm mt-1 ${isPopular ? 'text-red-100' : 'text-bark-400'}`}>{desc}</p>
                </div>

                <ul className="space-y-2 mb-6 flex-1">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <CheckCircle2
                        size={14}
                        className={`mt-0.5 shrink-0 ${isPopular ? 'text-red-200' : 'text-chili-400'}`}
                      />
                      <span className={isPopular ? 'text-red-50' : 'text-bark-300'}>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-white/10 pt-4 mb-4">
                  <span className={`font-serif text-3xl font-bold ${isPopular ? 'text-white' : 'text-cream-50'}`}>
                    Rp {set.price.toLocaleString('id-ID')}
                  </span>
                </div>

                <a
                  href={getFamilySetOrderUrl(lang, name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 font-semibold text-sm py-3 rounded-xl transition-all ${
                    isPopular
                      ? 'bg-white text-chili-700 hover:bg-cream-100 shadow-lg'
                      : 'bg-chili-600 hover:bg-chili-700 text-white'
                  }`}
                >
                  <MessageCircle size={15} />
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
