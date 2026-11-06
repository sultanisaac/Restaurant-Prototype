import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './accordion';

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface Faq3Props {
  heading?: string;
  description?: string;
  items?: FaqItem[];
  className?: string;
}

export const defaultFaqItems: FaqItem[] = [
  {
    id: "faq-1",
    question: "What is a FAQ?",
    answer:
      "A FAQ is a list of frequently asked questions and answers on a particular topic.",
  },
  {
    id: "faq-2",
    question: "What is the purpose of a FAQ?",
    answer:
      "The purpose of a FAQ is to provide answers to common questions and help users find the information they need quickly and easily.",
  },
  {
    id: "faq-3",
    question: "How do I create a FAQ?",
    answer:
      "To create a FAQ, you need to compile a list of common questions and answers on a particular topic and organize them in a clear and easy-to-navigate format.",
  },
  {
    id: "faq-4",
    question: "What are the benefits of a FAQ?",
    answer:
      "The benefits of a FAQ include providing quick and easy access to information, reducing the number of support requests, and improving the overall user experience.",
  },
  {
    id: "faq-5",
    question: "How should I organize my FAQ?",
    answer:
      "You should organize your FAQ in a logical manner, grouping related questions together and ordering them from most basic to more advanced topics.",
  },
  {
    id: "faq-6",
    question: "How long should FAQ answers be?",
    answer:
      "FAQ answers should be concise and to the point, typically a few sentences or a short paragraph is sufficient for most questions.",
  }
];

export function Faq3({
  heading = "Frequently asked questions",
  description = "Find answers to common questions about our dishes, dining, and ordering. Can't find what you're looking for? Reach out on WhatsApp.",
  items = defaultFaqItems,
  className = "",
}: Faq3Props) {
  return (
    <section className={`py-14 sm:py-20 px-4 sm:px-6 ${className}`}>
      <div className="max-w-3xl mx-auto space-y-10 sm:space-y-14">
        <div className="flex flex-col text-left md:text-center">
          <h2 className="font-serif mb-3 text-3xl font-bold text-bark-950 md:mb-4 lg:text-4xl leading-tight">
            {heading}
          </h2>
          <p className="text-bark-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="w-full"
        >
          {items.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="transition-opacity duration-200 hover:no-underline hover:opacity-75">
                <div className="font-serif font-bold sm:py-1 lg:py-2 text-base sm:text-lg text-bark-900 text-left">
                  {item.question}
                </div>
              </AccordionTrigger>
              <AccordionContent className="sm:mb-1 lg:mb-2">
                <div className="text-bark-600 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                  {item.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default Faq3;

