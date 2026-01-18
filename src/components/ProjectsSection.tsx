import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Residência Jardins",
    category: "Residencial",
    description: "Integração perfeita entre o interior e a natureza",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
  {
    id: 2,
    title: "Apartamento Centro",
    category: "Interiores",
    description: "Elegância contemporânea em cada detalhe",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    id: 3,
    title: "Casa de Campo",
    category: "Residencial",
    description: "Refúgio de tranquilidade e sofisticação",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    id: 4,
    title: "Loft Industrial",
    category: "Interiores",
    description: "O equilíbrio entre o rústico e o moderno",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projetos" className="py-24 md:py-32 bg-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-px h-40 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-20 right-0 w-px h-40 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-6 md:px-12" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div>
            <span className="text-muted text-sm tracking-[0.3em] uppercase mb-4 block">
              Portfólio
            </span>
            <h2 className="text-3xl md:text-5xl font-light text-foreground">
              Projetos em{" "}
              <span className="font-semibold italic text-primary">destaque</span>
            </h2>
          </div>
          <p className="text-muted-foreground font-light mt-4 md:mt-0 max-w-md">
            Cada projeto é uma história única, construída com paixão e atenção aos detalhes.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                {/* Image */}
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hoveredProject === project.id ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                  <span className="text-primary-foreground/70 text-xs tracking-[0.2em] uppercase mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-light text-primary-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-primary-foreground/80 font-light opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    {project.description}
                  </p>

                  {/* Arrow */}
                  <motion.div
                    className="absolute top-6 right-6 w-10 h-10 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center"
                    animate={{
                      scale: hoveredProject === project.id ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
                  </motion.div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;