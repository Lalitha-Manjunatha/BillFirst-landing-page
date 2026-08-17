import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Sona dimmed at me on a Tuesday and I genuinely closed the Zomato tab. No app has ever bullied me so lovingly.",
    name: "Priya Raghavan",
    role: "Product designer, Bengaluru",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2ODl8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBob3RvZ3JhcGh5JTIwZmFjZXxlbnwwfHx8fDE3ODY5NTU2MTR8MA&ixlib=rb-4.1.0&q=85&w=200&h=200&fit=crop",
  },
  {
    quote: "Three EMIs, two credit cards, zero late fees this year. The bill radar alone paid for itself fifty times over.",
    name: "Arjun Mehta",
    role: "Founder, Pune",
    img: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2ODl8MHwxfHNlYXJjaHwyfHxwb3J0cmFpdCUyMHBob3RvZ3JhcGh5JTIwZmFjZXxlbnwwfHx8fDE3ODY5NTU2MTR8MA&ixlib=rb-4.1.0&q=85&w=200&h=200&fit=crop",
  },
  {
    quote: "The confession call felt like therapy with a coin. I saved ₹40k in six months and nobody yelled at me once.",
    name: "Kavya Nair",
    role: "Architect, Kochi",
    img: "https://images.unsplash.com/photo-1587397845856-e6cf49176c70?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2ODl8MHwxfHNlYXJjaHwzfHxwb3J0cmFpdCUyMHBob3RvZ3JhcGh5JTIwZmFjZXxlbnwwfHx8fDE3ODY5NTU2MTR8MA&ixlib=rb-4.1.0&q=85&w=200&h=200&fit=crop",
  },
];

const Testimonials = () => {
  return (
    <section data-testid="testimonials-section" className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
      <motion.p
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-xs font-semibold tracking-[0.3em] text-sona-yellow"
      >
        FROM THE BETA BENCH
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight md:text-5xl"
        data-testid="testimonials-heading"
      >
        People are oddly loyal to a glowing coin.
      </motion.h2>

      <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 }}
            data-testid={`testimonial-card-${i}`}
            className="relative flex flex-col justify-between overflow-hidden rounded-3xl glass p-8 transition-transform duration-500 hover:-translate-y-1.5"
          >
            <div className="glass-tint pointer-events-none absolute inset-0" />
            <div className="relative">
              <Quote className="mb-5 h-6 w-6 text-sona-orange" />
              <blockquote className="text-base leading-relaxed text-cream">"{t.quote}"</blockquote>
            </div>
            <figcaption className="relative mt-8 flex items-center gap-4">
              <img
                src={t.img}
                alt={t.name}
                loading="lazy"
                className="h-12 w-12 rounded-full border border-[rgba(255,196,71,0.35)] object-cover"
              />
              <div>
                <p className="font-display text-sm font-bold">{t.name}</p>
                <p className="text-xs text-ash">{t.role}</p>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
