
import { motion } from "framer-motion";
import { Phone, ClipboardList, FileText, Truck, UserCheck } from "lucide-react";

const HowWeWork = () => {
  const steps = [
    {
      id: 1,
      icon: <Phone className="h-8 w-8 text-white" />,
      title: "Primeiro Contato",
      description: "Apresentação e levantamento de necessidades",
    },
    {
      id: 2,
      icon: <ClipboardList className="h-8 w-8 text-white" />,
      title: "Levantamento de Necessidades",
      description: "Análise detalhada dos requisitos da empresa",
    },
    {
      id: 3,
      icon: <FileText className="h-8 w-8 text-white" />,
      title: "Proposta Comercial",
      description: "Orçamento personalizado com produtos selecionados",
    },
    {
      id: 4,
      icon: <Truck className="h-8 w-8 text-white" />,
      title: "Fornecimento",
      description: "Entrega dos produtos conforme acordado",
    },
    {
      id: 5,
      icon: <UserCheck className="h-8 w-8 text-white" />,
      title: "Acompanhamento",
      description: "Suporte contínuo e reposição periódica",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Como Trabalhamos</h2>
          <p className="section-subtitle">
            Conheça nossa metodologia para garantir a melhor experiência para sua empresa
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-real-light-green/30 transform -translate-x-1/2 z-0"></div>

          {/* Timeline steps */}
          <div className="space-y-12 md:space-y-0 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`flex flex-col md:flex-row items-center md:gap-10 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} mb-4 md:mb-0`}>
                  <h3 className="text-xl font-bold text-real-dark-green mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>

                <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-real-dark-green shadow-lg z-10">
                  {step.icon}
                </div>

                <div className="w-full md:w-1/2 hidden md:block">
                  {/* Empty div for layout */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
