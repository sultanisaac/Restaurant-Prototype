import { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { useLang } from '../contexts/LanguageContext';
import { t } from '../data/translations';
import { faqItems } from '../data/menu';
import { getOrderUrl } from '../utils/whatsapp';

export default function FAQ() {
  const { lang } = useLang();
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section id="faq" className="py-16 sm:py-20 px-4 sm:px-6 bg-cream-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-bark-950 mb-3">
            {t(lang, 'faq_title')}
          </h2>
          <p className="text-bark-600 text-sm sm:text-base">
            {t(lang, 'faq_subtitle')}
          </p>
        </div>

        <div className="space-y-2">
          {faqItems.map((item) => {
            const question = lang === 'id' ? item.questionId : item.questionEn;
            const answerLines = lang === 'id' ? item.answerIdLines : item.answerEnLines;
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-cream-200 overflow-hidden transition-shadow hover:shadow-sm"
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold text-bark-900 leading-snug">{question}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-bark-500 transition-transform duration-200 mt-0.5 ${
                      isOpen ? 'rotate-180 text-chili-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-cream-100">
                    <div className="space-y-2">
                      {answerLines.map((line, i) => (
                        <p
                          key={i}
                          className={`text-sm leading-relaxed ${
                            line.includes('WhatsApp') || line.includes('konfirmasi') || line.includes('confirm')
                              ? 'text-chili-600 font-semibold'
                              : 'text-bark-700'
                          }`}
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                    <a
                      href={getOrderUrl(lang)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-chili-600 hover:text-chili-700 transition-colors"
                    >
                      <MessageCircle size={13} />
                      {t(lang, 'faq_cta_btn')}
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-bark-600 mb-4">
            {lang === 'id'
              ? 'Masih ada pertanyaan? Langsung chat kami di WhatsApp.'
              : 'Still have questions? Chat us directly on WhatsApp.'}
          </p>
          <a
            href={getOrderUrl(lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-chili-600 hover:bg-chili-700 text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors shadow-sm"
          >
            <MessageCircle size={15} />
            {t(lang, 'faq_cta_btn')}
          </a>
        </div>
      </div>
    </section>
  );
}
