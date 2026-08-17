import { motion } from "framer-motion";
import { BellRing, MessageCircle, Trophy, CalendarHeart, Radar, Wallet } from "lucide-react";
import GlowMeter from "@/components/GlowMeter";

const reveal = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
};

const Card = ({ children, className = "", testId, index = 0 }) => (
  <motion.div
    variants={reveal}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-80px" }}
    custom={index}
    data-testid={testId}
    className={`group relative overflow-hidden rounded-3xl glass p-8 transition-transform duration-500 hover:-translate-y-1.5 ${className}`}
  >
    <div className="glass-tint pointer-events-none absolute inset-0" />
    <div className="relative">{children}</div>
  </motion.div>
);

const IconBadge = ({ Icon }) => (
  <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sona-yellow/20 to-sona-orange/20 text-sona-yellow transition-transform duration-500 group-hover:scale-110">
    <Icon className="h-5 w-5" />
  </div>
);

const Features = () => {
  return (
    <section id="features" data-testid="features-section" className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
      <motion.p
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-xs font-semibold tracking-[0.3em] text-sona-yellow"
      >
        WHAT SONA DOES
      </motion.p>
      <motion.h2
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        custom={1}
        className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight md:text-5xl"
        data-testid="features-heading"
      >
        A budget that talks back — <span className="text-gradient-sona">nicely.</span>
      </motion.h2>

      <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-6">
        <Card testId="feature-card-coach" className="md:col-span-4" index={0}>
          <IconBadge Icon={MessageCircle} />
          <h3 className="font-display text-2xl font-bold md:text-3xl">Daily AI coach insights</h3>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-sand md:text-base">
            Every morning Sona pops up with one sharp observation about your
            money — where it leaked, what to skip today, and what you can
            actually afford guilt-free. A coach's voice, not a spreadsheet's.
          </p>
          <div className="mt-8 max-w-xs rounded-2xl glass p-4">
            <div className="glass-tint absolute" />
            <p className="relative text-sm italic leading-relaxed text-cream">
              "Swiggy again? Bold. You've got ₹1,240 of fun-money left this
              week — spend it like you mean it."
            </p>
            <p className="relative mt-2 text-[10px] font-semibold tracking-[0.25em] text-sona-yellow">— SONA, 9:04 AM</p>
          </div>
        </Card>

        <Card testId="feature-card-glow" className="md:col-span-2" index={1}>
          <IconBadge Icon={Wallet} />
          <h3 className="font-display text-2xl font-bold">The Glow Meter</h3>
          <p className="mt-3 text-sm leading-relaxed text-sand">
            One glance tells you everything. Sona's glow is bound to your real
            spend-vs-plan ratio — never a decorative pulse.
          </p>
          <div className="mt-8">
            <GlowMeter value={82} />
          </div>
        </Card>

        <Card testId="feature-card-bills" className="md:col-span-2" index={2}>
          <IconBadge Icon={BellRing} />
          <h3 className="font-display text-2xl font-bold">Bill & EMI radar</h3>
          <p className="mt-3 text-sm leading-relaxed text-sand">
            Rent, EMIs, subscriptions — Sona points at them before they hit,
            so a due date never ambushes you again.
          </p>
        </Card>

        <Card testId="feature-card-confession" className="md:col-span-2" index={3}>
          <IconBadge Icon={CalendarHeart} />
          <h3 className="font-display text-2xl font-bold">Monthly confession call</h3>
          <p className="mt-3 text-sm leading-relaxed text-sand">
            A calm end-of-month recap. Arms crossed, head tilted, zero
            judgement. "Let's talk" — then a better plan for next month.
          </p>
        </Card>

        <Card testId="feature-card-milestones" className="md:col-span-2" index={4}>
          <IconBadge Icon={Trophy} />
          <h3 className="font-display text-2xl font-bold">Earned celebrations</h3>
          <p className="mt-3 text-sm leading-relaxed text-sand">
            Hit a savings milestone and Sona takes over the screen — full
            glow, confetti burst. Rare on purpose, so it actually means something.
          </p>
        </Card>

        <Card testId="feature-card-radar" className="md:col-span-6" index={5}>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-xl">
              <IconBadge Icon={Radar} />
              <h3 className="font-display text-2xl font-bold md:text-3xl">No spreadsheets. No green checkmarks. No lectures.</h3>
              <p className="mt-3 text-sm leading-relaxed text-sand md:text-base">
                BillFirst reads your spends automatically and turns them into a
                single living signal. You stop doing math; Sona starts doing moods.
              </p>
            </div>
            <div className="flex gap-8">
              <div>
                <p className="tnum font-display text-4xl font-bold text-sona-yellow" data-testid="stat-bills-tracked">12k+</p>
                <p className="mt-1 text-xs tracking-wide text-ash">bills pre-tracked in beta</p>
              </div>
              <div>
                <p className="tnum font-display text-4xl font-bold text-sona-yellow" data-testid="stat-saved">₹38L</p>
                <p className="mt-1 text-xs tracking-wide text-ash">late fees dodged</p>
              </div>
              <div>
                <p className="tnum font-display text-4xl font-bold text-sona-yellow" data-testid="stat-glow">0</p>
                <p className="mt-1 text-xs tracking-wide text-ash">shame trips given</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Features;
