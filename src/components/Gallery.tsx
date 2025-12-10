import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Maximize2 } from 'lucide-react';
import { useState } from 'react';

export function Gallery() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      url: '/images/image5.png',
      title: 'Equipo de Trabajo',
      category: 'Equipo',
    },
    {
      url: '/images/image6.png',
      title: 'Planificación de Proyectos',
      category: 'Planeación',
    },
    {
      url: '/images/image7.png',
      title: 'Estructuras de Concreto',
      category: 'Construcción',
    },
    {
      url: '/images/image2.png',
      title: 'Maquinaria Especializada',
      category: 'Equipos',
    },
    {
      url: '/images/image15.png',
      title: 'Seguridad en Obra',
      category: 'Seguridad',
    },
    {
      url: '/images/image10.png',
      title: 'Infraestructura Urbana',
      category: 'Infraestructura',
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-white dark:bg-gray-900 transition-colors duration-300" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-orange-600 dark:text-orange-500 uppercase tracking-wider">Galería de Imágenes</span>
          <h2 className="text-gray-900 dark:text-white mt-4 mb-6">
            Nuestro Trabajo en Acción
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Explora nuestra galería de proyectos, equipos y procesos que demuestran nuestro compromiso con la excelencia.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(image.url)}
            >
              <ImageWithFallback
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-3 py-1 bg-orange-600 text-white text-xs rounded-full mb-2">
                  {image.category}
                </span>
                <h3 className="text-white">{image.title}</h3>
              </div>

              {/* Zoom Icon */}
              <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Maximize2 className="w-5 h-5 text-gray-900 dark:text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="relative max-w-6xl w-full"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-orange-500 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <ImageWithFallback
              src={selectedImage}
              alt="Imagen ampliada"
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </div>
      )}
    </section>
  );
}

function X({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
