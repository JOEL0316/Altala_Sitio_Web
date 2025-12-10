import { motion } from 'motion/react';
import { Hammer, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  ];

  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const services = [
    'Estructuras y Mampostería',
    'Vías Terrestres',
    'Infraestructura Ciclista',
    'Obras Hidráulicas',
    'Topografía',
    'Consultorías',
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white pt-16 pb-8 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-2.5 rounded-lg">
                <Hammer className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white">ALTALA</h3>
                <p className="text-xs text-gray-400 dark:text-gray-500">CONSTRUCCIONES S.A. de C.V.</p>
              </div>
            </motion.div>
            <p className="text-gray-400 mb-4 italic">
              "Infraestructura Ordinaria, para Gente Extraordinaria"
            </p>
            <p className="text-gray-400 mb-6 text-sm">
              Empresa dedicada a la ejecución de proyectos de Ingeniería Civil en la Zona Centro de México.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  className="bg-gray-800 p-2.5 rounded-lg hover:bg-orange-600 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-400 dark:text-gray-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-orange-500 group-hover:w-4 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white mb-6">Servicios</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#servicios"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('#servicios')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-orange-500 rounded-full" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span>El Azafrán, Aculco, Estado de México. CP. 50374</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <a href="tel:+527121087898" className="text-gray-400 hover:text-orange-500 transition-colors">
                  712 108 7898
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <a href="mailto:altala_constru@outlook.com" className="text-gray-400 hover:text-orange-500 transition-colors break-all">
                  altala_constru@outlook.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} ALTALA CONSTRUCCIONES S.A. de C.V. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                Términos y Condiciones
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}