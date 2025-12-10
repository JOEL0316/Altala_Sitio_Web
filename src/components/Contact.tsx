import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent, method: 'email' | 'whatsapp') => {
    e.preventDefault();
    
    if (method === 'email') {
      const subject = `Cotización de Proyecto - ${formData.projectType}`;
      const body = `Nombre: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ATeléfono: ${formData.phone}%0D%0ATipo de Proyecto: ${formData.projectType}%0D%0A%0D%0AMensaje:%0D%0A${formData.message}`;
      window.open(`mailto:altala_constru@outlook.com?subject=${subject}&body=${body}`, '_blank');
    } else {
      const message = `Hola, me gustaría solicitar una cotización:%0A%0ANombre: ${formData.name}%0AEmail: ${formData.email}%0ATeléfono: ${formData.phone}%0ATipo de Proyecto: ${formData.projectType}%0A%0AMensaje: ${formData.message}`;
      window.open(`https://wa.me/4464113087?text=${message}`, '_blank');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Teléfono',
      content: '712 108 7898',
      link: 'tel:+527121087898',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'altala_constru@outlook.com',
      link: 'mailto:altala_constru@outlook.com',
    },
    {
      icon: MapPin,
      title: 'Dirección',
      content: 'El Azafrán, Aculco, Estado de México. CP. 50374',
      link: null,
    },
  ];

  const projectTypes = [
    'Estructuras de Concreto Reforzado',
    'Mampostería y Obra Civil',
    'Vías Terrestres',
    'Infraestructura Peatonal y Ciclista',
    'Estabilización de Taludes',
    'Obras Hidráulicas',
    'Topografía y Proyección',
    'Consultoría',
    'Otro',
  ];

  return (
    <section id="contacto" className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-orange-600 dark:text-orange-500 uppercase tracking-wider">Contacto</span>
          <h2 className="text-gray-900 dark:text-white mt-4 mb-6">
            Solicita tu Cotización Gratis
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Estamos listos para escuchar tu proyecto y brindarte la mejor asesoría. Contáctanos por el medio que prefieras.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-orange-600 to-orange-500 rounded-2xl p-8 lg:p-10 text-white h-full">
              <h3 className="text-white mb-6">Información de Contacto</h3>
              <p className="text-orange-100 mb-8">
                Nuestro equipo de ingenieros está disponible para atenderte y resolver todas tus dudas.
              </p>

              {/* Contact Details */}
              <div className="space-y-6 mb-10">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-orange-100 text-sm mb-1">{info.title}</p>
                      {info.link ? (
                        <a href={info.link} className="text-white hover:text-orange-100 transition-colors">
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-white">{info.content}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Horario */}
              <div className="border-t border-white/20 pt-8">
                <h4 className="text-white mb-4">Horario de Atención</h4>
                <div className="space-y-2 text-orange-100">
                  <p>Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                  <p>Sábados: 9:00 AM - 2:00 PM</p>
                  <p className="text-sm mt-4 text-orange-200">
                    "Infraestructura Ordinaria, para Gente Extraordinaria"
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <form className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 lg:p-10 border border-gray-100 dark:border-gray-700">
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none"
                    placeholder="Ej. Juan Pérez"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none"
                      placeholder="correo@ejemplo.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 dark:text-gray-300 mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none"
                      placeholder="712-108-7898"
                    />
                  </div>
                </div>

                {/* Project Type */}
                <div>
                  <label htmlFor="projectType" className="block text-gray-700 dark:text-gray-300 mb-2">
                    Tipo de Proyecto *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none"
                  >
                    <option value="">Selecciona una opción</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">
                    Descripción del Proyecto *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none resize-none"
                    placeholder="Cuéntanos sobre tu proyecto, ubicación, presupuesto estimado, etc."
                  />
                </div>

                {/* Submit Buttons */}
                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                  <button
                    type="submit"
                    onClick={(e) => handleSubmit(e, 'email')}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-4 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Mail className="w-5 h-5" />
                    Enviar por Email
                  </button>
                  <button
                    type="submit"
                    onClick={(e) => handleSubmit(e, 'whatsapp')}
                    className="w-full bg-green-600 text-white px-6 py-4 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-5 h-5" />
                    Enviar por WhatsApp
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}