import { useState } from 'react';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import { useLang } from '../contexts/LanguageContext';
import { t } from '../data/translations';
import { faqItems } from '../data/menu';
import { getOrderUrl } from '../utils/whatsapp';

export default function FAQ() {
  const { lang } = useLang();
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section id="faq" className="py-20 sm:py-24 px-4 sm:px-6 bg-cream-50 texture-grain relative overflow-hidden border-b border-cream-200">
      <div className="max-w-3xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="section-badge inline-flex items-center gap-1.5 text-xs font-bold text-chili-600 uppercase tracking-widest mb-3">
            <HelpCircle size={13} className="text-gold-500" />
            {lang === 'id' ? 'Pertanyaan Umum' : 'Common Inquiries'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-bark-950 mb-4 heading-accent mx-auto flex flex-col items-center">
            {t(lang, 'faq_title')}
          </h2>
          <p className="text-bark-600 text-sm sm:text-base max-w-lg mt-2 leading-relaxed">
            {t(lang, 'faq_subtitle')}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {faqItems.map((item) => {
            const question = lang === 'id' ? item.questionId : item.questionEn;
            const answerLines = lang === 'id' ? item.answerIdLines : item.answerEnLines;
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-cream-200/80 overflow-hidden shadow-sm transition-all duration-300 hover:border-chili-200/45 hover:shadow-md"
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-4.5 text-left transition-colors duration-200 hover:bg-cream-50/50"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-bark-950 leading-snug">{question}</span>
                  <div className={`p-1.5 rounded-full transition-all duration-200 ${isOpen ? 'bg-chili-50' : 'bg-cream-100/50'}`}>
                    <ChevronDown
                      size={16}
                      className={`shrink-0 text-bark-600 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-chili-600' : ''
                      }`}
                    />
                  </div>
                </button>

                {/* Smooth Expandable Panel */}
                <div
                  className={`transition-all duration-300 ease-spring overflow-hidden ${
                    isOpen ? 'max-h-[500px] border-t border-cream-100 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="px-6 py-5 bg-cream-50/20">
                    <div className="space-y-2.5">
                      {answerLines.map((line, i) => (
                        <p
                          key={i}
                          className={`text-xs sm:text-sm leading-relaxed ${
                            line.includes('WhatsApp') || line.includes('konfirmasi') || line.includes('confirm')
                              ? 'text-chili-700 font-bold'
                              : 'text-bark-700'
                          }`}
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                    
                    {/* Tiny inline WhatsApp link */}
                    <div className="mt-4 pt-4 border-t border-cream-100/50">
                      <a
                        href={getOrderUrl(lang)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-chili-600 hover:text-chili-700 transition-colors"
                      >
                        <MessageCircle size={13} />
                        {t(lang, 'faq_cta_btn')}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Support Info */}
        <div className="mt-12 text-center bg-cream-100/50 rounded-2xl border border-cream-200/50 p-6 sm:p-8">
          <p className="text-sm font-semibold text-bark-800 mb-4">
            {lang === 'id'
              ? 'Masih ada pertanyaan? Langsung chat kami di WhatsApp.'
              : 'Still have questions? Chat us directly on WhatsApp.'}
          </p>
          <a
            href={getOrderUrl(lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-chili-600 hover:bg-chili-700 text-white font-bold text-sm px-6 py-3.5 rounded-full transition-all duration-200 shadow-md shadow-chili-900/20 hover:shadow-lg hover:-translate-y-px"
          >
            <MessageCircle size={16} />
            {t(lang, 'faq_cta_btn')}
          </a>
        </div>
      </div>
    </section>
  );
}
