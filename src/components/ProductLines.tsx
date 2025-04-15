
import { motion } from "framer-motion";
import { Zap, Droplet, PaintBucket, FileText, UtensilsCrossed, Wrench } from "lucide-react";

const ProductLines = () => {
  const products = [
    {
      id: 1,
      icon: <Zap className="h-10 w-10 text-real-light-green" />,
      title: "Material Elétrico",
      description: "Fios, cabos, disjuntores, caixas de distribuição e acessórios",
    },
    {
      id: 2,
      icon: <Droplet className="h-10 w-10 text-real-light-green" />,
      title: "Material Hidráulico",
      description: "Tubos, conexões, válvulas e acessórios para instalações",
    },
    {
      id: 3,
      icon: <PaintBucket className="h-10 w-10 text-real-light-green" />,
      title: "Material de Pintura",
      description: "Tintas, vernizes, rolos, pincéis e acessórios",
    },
    {
      id: 4,
      icon: <FileText className="h-10 w-10 text-real-light-green" />,
      title: "Material de Expediente",
      description: "Papelaria, organização e suprimentos para escritório",
    },
    {
      id: 5,
      icon: <UtensilsCrossed className="h-10 w-10 text-real-light-green" />,
      title: "Utensílios Domésticos",
      description: "Produtos para cozinha, limpeza e organização",
    },
    {
      id: 6,
      icon: <Wrench className="h-10 w-10 text-real-light-green" />,
      title: "Ferragens e Ferramentas",
      description: "Itens essenciais para obras e manutenção",
    },
  ];

  // WhatsApp link with pre-filled message
  const whatsappLink = "https://wa.me/5595911814470?text=Olá,%20gostaria%20de%20solicitar%20um%20catálogo%20de%20produtos%20da%20REAL%20DISTRIBUIDORA.";

  return (
    <section id="produtos" className="section-padding bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Linhas de Produtos</h2>
          <p className="section-subtitle">
            Soluções completas para atender todas as necessidades da sua empresa
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="card-glass p-6 flex flex-col items-center text-center"
            >
              <div className="bg-gray-50 rounded-full p-4 mb-4 shadow-sm">
                {product.icon}
              </div>
              <h3 className="text-xl font-bold text-real-dark-green mb-2">
                {product.title}
              </h3>
              <p className="text-gray-600 flex-grow">{product.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Solicitar Catálogo Completo
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductLines;
