import { motion } from "framer-motion";
import { Instagram, Linkedin, Facebook, ChevronUp } from "lucide-react";

const Footer = () => {
  // Social media links
  const socialLinks = {
    instagram: "https://instagram.com/real_distribuidora",
    linkedin: "#",
    facebook: "#",
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-real-dark-green text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src="/logo.png" alt="REAL DISTRIBUIDORA" className="h-16 w-auto mb-4 invert" />
              <h3 className="text-2xl font-bold mb-4">
                REAL<span className="text-real-light-green">DISTRIBUIDORA</span>
              </h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Distribuidora especializada em materiais elétricos, hidráulicos, de pintura, expediente e utensílios domésticos para empresas em todo o estado de Roraima.
              </p>
              <div className="flex space-x-4">
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#inicio"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#produtos"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Produtos
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">
              Contato
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <span className="text-real-light-green">Telefone:</span>
                <a
                  href="tel:+5595911814470"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +55 95 9118-1447
                </a>
              </li>
              <li className="flex flex-col space-y-1">
                <span className="text-real-light-green">E-mail:</span>
                <a
                  href="mailto:contato@realdistribuidora.com.br"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  contato@realdistribuidora.com.br
                </a>
              </li>
              <li className="flex flex-col space-y-1">
                <span className="text-real-light-green">Endereço:</span>
                <span className="text-gray-300 text-sm">
                  Bairro Cidade Nova, Boa Vista/RR
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        <hr className="my-8 border-white/10" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 REAL DISTRIBUIDORA. Todos os direitos reservados.
          </p>

          <button
            onClick={scrollToTop}
            className="bg-real-light-green hover:bg-real-medium-green text-white p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-real-dark-green"
            aria-label="Voltar ao topo"
          >
            <ChevronUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
