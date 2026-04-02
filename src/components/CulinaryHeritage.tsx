import { useLang } from '../contexts/LanguageContext';
import { heritageStories } from '../data/heritage';
import { BookOpen } from 'lucide-react';

export default function CulinaryHeritage() {
  const { lang } = useLang();

  return (
    <section id="heritage" className="py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 space-y-6 md:space-y-0">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-3 text-amber-700 mb-4 transition-all duration-300 transform hover:translate-x-1">
              <BookOpen className="w-6 h-6" />
              <span className="uppercase tracking-widest text-sm font-bold">
                {lang === 'id' ? 'Warisan & Filosofi' : 'Heritage & Philosophy'}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 leading-tight">
              {lang === 'id' 
                ? 'Cerita di Balik Setiap Rasa' 
                : 'The Stories Behind Every Flavor'}
            </h2>
          </div>
          <p className="text-stone-600 max-w-sm italic border-l-2 border-amber-200 pl-4 py-1">
            {lang === 'id'
              ? 'Menghormati tradisi, merayakan bahan-bahan lokal, dan menjaga warisan Nusantara.'
              : 'Honoring tradition, celebrating local ingredients, and preserving Nusantara heritage.'}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16">
          {heritageStories.map((story, index) => (
            <article 
              key={story.id} 
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              {/* Image Container */}
              <div className="w-full lg:w-1/2 group">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
                  <img
                    src={story.imageUrl}
                    alt={lang === 'id' ? story.titleId : story.titleEn}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <span className="text-white text-xs font-medium tracking-widest uppercase">
                      Last Updated: {story.lastUpdated}
                    </span>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div className="space-y-4">
                  <h3 className="text-3xl font-serif font-semibold text-stone-900">
                    {lang === 'id' ? story.titleId : story.titleEn}
                  </h3>
                  <p className="text-lg text-amber-800 font-medium leading-relaxed">
                    {lang === 'id' ? story.excerptId : story.excerptEn}
                  </p>
                </div>
                
                <div className="space-y-6 border-l-2 border-stone-200 pl-8 py-2">
                  {(lang === 'id' ? story.contentId : story.contentEn).map((paragraph, pIdx) => (
                    <p key={pIdx} className="text-stone-700 leading-loose text-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="pt-4">
                  <footer className="text-stone-500 text-sm font-medium">
                    {lang === 'id' ? 'Ditulis oleh Tim Dapur Pusaka' : 'Written by Dapur Pusaka Team'} • {story.lastUpdated}
                  </footer>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
