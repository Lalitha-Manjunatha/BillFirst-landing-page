import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50"
      data-testid="navbar"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mt-5 flex items-center justify-between rounded-full glass px-5 py-3">
          <a href="#top" className="flex items-center gap-2.5" data-testid="nav-logo">
            <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-sona-yellow to-sona-orange shadow-[0_0_18px_rgba(255,150,40,0.55)]">
              <span className="h-2 w-2 rounded-full bg-void" />
            </span>
            <span className="font-display text-lg font-bold tracking-tight">BillFirst</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-sand md:flex" data-testid="nav-links">
            <a href="#features" className="transition-colors duration-300 hover:text-sona-yellow">Features</a>
            <a href="#manifesto" className="transition-colors duration-300 hover:text-sona-yellow">Manifesto</a>
            <a href="#pricing" className="transition-colors duration-300 hover:text-sona-yellow">Pricing</a>
            <a href="#faq" className="transition-colors duration-300 hover:text-sona-yellow">FAQ</a>
          </nav>
          <a
            href="#waitlist"
            data-testid="nav-cta-button"
            className="group rounded-full bg-gradient-to-r from-sona-yellow to-sona-orange px-5 py-2 text-sm font-bold text-void transition-transform duration-300 hover:scale-105"
          >
            Get early access
          </a>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
