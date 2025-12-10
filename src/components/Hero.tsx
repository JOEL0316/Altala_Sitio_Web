import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToContact = () => {
    document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.querySelector('#nosotros')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1638207849658-e57be0cdc208?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBlbmdpbmVlcmluZyUyMGNpdmlsfGVufDF8fHx8MTc2NDY0NzYzOHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Construcción e Ingeniería Civil"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/70 dark:from-black/95 dark:via-black/90 dark:to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/50 dark:to-black/70" />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 z-10 pt-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block bg-orange-500/20 border border-orange-500/50 text-orange-400 px-4 py-2 rounded-full backdrop-blur-sm">
              Infraestructura Ordinaria, para Gente Extraordinaria
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white mb-6"
          >
            Bienvenido a{' '}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              ALTALA CONSTRUCCIONES
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-300 text-xl mb-8 max-w-2xl"
          >
            Somos una empresa dedicada a la ejecución de proyectos de Ingeniería Civil, incluyendo estructuras de concreto reforzado, terracerías, obra civil y servicios integrales personalizados que se adaptan a las necesidades de nuestros clientes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 group"
            >
              <span className="flex items-center gap-2">
                Solicitar Cotización
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            <button
              onClick={scrollToAbout}
              className="bg-white/10 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              Conocer Más
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/20"
          >
            {[
              { number: '100+', label: 'Proyectos Completados' },
              { number: '80+', label: 'Clientes Satisfechos' },
              { number: '10+', label: 'Años de Experiencia' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              >
                <div className="text-orange-400">{stat.number}</div>
                <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="cursor-pointer"
          onClick={scrollToAbout}
        >
          <ChevronDown className="w-8 h-8 text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}