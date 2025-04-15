
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const ServiceArea = () => {
  const locations = [
    { id: 1, name: "Boa Vista", primary: true },
    { id: 2, name: "Alto Alegre", primary: false },
    { id: 3, name: "Amajari", primary: false },
    { id: 4, name: "Bonfim", primary: false },
    { id: 5, name: "Cantá", primary: false },
    { id: 6, name: "Caracaraí", primary: false },
    { id: 7, name: "Caroebe", primary: false },
    { id: 8, name: "Iracema", primary: false },
    { id: 9, name: "Mucajaí", primary: false },
    { id: 10, name: "Normandia", primary: false },
    { id: 11, name: "Pacaraima", primary: false },
    { id: 12, name: "Rorainópolis", primary: false },
    { id: 13, name: "São João da Baliza", primary: false },
    { id: 14, name: "São Luiz", primary: false },
    { id: 15, name: "Uiramutã", primary: false },
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
          <h2 className="section-title">Onde Atuamos</h2>
          <p className="section-subtitle">
            Cobertura em todo estado de Roraima, levando produtos de qualidade a cada município
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 relative bg-white rounded-xl shadow-md overflow-hidden"
          >
            <div className="relative h-96 md:h-[500px] bg-real-dark-green/5">
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="/map-roraima.svg" 
                  alt="Mapa de Roraima" 
                  className="max-h-full max-w-full p-8"
                />
              </div>
              <div className="absolute top-4 left-4 bg-white rounded-lg shadow-md p-3">
                <h3 className="text-real-dark-green font-semibold text-sm">Legenda:</h3>
                <div className="flex items-center mt-2">
                  <div className="w-3 h-3 rounded-full bg-real-dark-green mr-2"></div>
                  <span className="text-xs">Sede</span>
                </div>
                <div className="flex items-center mt-1">
                  <div className="w-3 h-3 rounded-full bg-real-light-green mr-2"></div>
                  <span className="text-xs">Área de atendimento</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <div className="p-6">
              <h3 className="text-xl font-bold text-real-dark-green mb-4">
                Municípios Atendidos
              </h3>
              <p className="text-gray-600 mb-6">
                A REAL DISTRIBUIDORA atende todos os municípios do estado de Roraima, com sede em Boa Vista, no bairro Cidade Nova.
              </p>
              <div className="space-y-2">
                {locations.map((location) => (
                  <div
                    key={location.id}
                    className="flex items-center p-2 rounded-md transition-colors hover:bg-gray-50"
                  >
                    <MapPin
                      className={`h-5 w-5 mr-3 ${
                        location.primary
                          ? "text-real-dark-green"
                          : "text-real-light-green"
                      }`}
                    />
                    <span
                      className={location.primary ? "font-semibold" : ""}
                    >
                      {location.name}
                      {location.primary && (
                        <span className="ml-2 text-xs bg-real-dark-green text-white px-2 py-0.5 rounded-full">
                          Sede
                        </span>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
