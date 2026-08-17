import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Chillar",
    price: "₹0",
    period: "forever",
    blurb: "For the curious. Meet Sona, track one account.",
    features: ["1 linked account", "Daily glow signal", "Bill reminders", "Monthly confession call"],
    cta: "Start free",
    featured: false,
  },
  {
    name: "Sona Plus",
    price: "₹149",
    period: "/month",
    blurb: "The full coach. Every mood, every nudge, every save.",
    features: [
      "Unlimited linked accounts",
      "Daily AI coach insights",
      "Bill & EMI radar",
      "Savings milestones + streaks",
      "Priority glow (early features)",
    ],
    cta: "Join the waitlist",
    featured: true,
  },
  {
    name: "Khazana",
    price: "₹349",
    period: "/month",
    blurb: "For households. One Sona, up to four humans.",
    features: ["Everything in Plus", "4 family seats", "Shared bill radar", "Household glow score"],
    cta: "Join the waitlist",
    featured: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" data-testid="pricing-section" className="relative border-t border-[rgba(255,196,71,0.10)] bg-elevated/30">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-xs font-semibold tracking-[0.3em] text-sona-yellow"
        >
          PRICING
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight md:text-5xl"
          data-testid="pricing-heading"
        >
          Cheaper than one late fee.
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 }}
              data-testid={`pricing-card-${p.name.toLowerCase().replace(/\s+/g, "-")}`}
              className={`relative flex flex-col overflow-hidden rounded-3xl p-8 transition-transform duration-500 hover:-translate-y-1.5 ${
                p.featured
                  ? "glass shadow-[0_30px_90px_-20px_rgba(255,122,26,0.35)] ring-1 ring-sona-yellow/40"
                  : "border border-[rgba(255,196,71,0.12)] bg-elevated"
              }`}
            >
              {p.featured && (
                <>
                  <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,180,60,0.35)_0%,transparent_70%)] blur-xl" />
                  <span className="absolute right-6 top-6 rounded-full bg-gradient-to-r from-sona-yellow to-sona-orange px-3 py-1 text-[10px] font-bold tracking-[0.15em] text-void">
                    MOST GLOW
                  </span>
                </>
              )}
              <h3 className="font-display text-xl font-bold">{p.name}</h3>
              <div className="mt-5 flex items-baseline gap-1">
                <span className="tnum font-display text-5xl font-bold text-sona-yellow">{p.price}</span>
                <span className="text-sm text-ash">{p.period}</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-sand">{p.blurb}</p>
              <ul className="mt-8 flex-1 space-y-3.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-cream">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sona-yellow/25 to-sona-orange/25">
                      <Check className="h-3 w-3 text-sona-yellow" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#waitlist"
                data-testid={`pricing-cta-${p.name.toLowerCase().replace(/\s+/g, "-")}`}
                className={`mt-10 block rounded-full py-3 text-center text-sm font-bold transition-transform duration-300 hover:scale-[1.03] ${
                  p.featured
                    ? "bg-gradient-to-r from-sona-yellow to-sona-orange text-void"
                    : "border border-[rgba(255,196,71,0.3)] text-cream"
                }`}
              >
                {p.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
