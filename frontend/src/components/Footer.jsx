import { motion } from "framer-motion";
import WaitlistForm from "@/components/WaitlistForm";

const Footer = () => {
  return (
    <footer data-testid="footer-section" className="relative overflow-hidden border-t border-[rgba(255,196,71,0.10)] bg-elevated/40">
      <div className="pointer-events-none absolute bottom-[-30%] left-1/2 h-[28rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,122,26,0.14)_0%,transparent_65%)]" />
      <div className="relative mx-auto max-w-7xl px-6 pb-14 pt-28 lg:px-10 lg:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-start gap-10"
        >
          <h2 className="max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl" data-testid="footer-cta-heading">
            Let your money have a <span className="text-gradient-sona">mood swing</span> — upward.
          </h2>
          <WaitlistForm idPrefix="footer-waitlist" compact />
        </motion.div>

        <div className="mt-24 select-none overflow-hidden" aria-hidden="true">
          <p className="font-display text-[18vw] font-bold leading-[0.85] tracking-tighter text-transparent lg:text-[13rem] [-webkit-text-stroke:1px_rgba(255,196,71,0.22)]">
            BillFirst
          </p>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-8 border-t border-[rgba(255,196,71,0.10)] pt-10 md:flex-row md:items-center">
          <div className="flex items-center gap-2.5" data-testid="footer-logo">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-sona-yellow to-sona-orange">
              <span className="h-1.5 w-1.5 rounded-full bg-void" />
            </span>
            <span className="font-display text-base font-bold">BillFirst</span>
            <span className="text-xs text-ash">— your money's mood, made visible</span>
          </div>
          <nav className="flex flex-wrap gap-8 text-sm text-sand" data-testid="footer-links">
            <a href="#features" className="transition-colors duration-300 hover:text-sona-yellow">Features</a>
            <a href="#pricing" className="transition-colors duration-300 hover:text-sona-yellow">Pricing</a>
            <a href="#faq" className="transition-colors duration-300 hover:text-sona-yellow">FAQ</a>
            <a href="#top" className="transition-colors duration-300 hover:text-sona-yellow">Privacy</a>
            <a href="#top" className="transition-colors duration-300 hover:text-sona-yellow">Terms</a>
          </nav>
          <p className="text-xs text-ash" data-testid="footer-copyright">© 2026 BillFirst. Made with glow, not guilt.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
