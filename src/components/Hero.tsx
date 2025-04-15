
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  // WhatsApp link with pre-filled message
  const whatsappLink = "https://wa.me/5595911814470?text=Olá,%20gostaria%20de%20conhecer%20os%20produtos%20da%20REAL%20DISTRIBUIDORA.";

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-16"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-real-dark-green/60"></div>
      
      <div className="container mx-auto px-4 py-20 z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
        >
          Fornecimento Completo para seu Negócio
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto"
        >
          Distribuição de Materiais de Construção e Utensílios para Todo Estado de Roraima
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-8 py-4 bg-real-light-green hover:bg-real-medium-green"
          >
            Conheça Nossos Produtos <ChevronRight className="ml-2 h-5 w-5" />
          </a>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="animate-bounce"
        >
          <a href="#sobre" className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
