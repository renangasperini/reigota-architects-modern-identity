import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo-3.2-baunilha.png";

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
          {/* Architectural blueprint grid with animated drawing effect */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="blueprint-grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <motion.line
                  x1="0" y1="0" x2="80" y2="0"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-primary-foreground/10"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
                <motion.line
                  x1="0" y1="0" x2="0" y2="80"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-primary-foreground/10"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#blueprint-grid)" />
          </svg>

          {/* Animated architectural lines - Golden ratio inspired */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Diagonal line */}
            <motion.div
              initial={{ scaleX: 0, rotate: -35 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="absolute top-1/2 left-0 w-[150%] h-px bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent origin-left"
              style={{ transformOrigin: "0 50%" }}
            />
            
            {/* Horizontal center line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="absolute top-[38.2%] left-0 w-full h-px bg-primary-foreground/15 origin-left"
            />
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
              className="absolute top-[61.8%] left-0 w-full h-px bg-primary-foreground/15 origin-right"
            />
            
            {/* Vertical golden ratio lines */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              className="absolute left-[38.2%] top-0 w-px h-full bg-primary-foreground/15 origin-top"
            />
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
              className="absolute left-[61.8%] top-0 w-px h-full bg-primary-foreground/15 origin-bottom"
            />
          </div>

          {/* Geometric frame animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute inset-16 md:inset-24 lg:inset-32"
          >
            {/* Top left corner */}
            <svg className="absolute top-0 left-0 w-24 h-24 md:w-32 md:h-32" viewBox="0 0 100 100">
              <motion.path
                d="M0 50 L0 0 L50 0"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-primary-foreground/30"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              />
            </svg>
            
            {/* Top right corner */}
            <svg className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32" viewBox="0 0 100 100">
              <motion.path
                d="M50 0 L100 0 L100 50"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-primary-foreground/30"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
              />
            </svg>
            
            {/* Bottom right corner */}
            <svg className="absolute bottom-0 right-0 w-24 h-24 md:w-32 md:h-32" viewBox="0 0 100 100">
              <motion.path
                d="M100 50 L100 100 L50 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-primary-foreground/30"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
              />
            </svg>
            
            {/* Bottom left corner */}
            <svg className="absolute bottom-0 left-0 w-24 h-24 md:w-32 md:h-32" viewBox="0 0 100 100">
              <motion.path
                d="M50 100 L0 100 L0 50"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-primary-foreground/30"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
              />
            </svg>
          </motion.div>

          {/* Logo container - center */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col items-center gap-12"
          >
            {/* Logo with reveal animation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-24 md:w-32 lg:w-40"
            >
              <img
                src={logo}
                alt="Reigota Arquitetura"
                className="w-full h-auto"
              />
            </motion.div>

            {/* Modern architectural loading bar */}
            <div className="relative w-48 md:w-64">
              {/* Track */}
              <div className="h-px bg-primary-foreground/20 rounded-full overflow-hidden">
                {/* Progress bar with sweep animation */}
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "200%" }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="h-full w-1/2 bg-gradient-to-r from-transparent via-primary-foreground to-transparent"
                />
              </div>
              
              {/* Endpoint markers */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -left-1 -top-1 w-2 h-2 border border-primary-foreground/40"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="absolute -right-1 -top-1 w-2 h-2 border border-primary-foreground/40"
              />
            </div>
          </motion.div>

          {/* Subtle floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 0.3, 0],
                scale: [0, 1, 0.5],
                y: [-20, -60],
              }}
              transition={{
                duration: 3,
                delay: i * 0.4,
                repeat: Infinity,
                ease: "easeOut",
              }}
              className="absolute w-1 h-1 bg-primary-foreground/30 rounded-full"
              style={{
                left: `${20 + i * 12}%`,
                bottom: "30%",
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
