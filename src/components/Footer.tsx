import { motion } from "framer-motion";
import { Instagram, Facebook, Linkedin, Mail } from "lucide-react";
import logo from "@/assets/logo.jpg";

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/reigotaarquitetura", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "mailto:contato@reigotaarquitetura.com.br", label: "Email" },
];

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#quem-somos", label: "Quem Somos" },
  { href: "#projetos", label: "Projetos" },
  { href: "#sobre-mim", label: "Sobre Mim" },
  { href: "#contato", label: "Contato" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-16 md:py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-16">
          {/* Logo and description */}
          <div>
            <img
              src={logo}
              alt="Reigota Arquitetura"
              className="h-12 w-auto mb-6"
            />
            <p className="text-primary-foreground/70 font-light leading-relaxed max-w-sm">
              Transformamos sonhos em espaços com alma e autenticidade. 
              Arquitetura que reflete a essência de quem a habita.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-widest mb-6">
              Navegação
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300 font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social and contact */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-widest mb-6">
              Redes Sociais
            </h4>
            <div className="flex gap-4 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="text-primary-foreground/70 font-light text-sm">
              contato@reigotaarquitetura.com.br
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-primary-foreground/20 mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-primary-foreground/50 text-sm">
          <p>© {currentYear} Reigota Arquitetura. Todos os direitos reservados.</p>
          <p className="font-light">
            Arquitetura & Design de Interiores
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;