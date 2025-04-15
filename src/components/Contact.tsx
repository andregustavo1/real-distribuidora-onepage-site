
import { motion } from "framer-motion";
import { Phone, Mail, Instagram, MapPin } from "lucide-react";

const Contact = () => {
  // WhatsApp link with pre-filled message
  const whatsappLink = "https://wa.me/5595911814470?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20para%20minha%20empresa.";
  
  // Instagram link
  const instagramLink = "https://instagram.com/real_distribuidora";

  return (
    <section id="contato" className="section-padding bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Entre em Contato</h2>
          <p className="section-subtitle">
            Solicite um orçamento para sua empresa
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-real-dark-green mb-6">
                  Informações de Contato
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-real-light-green/10 rounded-full p-3 mr-4">
                      <Phone className="h-6 w-6 text-real-dark-green" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Telefone</h4>
                      <a 
                        href="tel:+5595911814470" 
                        className="text-real-medium-green hover:underline transition-colors"
                      >
                        +55 95 9118-1447
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-real-light-green/10 rounded-full p-3 mr-4">
                      <Mail className="h-6 w-6 text-real-dark-green" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">E-mail</h4>
                      <a 
                        href="mailto:contato@realdistribuidora.com.br" 
                        className="text-real-medium-green hover:underline transition-colors"
                      >
                        contato@realdistribuidora.com.br
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-real-light-green/10 rounded-full p-3 mr-4">
                      <Instagram className="h-6 w-6 text-real-dark-green" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Instagram</h4>
                      <a 
                        href={instagramLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-real-medium-green hover:underline transition-colors"
                      >
                        @real_distribuidora
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-real-light-green/10 rounded-full p-3 mr-4">
                      <MapPin className="h-6 w-6 text-real-dark-green" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Endereço</h4>
                      <p className="text-gray-600">
                        Bairro Cidade Nova, Boa Vista/RR
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full justify-center"
                  >
                    Solicitar Orçamento
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-xl overflow-hidden shadow-md h-full min-h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31950.0073864022!2d-60.69330837411394!3d2.8204140493713287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d9305c9a808477b%3A0x7a797c0a11df183b!2sCidade%20Nova%2C%20Boa%20Vista%20-%20RR!5e0!3m2!1spt-BR!2sbr!4v1718563789442!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização REAL DISTRIBUIDORA"
              className="w-full h-full min-h-[400px]"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
