import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { MapPin, Calendar, Eye, X } from 'lucide-react';

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Infraestructura Vial Regional',
      category: 'infrastructure',
      location: 'Aculco, Estado de México',
      year: '2024',
      image: '/images/image1.png',
      description: 'Construcción y rehabilitación de vías terrestres con enfoque en movilidad sustentable.',
    },
    {
      id: 2,
      title: 'Estructuras de Concreto Reforzado',
      category: 'residential',
      location: 'Zona Centro, México',
      year: '2023',
      image: '/images/image3.png',
      description: 'Cimentaciones y estructuras de concreto reforzado de alta calidad.',
    },
    {
      id: 3,
      title: 'Estabilización de Taludes',
      category: 'infrastructure',
      location: 'Estado de México',
      year: '2024',
      image: '/images/image.png',
      description: 'Proyectos de estabilización de taludes con técnicas modernas y seguras.',
    },
    {
      id: 4,
      title: 'Infraestructura Peatonal y Ciclista',
      category: 'urban',
      location: 'Aculco, Estado de México',
      year: '2023',
      image: '/images/image19.png',
      description: 'Desarrollo de calles completas con infraestructura para peatones y ciclistas.',
    },
    {
      id: 5,
      title: 'Obras Hidráulicas',
      category: 'infrastructure',
      location: 'Zona Centro, México',
      year: '2024',
      image: '/images/image18.png',
      description: 'Sistemas de drenaje y obras hidráulicas con diseño innovador.',
    },
    {
      id: 6,
      title: 'Muros de Contención y Mampostería',
      category: 'commercial',
      location: 'Estado de México',
      year: '2023',
      image: '/images/image13.png',
      description: 'Construcción de muros de contención y estructuras de mampostería.',
    },
    {
      id: 7,
      title: 'Armado de acero de refuerzo',
      category: 'commercial',
      location: 'Estado de México',
      year: '2023',
      image: '/images/image14.png',
      description: 'Armado de concreto armado.',
    },
    {
      id: 8,
      title: 'Muros y mampostería',
      category: 'infrastructure',
      location: 'Estado de México',
      year: '2023',
      image: '/images/image17.png',
      description: 'Armado de concreto armado.',
    },
  ];

  const categories = [
    { id: 'all', label: 'Todos los Proyectos' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="proyectos" className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-800 transition-colors duration-300" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-orange-600 dark:text-orange-500 uppercase tracking-wider">Nuestro Portafolio</span>
          <h2 className="text-gray-900 dark:text-white mt-4 mb-6">
            Proyectos que Transforman Ciudades
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Explora algunos de nuestros proyectos más destacados que demuestran nuestro compromiso con la excelencia y la innovación.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-2.5 rounded-lg transition-all duration-300 ${
                filter === category.id
                  ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/30'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              layout
              className="group bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div 
                className="relative h-64 overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(project.image)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover Icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                  <div className="bg-white/90 backdrop-blur-sm p-4 rounded-full">
                    <Eye className="w-6 h-6 text-orange-600" />
                  </div>
                </div>

                {/* Year Badge */}
                <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1.5 rounded-lg text-sm backdrop-blur-sm">
                  {project.year}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-gray-900 dark:text-white mb-3 group-hover:text-orange-600 dark:group-hover:text-orange-500 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
                
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {project.year}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            ¿Tienes un proyecto en mente? Estamos listos para convertirlo en realidad.
          </p>
          <button
            onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
          >
            Iniciar Mi Proyecto
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </motion.div>
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
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón cerrar */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-orange-500 transition-colors"
              aria-label="Cerrar imagen"
            >
              <X className="w-8 h-8" />
            </button>
            
            {/* Imagen ampliada */}
            <img
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