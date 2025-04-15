
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  // WhatsApp link with pre-filled message
  const whatsappLink = "https://wa.me/5595911814470?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20para%20minha%20empresa.";

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "navbar-solid" : "navbar-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#" className="block">
            <img src="/logo.png" alt="REAL DISTRIBUIDORA" className="h-12 w-auto" />
          </a>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center space-x-6"
        >
          <a href="#inicio" className="navbar-link">
            Início
          </a>
          <a href="#sobre" className="navbar-link">
            Sobre
          </a>
          <a href="#produtos" className="navbar-link">
            Produtos
          </a>
          <a href="#servicos" className="navbar-link">
            Serviços
          </a>
          <a href="#contato" className="navbar-link">
            Contato
          </a>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
          >
            Solicitar Orçamento
            <ChevronRight className="ml-2 h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
