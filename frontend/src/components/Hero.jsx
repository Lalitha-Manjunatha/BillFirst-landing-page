import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";
import WaitlistForm from "@/components/WaitlistForm";
import GlowMeter from "@/components/GlowMeter";

const line = {
  hidden: { y: "115%" },
  show: (i) => ({
    y: "0%",
    transition: { duration: 1.05, ease: [0.22, 1, 0.36, 1], delay: 0.35 + i * 0.14 },
  }),
};

const MaskedLine = ({ children, index, className = "" }) => (
  <span className="block overflow-hidden pb-1">
    <motion.span
      custom={index}
      variants={line}
      initial="hidden"
      animate="show"
      className={`block ${className}`}
    >
      {children}
    </motion.span>
  </span>
);

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const videoY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      data-testid="hero-section"
      className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20"
    >
      <motion.div
        style={{ y: glowY }}
        className="pointer-events-none absolute -top-40 right-[-10%] h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(circle,rgba(255,122,26,0.20)_0%,rgba(42,20,10,0.08)_45%,transparent_70%)]"
      />
      <div className="pointer-events-none absolute bottom-[-20%] left-[-15%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(255,212,71,0.07)_0%,transparent_65%)]" />

      <motion.div style={{ opacity: fade }} className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mb-8 flex items-center gap-3"
            data-testid="hero-eyebrow"
          >
            <span className="h-2 w-2 rounded-full bg-sona-yellow animate-glow-pulse shadow-[0_0_10px_rgba(255,212,71,0.9)]" />
            <span className="text-xs font-semibold tracking-[0.3em] text-sand">MASCOT / 01 — MEET SONA</span>
          </motion.div>

          <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tighter sm:text-7xl lg:text-[5.6rem]" data-testid="hero-headline">
            <MaskedLine index={0}>Your money's</MaskedLine>
            <MaskedLine index={1}>mood, made</MaskedLine>
            <MaskedLine index={2} className="text-gradient-sona">visible.</MaskedLine>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.0 }}
            className="mt-8 max-w-md text-base leading-relaxed text-sand md:text-lg"
            data-testid="hero-subcopy"
          >
            BillFirst pairs your budget with Sona — a tiny glowing coin who
            brightens when you're on track and dims when your wallet's tired.
            Cheeky accountability. Zero shame.
          </motion.p>

          <motion.div
            id="waitlist"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.15 }}
            className="mt-10"
          >
            <WaitlistForm idPrefix="hero-waitlist" />
            <p className="mt-4 flex items-center gap-2 text-xs text-ash" data-testid="hero-note">
              <Sparkles className="h-3.5 w-3.5 text-sona-yellow" />
              Early access opens soon. First 1,000 get Sona Plus free for a year.
            </p>
          </motion.div>
        </div>

        <motion.div
          style={{ y: videoY }}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          className="relative lg:col-span-5"
          data-testid="hero-video-frame"
        >
          <div className="absolute inset-0 -z-10 scale-110 rounded-full bg-[radial-gradient(circle,rgba(255,140,30,0.28)_0%,transparent_65%)] blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(255,196,71,0.22)] bg-elevated shadow-[0_40px_120px_-20px_rgba(255,122,26,0.25)]">
            <video
              src="/assets/sona-coin-sprite.mp4"
              poster="/assets/sona-poster.jpg"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              data-testid="sona-hero-video"
              className="aspect-square w-full object-cover mix-blend-screen"
            />
            <div className="absolute inset-x-5 bottom-5 rounded-2xl glass p-4">
              <div className="glass-tint absolute inset-0 rounded-2xl" />
              <div className="relative">
                <div className="mb-3 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-semibold tracking-[0.25em] text-sona-yellow">COIN SPRITE</p>
                    <p className="font-display text-2xl font-bold">Sona</p>
                  </div>
                  <span className="rounded-full border border-[rgba(255,196,71,0.3)] px-3 py-1 text-[10px] font-semibold tracking-[0.2em] text-sand">
                    ON TRACK
                  </span>
                </div>
                <GlowMeter value={82} />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
