
import { motion } from "framer-motion";
import { CheckCircle, Globe, Users, Package, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="section-padding bg-white">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title text-center"
        >
          Sobre a REAL DISTRIBUIDORA
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-gray-700 mb-6 leading-relaxed">
              A REAL DISTRIBUIDORA é referência na distribuição de materiais de construção, expediente e utensílios domésticos em Roraima. Atendemos exclusivamente empresas (B2B) com uma ampla variedade de produtos que incluem material elétrico, hidráulico, pintura e mais.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Nossa estrutura inclui equipe de vendedores externos e atendimento na loja física, garantindo cobertura completa e personalizada para nossos clientes em todo o estado.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-start space-x-3">
                <Globe className="h-6 w-6 text-real-medium-green flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-real-dark-green">Distribuição estadual</h3>
                  <p className="text-sm text-gray-600">Atendemos todo o estado de Roraima</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Users className="h-6 w-6 text-real-medium-green flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-real-dark-green">Atendimento personalizado B2B</h3>
                  <p className="text-sm text-gray-600">Foco exclusivo em empresas</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Package className="h-6 w-6 text-real-medium-green flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-real-dark-green">Ampla variedade de produtos</h3>
                  <p className="text-sm text-gray-600">Diversidade para todas as necessidades</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Briefcase className="h-6 w-6 text-real-medium-green flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-real-dark-green">Equipe especializada</h3>
                  <p className="text-sm text-gray-600">Profissionais capacitados</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
