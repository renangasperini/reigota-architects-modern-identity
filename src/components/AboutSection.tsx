import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, Heart, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Eye,
    title: "Escuta Profunda",
    description:
      "Entendemos que cada cliente é único. Por isso, ouvimos atentamente para traduzir seus desejos em espaços que contam histórias.",
  },
  {
    icon: Heart,
    title: "Elegância & Autenticidade",
    description:
      "Combinamos sofisticação com personalidade, criando ambientes que refletem a essência de quem os habita.",
  },
  {
    icon: Lightbulb,
    title: "Inovação com Alma",
    description:
      "Unimos técnica, arte e emoção para criar projetos contemporâneos que inspiram pertencimento e conforto.",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="quem-somos" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cream to-transparent opacity-50" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-muted text-sm tracking-[0.3em] uppercase mb-4 block">
            Quem Somos
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-foreground mb-6">
            Transformamos sonhos em{" "}
            <span className="font-semibold italic text-primary">realidade</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">
            Reigota Arquitetura é um estúdio de arquitetura e interiores que 
            transforma cada espaço no reflexo da personalidade de cada cliente.
          </p>
        </motion.div>

        {/* Values grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative"
            >
              <div className="bg-card p-8 md:p-10 rounded-lg border border-border hover:border-primary/20 transition-all duration-500 hover-lift h-full">
                {/* Icon */}
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-500">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  {value.description}
                </p>

                {/* Decorative line */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 text-center"
        >
          <p className="text-2xl md:text-3xl font-light text-foreground italic max-w-3xl mx-auto leading-relaxed">
            "Guiada por uma escuta atenta e uma sensibilidade estética refinada, 
            combinamos funcionalidade, beleza e autenticidade."
          </p>
          <div className="mt-6 w-12 h-px bg-primary mx-auto" />
        </motion.blockquote>
      </div>
    </section>
  );
};

export default AboutSection;