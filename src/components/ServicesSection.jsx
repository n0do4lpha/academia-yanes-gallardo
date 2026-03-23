import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Sparkles, BookOpen } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: <Scissors size={40} color="var(--color-pink)" />,
    title: "CORTE & COLOR",
    description: "Dominarás las técnicas más actuales de corte, colorimetría avanzada y diseño de estilo."
  },
  {
    id: 2,
    icon: <Sparkles size={40} color="var(--color-yellow)" />,
    title: "ESTÉTICA",
    description: "Maquillaje profesional, cuidado de la piel y las últimas tendencias en belleza integral."
  },
  {
    id: 3,
    icon: <BookOpen size={40} color="var(--color-pink)" />,
    title: "GESTIÓN DE SALÓN",
    description: "No solo te enseñamos a cortar: aprende a llevar tu propio negocio al éxito rotundo."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', damping: 20, stiffness: 100 }
  }
};

const ServicesSection = () => {
  return (
    <section className="section-black scene-layout snap-anchor">
      <div className="container" style={{ width: '100%', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: 'spring', damping: 15 }}
          style={{ 
            marginBottom: window.innerWidth < 768 ? '1.25rem' : '3rem', 
            textAlign: 'center' 
          }}
        >
          <h2 className="text-large" style={{ color: 'var(--color-pink)' }}>¿QUÉ HACEMOS?</h2>
          <p className="text-body" style={{ 
            color: 'var(--color-white)', 
            opacity: 0.8, 
            marginTop: '0.5rem', 
            maxWidth: '600px', 
            margin: '0.5rem auto 0',
            fontSize: 'clamp(0.85rem, 1.1rem, 1.25rem)'
          }}>
            Aprende con los mejores. Especialízate en el sector de la belleza con una propuesta formativa 100% práctica y dinámica.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="services-grid"
          style={{ gap: window.innerWidth < 768 ? '0.75rem' : '2rem' }}
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={itemVariants} className="card-service" style={{ padding: window.innerWidth < 768 ? '1.5rem 1.25rem' : '3rem 2rem' }}>
              <div style={{ marginBottom: '0.5rem' }}>{React.cloneElement(service.icon, { size: window.innerWidth < 768 ? 28 : 40 })}</div>
              <h3 className="text-body" style={{ fontSize: '1.15rem', fontFamily: 'var(--font-display)', color: 'var(--color-white)', marginBottom: '0.35rem' }}>
                {service.title}
              </h3>
              <p className="text-body" style={{ color: 'var(--color-white)', opacity: 0.7, fontSize: '0.9rem', lineHeight: '1.3' }}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
