import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.jpg";

interface PreloaderProps {
  isLoading: boolean;
}

const Preloader = ({ isLoading }: PreloaderProps) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-primary"
        >
          {/* Architectural grid lines animation */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Horizontal lines */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`h-${i}`}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 0.1 }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute left-0 h-px w-full bg-primary-foreground/30"
                style={{ top: `${(i + 1) * 12}%` }}
              />
            ))}
            {/* Vertical lines */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`v-${i}`}
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 0.1 }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute top-0 w-px h-full bg-primary-foreground/30"
                style={{ left: `${(i + 1) * 16}%` }}
              />
            ))}
          </div>

          {/* Logo container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col items-center gap-8"
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-48 md:w-64"
            >
              <img
                src={logo}
                alt="Reigota Arquitetura"
                className="w-full h-auto"
              />
            </motion.div>

            {/* Animated loading line */}
            <motion.div className="relative w-32 h-0.5 bg-primary-foreground/20 overflow-hidden rounded-full">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-primary-foreground"
              />
            </motion.div>
          </motion.div>

          {/* Decorative corner elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="absolute top-8 left-8 w-16 h-16"
          >
            <div className="absolute top-0 left-0 w-full h-px bg-primary-foreground/30" />
            <div className="absolute top-0 left-0 h-full w-px bg-primary-foreground/30" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="absolute bottom-8 right-8 w-16 h-16"
          >
            <div className="absolute bottom-0 right-0 w-full h-px bg-primary-foreground/30" />
            <div className="absolute bottom-0 right-0 h-full w-px bg-primary-foreground/30" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;