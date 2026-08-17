import { useEffect } from "react";
import "@/App.css";
import Lenis from "lenis";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Features from "@/components/Features";
import Manifesto from "@/components/Manifesto";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 1.05 });
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="grain relative min-h-screen bg-void text-cream overflow-x-clip">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Features />
        <Manifesto />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: "#1D110A",
            border: "1px solid rgba(255,196,71,0.25)",
            color: "#FFF4E3",
          },
        }}
      />
    </div>
  );
}

export default App;
