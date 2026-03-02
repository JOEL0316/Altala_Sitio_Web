import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';

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

  // Datos de contacto personalizados
  const whatsappNumber = "527121087898"; // Reemplaza con tu número de WhatsApp en formato internacional sin signos
  const emailAddress = "altala_constru@outlook.com";

  const handleSubmit = (e: React.FormEvent, method: 'email' | 'whatsapp') => {
    e.preventDefault();
    if (method === 'email') {
      const subject = `Cotización de Proyecto - ${formData.projectType}`;
      const body = `Nombre: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ATeléfono: ${formData.phone}%0D%0ATipo de Proyecto: ${formData.projectType}%0D%0A%0D%0AMensaje:%0D%0A${formData.message}`;
      window.open(`mailto:${emailAddress}?subject=${subject}&body=${body}`, '_blank');
    } else {
      const message = `Hola, me gustaría solicitar una cotización:%0A%0ANombre: ${formData.name}%0AEmail: ${formData.email}%0ATeléfono: ${formData.phone}%0ATipo de Proyecto: ${formData.projectType}%0A%0AMensaje: ${formData.message}`;
      window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
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
                    className="form-input-text w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none"
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
                      className="form-input-text w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none"
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
                      className="form-input-text w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none"
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
                    className="form-input-text w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none"
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
                    className="form-input-text w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none resize-none"
                    placeholder="Cuéntanos sobre tu proyecto, ubicación, presupuesto estimado, etc."
                  />
                </div>

                {/* Submit Buttons */}
                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                  <button
                    type="submit"
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleSubmit(e, 'email')}
                    style={{ color: '#ffffff', backgroundColor: 'rgba(23, 134, 8, 0.94)' }}
                    className="w-full px-6 py-4 flex items-center justify-center gap-2 rounded-xl text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:opacity-90"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5 flex-shrink-0">
                      <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"/>
                      <path fill="#1e32e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"/>
                      <polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"/>
                      <path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"/>
                      <path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"/>
                    </svg>
                    Enviar por Email
                  </button>
                  <button
                    type="submit"
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleSubmit(e, 'whatsapp')}
                    style={{ color: '#ffffff', backgroundColor: 'rgba(23, 134, 8, 0.94)' }}
                    className="w-full px-6 py-4 flex items-center justify-center gap-2 rounded-xl text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:opacity-90"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5 flex-shrink-0">
                      <path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"/>
                      <path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48h-0.008c-3.194-0.001-6.354-0.79-9.163-2.294l-9.619,2.621C5.018,43.798,4.943,43.803,4.868,43.803z"/>
                      <path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"/>
                      <path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"/>
                      <path fill="#fff" fillRule="evenodd" clipRule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.029-0.731,0.209-0.967c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"/>
                    </svg>
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