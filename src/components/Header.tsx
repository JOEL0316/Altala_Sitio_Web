import { useState } from 'react';
import { Menu, X, Moon, Sun, Hammer } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  scrolled: boolean;
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  logoImage?: string;
}

export function Header({ scrolled, darkMode, setDarkMode, logoImage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white dark:bg-gray-900 shadow-lg py-3' : 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollToSection('#inicio')}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {logoImage ? (
              <img 
                src={logoImage} 
                alt="" 
                className="h-12 w-auto object-contain"
              />
            ) : (
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-lg shadow-lg">
                <Hammer className="w-9 h-9 text-white" />
              </div>
            )}
            <div>
              <h1 className="text-gray-900 dark:text-white tracking-tight text-2xl">ALTALA</h1>
              <p className="text-xs text-gray-600 dark:text-gray-400">CONSTRUCCIONES S.A. de C.V.</p>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
            
            {/* Dark Mode Toggle */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>
            
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              onClick={() => scrollToSection('#contacto')}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2.5 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Cotizar Proyecto
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-orange-600 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-orange-600 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 transition-colors py-2 px-4 hover:bg-orange-50 dark:hover:bg-gray-800 rounded-lg"
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: menuItems.length * 0.1 }}
                onClick={() => scrollToSection('#contacto')}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2.5 rounded-lg hover:shadow-lg transition-all duration-300 text-center"
              >
                Cotizar Proyecto
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}