import { useState } from "react";
import { motion } from "framer-motion";
import { UserCheck, Truck, Wrench, ClipboardList, ChevronRight } from "lucide-react";

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 1,
      icon: <UserCheck className="h-10 w-10 text-real-light-green" />,
      title: "Atendimento Personalizado",
      description: "Vendedores dedicados para sua empresa, entendendo suas necessidades específicas e oferecendo atendimento exclusivo.",
      benefits: ["Contato constante", "Relacionamento personalizado", "Atendimento prioritário"],
    },
    {
      id: 2,
      icon: <Truck className="h-10 w-10 text-real-light-green" />,
      title: "Entrega em Todo Estado",
      description: "Nossa logística própria garante que seus produtos cheguem em qualquer município de Roraima, com agilidade e segurança.",
      benefits: ["Cobertura estadual", "Entrega programada", "Acompanhamento logístico"],
    },
    {
      id: 3,
      icon: <Wrench className="h-10 w-10 text-real-light-green" />,
      title: "Consultoria Técnica",
      description: "Especialistas disponíveis para orientar sobre melhores produtos para cada aplicação, garantindo eficiência e economia.",
      benefits: ["Orientação especializada", "Suporte técnico", "Recomendações personalizadas"],
    },
    {
      id: 4,
      icon: <ClipboardList className="h-10 w-10 text-real-light-green" />,
      title: "Orçamentos Personalizados",
      description: "Propostas comerciais adaptadas à sua realidade, com condições especiais para empresas e órgãos públicos.",
      benefits: ["Condições especiais", "Flexibilidade de pagamento", "Pacotes promocionais"],
    },
  ];

  const whatsappLink = "https://wa.me/5595911814470?text=Olá,%20gostaria%20de%20conhecer%20mais%20detalhes%20sobre%20os%20serviços%20da%20REAL%20DISTRIBUIDORA.";

  return (
    <section id="servicos" className="section-padding bg-gray-50">
      <div className="px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Serviços Oferecidos</h2>
          <p className="section-subtitle">
            Vá além do fornecimento de produtos com serviços que agregam valor ao seu negócio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="divide-y divide-gray-100">
                {services.map((service, index) => (
                  <div
                    key={service.id}
                    className={`p-4 cursor-pointer transition-colors ${
                      activeService === index
                        ? "bg-real-dark-green text-white"
                        : "hover:bg-gray-50"
                    }`}
                    onClick={() => setActiveService(index)}
                  >
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div
                        className={`rounded-full p-2 ${
                          activeService === index
                            ? "bg-white text-real-dark-green"
                            : "bg-real-light-green/10 text-real-light-green"
                        }`}
                      >
                        {service.icon}
                      </div>
                      <h3 className="font-semibold text-sm">{service.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 bg-white rounded-xl shadow-md overflow-hidden"
          >
            <div className="p-6 md:p-8">
              <div className="flex items-center mb-6">
                <div className="bg-real-light-green/10 rounded-full p-3 mr-4">
                  {services[activeService].icon}
                </div>
                <h3 className="text-2xl font-bold text-real-dark-green">
                  {services[activeService].title}
                </h3>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {services[activeService].description}
              </p>

              <div className="mb-8">
                <h4 className="font-semibold text-real-dark-green mb-3">
                  Benefícios:
                </h4>
                <ul className="space-y-2">
                  {services[activeService].benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-real-light-green mr-2" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Conhecer Detalhes
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
