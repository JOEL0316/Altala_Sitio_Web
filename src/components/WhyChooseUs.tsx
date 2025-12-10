import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Clock, DollarSign, ThumbsUp, Wrench, Award, Users } from 'lucide-react';

export function WhyChooseUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const reasons = [
    {
      icon: Clock,
      title: 'Entrega Puntual',
      description: 'Cumplimos con los plazos establecidos sin comprometer la calidad.',
    },
    {
      icon: DollarSign,
      title: 'Precios Competitivos',
      description: 'Ofrecemos las mejores tarifas del mercado sin sacrificar excelencia.',
    },
    {
      icon: ThumbsUp,
      title: 'Calidad Garantizada',
      description: 'Todos nuestros proyectos cuentan con garantía de calidad certificada.',
    },
    {
      icon: Wrench,
      title: 'Equipos Modernos',
      description: 'Utilizamos maquinaria y herramientas de última generación.',
    },
    {
      icon: Award,
      title: 'Experiencia Comprobada',
      description: 'Más de 4 años de trayectoria exitosa en la industria.',
    },
    {
      icon: Users,
      title: 'Personal Calificado',
      description: 'Ingenieros y técnicos certificados con amplia experiencia.',
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-orange-600 dark:text-orange-500 uppercase tracking-wider">¿Por Qué Elegirnos?</span>
          <h2 className="text-gray-900 dark:text-white mt-4 mb-6">
            Las Razones de Nuestra Excelencia
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Nos diferenciamos por nuestro compromiso inquebrantable con la calidad, seguridad y satisfacción del cliente.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex p-4 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-xl group-hover:from-orange-500 group-hover:to-orange-600 transition-all duration-300">
                    <reason.icon className="w-8 h-8 text-orange-600 dark:text-orange-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-gray-900 dark:text-white mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {reason.description}
                </p>

                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-orange-500/5 rounded-full -z-10 group-hover:scale-150 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
