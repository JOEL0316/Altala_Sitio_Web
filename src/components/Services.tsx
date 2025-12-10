import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Building2, Construction, Signpost, Waves, Ruler, FileText, Users } from 'lucide-react';

export function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Building2,
      title: 'Estructuras y Mampostería',
      description: 'Estructuras de Concreto Reforzado, Estructuras de Mampostería y obra civil en general.',
      features: ['Cimentaciones', 'Muros de Contención', 'Albañilerías', 'Bardas Perimetrales'],
    },
    {
      icon: Signpost,
      title: 'Vías Terrestres y Movilidad',
      description: 'Desarrollo de infraestructura para la movilidad sustentable y vías terrestres modernas.',
      features: ['Carreteras y caminos', 'Estabilización de Taludes', 'Plataformas', 'Adoquines Permeables'],
    },
    {
      icon: Construction,
      title: 'Infraestructura Peatonal y Ciclista',
      description: 'Proyectos enfocados en la movilidad sustentable y espacios urbanos seguros.',
      features: ['Calles completas', 'Ciclovías', 'Distribución del Tránsito', 'Accesibilidad universal'],
    },
    {
      icon: Ruler,
      title: 'Topografía y Proyección',
      description: 'Levantamientos topográficos y diseño de proyectos de Obras Hidráulicas y Vías Terrestres.',
      features: ['Levantamientos topográficos', 'Proyección de obras', 'Planimetría', 'Altimetría'],
    },
    {
      icon: Waves,
      title: 'Obras Hidráulicas',
      description: 'Diseño, ejecución, operación y mantenimiento de sistemas hidráulicos.',
      features: ['Sistemas de drenaje', 'Redes hidráulicas', 'Control pluvial', 'Abastecimiento'],
    },
    {
      icon: FileText,
      title: 'Cotizaciones y Presupuestos',
      description: 'Elaboración detallada de presupuestos y cotizaciones para proyectos de construcción.',
      features: ['Análisis de precios unitarios', 'Cuantificación de obra', 'Programación', 'Viabilidad'],
    },
    {
      icon: Users,
      title: 'Consultorías',
      description: 'Asesoría especializada en proyectos de Ingeniería Civil y optimización de procesos.',
      features: ['Asesoría técnica', 'Supervisión de obra', 'Control de calidad', 'Optimización'],
    },
  ];

  return (
    <section id="servicios" className="py-20 lg:py-32 bg-white dark:bg-gray-900 transition-colors duration-300" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-orange-600 dark:text-orange-500 uppercase tracking-wider">¿Qué Ofrecemos?</span>
          <h2 className="text-gray-900 dark:text-white mt-4 mb-6">
            Nuestros Servicios Especializados
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            En todos nuestros servicios ofrecemos Diseño, Ejecución, Operación y Mantenimiento adaptados a tus necesidades.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 hover:shadow-2xl hover:border-orange-200 dark:hover:border-orange-700 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="inline-flex p-4 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-xl group-hover:from-orange-500 group-hover:to-orange-600 transition-all duration-300 group-hover:shadow-lg">
                  <service.icon className="w-8 h-8 text-orange-600 dark:text-orange-500 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-gray-900 dark:text-white mb-3 group-hover:text-orange-600 dark:group-hover:text-orange-500 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Arrow */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-orange-600 dark:text-orange-500 inline-flex items-center gap-2">
                  Más información
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <button
            onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
          >
            Solicitar Asesoría Gratuita
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}