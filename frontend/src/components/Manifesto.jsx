import { motion } from "framer-motion";

const chapters = [
  {
    num: "01",
    title: "Connect once. Sona starts watching.",
    body: "Link your accounts and bills in minutes. Sona quietly learns your rhythm — salary day, rent day, the Friday biryani pattern — and builds your daily allowance around real life.",
  },
  {
    num: "02",
    title: "Her glow becomes your dashboard.",
    body: "Bright gold means spend freely. Dimming edges mean slow down. A dull, rusty crawl means your wallet needs a nap. One living signal replaces every chart you've ever ignored.",
  },
  {
    num: "03",
    title: "Accountability that never turns into shame.",
    body: "Overshoot your day and Sona doesn't scold — she recalculates tomorrow so you recover automatically. Miss a milestone and she shrugs it off with you. A coach, never a judge.",
  },
];

const Manifesto = () => {
  return (
    <section id="manifesto" data-testid="manifesto-section" className="relative border-t border-[rgba(255,196,71,0.10)] bg-elevated/30">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-xs font-semibold tracking-[0.3em] text-sona-yellow"
        >
          HOW IT WORKS — THE MANIFESTO
        </motion.p>
        <div className="mt-16 space-y-24 lg:space-y-32">
          {chapters.map((c, i) => (
            <motion.div
              key={c.num}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className={`grid grid-cols-1 gap-6 md:grid-cols-12 ${i % 2 === 1 ? "md:text-right" : ""}`}
              data-testid={`manifesto-chapter-${c.num}`}
            >
              <div className={`md:col-span-4 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <span className="tnum font-display text-[7rem] font-bold leading-none text-transparent md:text-[10rem] [-webkit-text-stroke:1.5px_rgba(255,196,71,0.35)]">
                  {c.num}
                </span>
              </div>
              <div className={`md:col-span-8 ${i % 2 === 1 ? "md:order-1" : ""} flex flex-col justify-center`}>
                <h3 className={`max-w-lg font-display text-3xl font-bold tracking-tight md:text-4xl ${i % 2 === 1 ? "md:ml-auto" : ""}`}>
                  {c.title}
                </h3>
                <p className={`mt-5 max-w-lg text-base leading-relaxed text-sand md:text-lg ${i % 2 === 1 ? "md:ml-auto" : ""}`}>
                  {c.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
