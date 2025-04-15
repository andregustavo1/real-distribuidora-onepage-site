
import { motion } from "framer-motion";
import { Globe, Users, Building, Package } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      id: 1,
      icon: <Globe className="h-10 w-10 text-real-light-green" />,
      title: "Cobertura Estadual",
      description: "Atendimento em todo o estado de Roraima",
    },
    {
      id: 2,
      icon: <Users className="h-10 w-10 text-real-light-green" />,
      title: "Força de Vendas Externa",
      description: "Equipe de vendedores que vai até sua empresa",
    },
    {
      id: 3,
      icon: <Building className="h-10 w-10 text-real-light-green" />,
      title: "Exclusivo para PJ",
      description: "Soluções desenvolvidas para necessidades empresariais",
    },
    {
      id: 4,
      icon: <Package className="h-10 w-10 text-real-light-green" />,
      title: "Variedade de Produtos",
      description: "Do material de construção a utensílios domésticos",
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Por Que Nos Escolher?</h2>
          <p className="section-subtitle">
            Parceria sólida para o crescimento do seu negócio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="card-glass p-6 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="bg-white rounded-full p-3 inline-flex mb-4 shadow-sm">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-real-dark-green mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
