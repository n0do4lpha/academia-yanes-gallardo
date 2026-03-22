import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Sparkles, BookOpen } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: <Scissors size={32} color="var(--color-pink)" />,
    title: "CORTE & COLOR",
    description: "Dominarás las técnicas más actuales de corte, colorimetría avanzada y diseño de estilo."
  },
  {
    id: 2,
    icon: <Sparkles size={32} color="var(--color-yellow)" />,
    title: "ESTÉTICA",
    description: "Maquillaje profesional, cuidado de la piel y las últimas tendencias en belleza integral."
  },
  {
    id: 3,
    icon: <BookOpen size={32} color="var(--color-pink)" />,
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
    <section className="section-black snap-anchor" style={{ padding: 'clamp(4rem, 12vh, 8rem) 0', minHeight: '100dvh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ paddingTop: 'env(safe-area-inset-top)', paddingBottom: 'env(safe-area-inset-bottom)' }}>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: 'spring', damping: 15 }}
          style={{ marginBottom: 'clamp(2rem, 5vh, 4rem)', textAlign: 'center' }}
        >
          <h2 className="text-large" style={{ color: 'var(--color-pink)' }}>¿QUÉ HACEMOS?</h2>
          <p className="text-body" style={{ color: 'var(--color-white)', opacity: 0.8, marginTop: '0.75rem', maxWidth: '600px', margin: '0.75rem auto 0', fontSize: 'clamp(0.95rem, 2vw, 1.15rem)' }}>
            Aprende con los mejores. Especialízate en el sector de la belleza con una propuesta formativa 100% práctica y dinámica.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="services-grid"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={itemVariants} className="card-service" style={{ padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div>{service.icon}</div>
              <h3 className="text-body" style={{ fontSize: '1.35rem', fontFamily: 'var(--font-display)', color: 'var(--color-white)', letterSpacing: '0.02em' }}>
                {service.title}
              </h3>
              <p className="text-body" style={{ color: 'var(--color-white)', opacity: 0.7, fontSize: '0.95rem', lineHeight: '1.5' }}>
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
