import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

export function Stats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { number: 100, suffix: '+', label: 'Proyectos Completados', duration: 2 },
    { number: 80, suffix: '+', label: 'Clientes Satisfechos', duration: 2.2 },
    { number: 10, suffix: '+', label: 'Años de Experiencia', duration: 2.4 },
    { number: 100, suffix: '%', label: 'Compromiso con Calidad', duration: 2.6 },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-500 relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 10px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              stat={stat}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface StatItemProps {
  stat: {
    number: number;
    suffix: string;
    label: string;
    duration: number;
  };
  index: number;
  inView: boolean;
}

function StatItem({ stat, index, inView }: StatItemProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTime: number;
    const duration = stat.duration * 1000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * stat.number));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, stat.number, stat.duration]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
        className="text-white mb-2"
      >
        {count}{stat.suffix}
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
        className="text-orange-100"
      >
        {stat.label}
      </motion.p>
    </motion.div>
  );
}