import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock Instagram posts - would be replaced with real Instagram API data
const instagramPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&q=80",
    likes: 234,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&q=80",
    likes: 189,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=400&q=80",
    likes: 312,
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=400&q=80",
    likes: 156,
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80",
    likes: 278,
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&q=80",
    likes: 201,
  },
];

const InstagramSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="instagram" className="py-24 md:py-32 bg-cream relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="text-muted text-sm tracking-[0.3em] uppercase mb-4 block">
            Acompanhe
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-foreground mb-6">
            Siga nosso{" "}
            <span className="font-semibold italic text-primary">trabalho</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">
            Acompanhe os bastidores, inspirações e novos projetos no nosso Instagram.
          </p>
        </motion.div>

        {/* Instagram grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href="https://instagram.com/reigotaarquitetura"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              <img
                src={post.image}
                alt={`Post ${post.id}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/60 transition-colors duration-500 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 px-8"
          >
            <a
              href="https://instagram.com/reigotaarquitetura"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Instagram className="w-5 h-5" />
              @reigotaarquitetura
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramSection;