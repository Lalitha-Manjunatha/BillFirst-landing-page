import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is Sona going to judge my 2 AM pizza orders?",
    a: "Never. Sona's whole personality is cheeky accountability with zero shame. Overspend and she dims, shrugs, and recalculates tomorrow's plan — no lectures, no guilt trips, no red angry screens.",
  },
  {
    q: "How does the glow actually work?",
    a: "Sona's brightness is bound to a real number: your spend so far today versus your daily allowance. Bright gold means go ahead, dimming edges mean ease up, and a dull rusty crawl means your wallet needs a breather. It's a signal, never decoration.",
  },
  {
    q: "Is my financial data safe?",
    a: "BillFirst uses read-only, bank-grade encrypted connections — we can see your transactions, but we can never move your money. Your data is never sold, and Sona never shares your secrets. She's loyal like that.",
  },
  {
    q: "Which banks and bills are supported?",
    a: "All major Indian banks and cards via secure account-aggregator rails, plus rent, EMIs, utilities, and 12,000+ subscription services. If it bills you, Sona probably already watches it.",
  },
  {
    q: "When does early access open?",
    a: "We're letting people in off the waitlist in weekly batches. Join with your email and you'll get your invite — the first 1,000 members get Sona Plus free for a year.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" data-testid="faq-section" className="mx-auto max-w-4xl px-6 py-28 lg:px-10 lg:py-40">
      <motion.p
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-xs font-semibold tracking-[0.3em] text-sona-yellow"
      >
        QUESTIONS, ANSWERED HONESTLY
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl"
        data-testid="faq-heading"
      >
        Ask away. Sona's listening.
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.15 }}
        className="mt-14"
      >
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              data-testid={`faq-item-${i}`}
              className="overflow-hidden rounded-2xl border border-[rgba(255,196,71,0.14)] bg-elevated px-6"
            >
              <AccordionTrigger
                data-testid={`faq-trigger-${i}`}
                className="py-6 text-left font-display text-lg font-bold text-cream hover:text-sona-yellow hover:no-underline"
              >
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-sm leading-relaxed text-sand md:text-base">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
};

export default FAQ;
