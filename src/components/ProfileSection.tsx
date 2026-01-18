import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import profileImage from "@/assets/sobremim.png";

const ProfileSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre-mim" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 grid-pattern opacity-[0.02]" />

      <div className="container mx-auto px-6 md:px-12" ref={ref}>
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-2 md:order-1"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto">
              {/* Main image */}
              <img
                src={profileImage}
                alt="Arquiteta Reigota"
                className="w-full h-full object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-700"
              />

              {/* Frame decoration */}
              <div className="absolute -top-4 -left-4 w-full h-full border border-primary/30 rounded-lg -z-10" />
              
              {/* Floating accent */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-6 py-4 rounded-lg"
              >
                <span className="text-3xl font-light">+5</span>
                <span className="text-sm block opacity-80">anos de experiência</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 md:order-2"
          >
            <span className="text-muted text-sm tracking-[0.3em] uppercase mb-4 block">
              Sobre Mim
            </span>
            <h2 className="text-3xl md:text-5xl font-light text-foreground mb-6">
              Por trás de cada{" "}
              <span className="font-semibold italic text-primary">projeto</span>
            </h2>

            <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
              <p>
                Sou apaixonada por criar espaços que contam histórias. Minha abordagem 
                combina um olhar sensível com técnica apurada, sempre buscando entender 
                profundamente as necessidades e sonhos de cada cliente.
              </p>
              <p>
                Com formação em Arquitetura e Urbanismo e especialização em Design de 
                Interiores, acredito que um bom projeto vai além da estética — ele 
                transforma a forma como vivemos e nos relacionamos com nossos espaços.
              </p>
              <p>
                Cada projeto é tratado como único, com dedicação total para criar 
                ambientes que inspiram, acolhem e refletem a essência de quem os habita.
              </p>
            </div>

            {/* Signature line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 pt-8 border-t border-border"
            >
              <p className="text-foreground font-medium text-lg">Reigota</p>
              <p className="text-muted text-sm">Arquiteta e Urbanista</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;