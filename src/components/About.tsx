import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Target, Shield, Eye, Heart, CheckCircle, Lightbulb, Handshake } from 'lucide-react';

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = [
    { icon: Heart, title: 'Gratitud', description: 'Agradecidos con nuestros clientes y colaboradores' },
    { icon: Shield, title: 'Lealtad', description: 'Comprometidos con la excelencia' },
    { icon: Users, title: 'Respeto', description: 'Valoramos a cada persona' },
    { icon: Target, title: 'Compromiso', description: 'Cumplimos lo que prometemos' },
    { icon: Award, title: 'Honestidad', description: 'Transparencia en todo momento' },
    { icon: Eye, title: 'Confianza', description: 'Construimos relaciones duraderas' },
    { icon: CheckCircle, title: 'Responsabilidad', description: 'Nos hacemos cargo de nuestras acciones y resultados' },
    { icon: Lightbulb, title: 'Humildad', description: 'Aprendemos constantemente y reconocemos nuestros límites' },
    { icon: Handshake, title: 'Empatía', description: 'Entendemos y valoramos las necesidades de los demás' },
  ];

  return (
    <section id="nosotros" className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/image4.png"
                alt="Equipo de trabajo ALTALA"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-2xl max-w-xs hidden lg:block"
            >
              <div className="flex items-center gap-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Award className="w-8 h-8 text-orange-600" />
                </div>
                <div>
                  <div className="text-orange-600">Calidad Superior</div>
                  <p className="text-gray-600 text-sm">Proyectos de Excelencia</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-orange-600 dark:text-orange-500 uppercase tracking-wider">Sobre Nosotros</span>
              <h2 className="text-gray-900 dark:text-white mt-4 mb-6">
                ALTALA CONSTRUCCIONES S.A. de C.V.
              </h2>
              
              {/* Mission */}
              <div className="mb-8">
                <h3 className="text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <div className="w-1 h-6 bg-orange-600 rounded-full" />
                  Nuestra Misión
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Dar solución a los problemas de movilidad presentes y futuros en nuestras comunidades, estados y país. Creando y ejecutando proyectos de Ingeniería Civil que cuenten con mejoras en estructuración, procesos constructivos, organización y en las áreas de infraestructura para la movilidad sustentable, interconectividad entre los diferentes modos de transporte, y ayudar a la reducción de problemas ambientales existentes.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-100 dark:border-orange-800">
                <h3 className="text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <div className="w-1 h-6 bg-orange-600 rounded-full" />
                  Nuestra Visión
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  En 10 años posicionarnos como referentes en la construcción de infraestructura para la movilidad sustentable y optimización de procesos constructivos en el área de estructuras de concreto reforzado presentes en el mercado. Para consolidar la rentabilidad de este nuevo concepto y manera de trabajar en la Zona Centro de México.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-orange-600 dark:text-orange-500 uppercase tracking-wider">Nuestros Valores</span>
          <h2 className="text-gray-900 dark:text-white mt-4">
            Los Pilares de Nuestra Empresa
          </h2>
        </motion.div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg hover:border-orange-200 dark:hover:border-orange-700 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-orange-100 p-3 rounded-lg group-hover:bg-orange-600 transition-colors duration-300">
                    <value.icon className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <div>
                  <h3 className="text-gray-900 dark:text-white mb-2">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{value.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}