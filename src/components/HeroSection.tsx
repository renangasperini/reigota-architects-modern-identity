import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.querySelector("#quem-somos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden"
    >
      {/* Architectural grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-5" />

      {/* Decorative lines */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-1/4 left-0 w-1/3 h-px bg-gradient-to-r from-primary-foreground/0 via-primary-foreground/30 to-primary-foreground/0"
      />
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-1/3 right-0 w-1/4 h-px bg-gradient-to-l from-primary-foreground/0 via-primary-foreground/30 to-primary-foreground/0"
      />

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Small title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-primary-foreground/70 text-sm md:text-base tracking-[0.3em] uppercase mb-6"
          >
            Arquitetura & Interiores
          </motion.p>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-light text-primary-foreground leading-tight mb-8"
          >
            Design que{" "}
            <span className="font-semibold italic">transforma</span>
            <br />
            espaços
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed"
          >
            Traduzimos sonhos em espaços com alma e autenticidade. 
            Cada projeto reflete a essência única de quem o habita.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Button
              onClick={scrollToAbout}
              variant="outline"
              size="lg"
              className="bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-500 px-8 py-6 text-sm tracking-widest uppercase"
            >
              Conheça nosso trabalho
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={scrollToAbout}
        >
          <span className="text-primary-foreground/50 text-xs tracking-widest uppercase">
            Scroll
          </span>
          <ArrowDown className="w-4 h-4 text-primary-foreground/50" />
        </motion.div>
      </motion.div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-24 h-24 border-l border-t border-primary-foreground/20" />
      <div className="absolute bottom-8 right-8 w-24 h-24 border-r border-b border-primary-foreground/20" />
    </section>
  );
};

export default HeroSection;