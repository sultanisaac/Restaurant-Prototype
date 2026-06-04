import { useLang } from '../contexts/LanguageContext';
import { heritageStories } from '../data/heritage';
import { BookOpen, Sparkles } from 'lucide-react';

export default function CulinaryHeritage() {
  const { lang } = useLang();

  return (
    <section id="heritage" className="py-24 bg-cream-50 texture-grain relative overflow-hidden border-b border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 space-y-6 md:space-y-0">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-3 text-chili-600 mb-4 transition-all duration-300 transform hover:translate-x-1">
              <BookOpen className="w-5 h-5 text-gold-500" />
              <span className="uppercase tracking-widest text-xs font-bold text-chili-600">
                {lang === 'id' ? 'Warisan & Filosofi' : 'Heritage & Philosophy'}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-bark-950 leading-tight heading-accent">
              {lang === 'id' 
                ? 'Cerita di Balik Setiap Rasa' 
                : 'The Stories Behind Every Flavor'}
            </h2>
          </div>
          <p className="text-bark-600 max-w-sm italic border-l-2 border-gold-400 pl-4 py-1 text-sm sm:text-base">
            {lang === 'id'
              ? 'Menghormati tradisi, merayakan bahan-bahan lokal, dan menjaga warisan Nusantara.'
              : 'Honoring tradition, celebrating local ingredients, and preserving Nusantara heritage.'}
          </p>
        </div>

        {/* Stories list */}
        <div className="grid grid-cols-1 gap-20">
          {heritageStories.map((story, index) => (
            <article 
              key={story.id} 
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-16 items-center`}
            >
              {/* Image Container with premium frame & effects */}
              <div className="w-full lg:w-1/2 group">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] shadow-premium transition-transform duration-500 group-hover:scale-[1.01] border border-cream-200">
                  <img
                    src={story.imageUrl}
                    alt={lang === 'id' ? story.titleId : story.titleEn}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bark-950/75 via-bark-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <span className="text-white text-xs font-bold tracking-widest uppercase flex items-center gap-1.5">
                      <Sparkles size={12} className="text-gold-400" />
                      Last Updated: {story.lastUpdated}
                    </span>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-bark-950">
                    {lang === 'id' ? story.titleId : story.titleEn}
                  </h3>
                  <p className="text-base sm:text-lg text-chili-700 font-bold leading-relaxed">
                    {lang === 'id' ? story.excerptId : story.excerptEn}
                  </p>
                </div>
                
                {/* Paragraphs with customized warm borders */}
                <div className="space-y-5 border-l-2 border-gold-300/40 pl-6 sm:pl-8 py-1">
                  {(lang === 'id' ? story.contentId : story.contentEn).map((paragraph, pIdx) => (
                    <p key={pIdx} className="text-bark-700 leading-relaxed text-sm sm:text-base">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="pt-4">
                  <footer className="text-bark-500 text-xs font-semibold uppercase tracking-wider">
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
