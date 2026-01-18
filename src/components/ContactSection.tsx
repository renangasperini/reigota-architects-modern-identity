import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefone",
    value: "(11) 99999-9999",
    href: "tel:+5511999999999",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "contato@reigotaarquitetura.com.br",
    href: "mailto:contato@reigotaarquitetura.com.br",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "São Paulo, SP",
    href: "#",
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Mensagem enviada com sucesso!", {
      description: "Entraremos em contato em breve.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contato" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 grid-pattern opacity-[0.02]" />

      <div className="container mx-auto px-6 md:px-12" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="text-muted text-sm tracking-[0.3em] uppercase mb-4 block">
            Contato
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-foreground mb-6">
            Vamos criar{" "}
            <span className="font-semibold italic text-primary">juntos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">
            Pronto para transformar seu espaço? Entre em contato e vamos começar 
            a materializar seus sonhos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-2xl font-light text-foreground mb-8">
              Informações de contato
            </h3>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: 0.3 + index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted uppercase tracking-wider mb-1">
                      {info.label}
                    </p>
                    <p className="text-foreground font-medium group-hover:text-primary transition-colors duration-300">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Additional info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="mt-12 p-6 bg-cream rounded-lg border border-border"
            >
              <p className="text-muted-foreground font-light">
                <span className="font-medium text-foreground">Horário de atendimento:</span>
                <br />
                Segunda a Sexta, das 9h às 18h
              </p>
            </motion.div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-sm text-muted uppercase tracking-wider mb-2 block">
                    Nome
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Seu nome"
                    className="bg-card border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="text-sm text-muted uppercase tracking-wider mb-2 block">
                    Telefone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(00) 00000-0000"
                    className="bg-card border-border focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="text-sm text-muted uppercase tracking-wider mb-2 block">
                  E-mail
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="seu@email.com"
                  className="bg-card border-border focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="subject" className="text-sm text-muted uppercase tracking-wider mb-2 block">
                  Assunto
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Como podemos ajudar?"
                  className="bg-card border-border focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-sm text-muted uppercase tracking-wider mb-2 block">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Conte-nos sobre seu projeto..."
                  rows={5}
                  className="bg-card border-border focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    Enviar mensagem
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;