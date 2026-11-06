import { HelpCircle, MessageCircle } from 'lucide-react';
import Faq3, { type FaqItem } from '../components/ui/Faq3';
import { faqItems } from '../data/menu';
import { useLang } from '../contexts/LanguageContext';
import { t } from '../data/translations';
import { getOrderUrl } from '../utils/whatsapp';

export default function FAQPage() {
  const { lang } = useLang();

  const formattedItems: FaqItem[] = faqItems.map((item) => ({
    id: item.id,
    question: lang === 'id' ? item.questionId : item.questionEn,
    answer: (lang === 'id' ? item.answerIdLines : item.answerEnLines).join('\n\n'),
  }));

  return (
    <div className="pt-24 min-h-screen bg-cream-50">
      {/* Page Hero with Custom Background Image */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 text-cream-50 text-center relative overflow-hidden">
        {/* Background Image Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/FAQ%20page/FAQ%20Section.jpg")',
          }}
        />
        {/* Multi-layer gradient overlay for rich contrast & legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-bark-950/90 via-bark-950/75 to-bark-950/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-bark-950/60 via-transparent to-bark-950/60" />

        <div className="max-w-3xl mx-auto relative z-10">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-gold-400 uppercase tracking-widest px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/20 mb-4">
            <HelpCircle size={13} className="text-gold-400" />
            Frequently Asked Questions
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-50 mb-4 leading-tight">
            Common Inquiries
          </h1>
          <p className="text-cream-200/90 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Everything you need to know about our Indonesian heritage recipes, family dining, private events, and WhatsApp ordering.
          </p>
        </div>
      </section>

      {/* 21st.dev Modern Faq3 Accordion */}
      <Faq3
        heading="Answers to Common Questions"
        description="Quick guidance on menu accommodations, delivery areas, preparation times, and ordering details."
        items={formattedItems}
      />

      {/* Footer Support Info */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-20 sm:pb-24 text-center">
        <div className="bg-cream-100/70 rounded-2xl border border-cream-200 p-6 sm:p-8">
          <p className="text-sm sm:text-base font-semibold text-bark-800 mb-4">
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
    </div>
  );
}
