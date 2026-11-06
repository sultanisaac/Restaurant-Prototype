import { HelpCircle } from 'lucide-react';
import FAQ from '../components/FAQ';

export default function FAQPage() {
  return (
    <div className="pt-24 min-h-screen bg-cream-50">
      {/* Page Hero */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-bark-950 via-bark-900 to-bark-850 text-cream-50 text-center relative overflow-hidden">
        {/* Ambient background glow */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle at 50% 30%, rgba(212,160,23,0.3) 0%, transparent 60%)',
          }}
        />

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

      {/* Main FAQ Accordion Component */}
      <FAQ />
    </div>
  );
}

