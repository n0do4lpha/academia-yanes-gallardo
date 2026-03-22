import React from 'react';
import { motion } from 'framer-motion';

const ContentGrid = () => {
  return (
    <section className="section-pink" style={{ padding: '10vw 0' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-body" style={{ color: 'var(--color-black)', marginBottom: '1.5rem', fontWeight: 500 }}>
            "Formación adaptada para tu futuro, con todas las facilidades."
          </p>
          <p className="text-body" style={{ color: 'var(--color-black)' }}>
            En la Academia privada Yanes Gallardo contamos con instalaciones totalmente adaptadas y seguras. Disponemos de cámaras de seguridad, sistema de alarma y facilidades de aparcamiento en la calle para que solo te preocupes de aprender técnica y sacar todo tu talento en clases.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ position: 'relative', aspectRatio: '4/5', transform: 'rotate(2deg)', border: '2px solid var(--color-black)' }}
        >
          <img 
            src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=800&auto=format&fit=crop" 
            alt="Academy Class" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </motion.div>

      </div>
    </section>
  );
};

export default ContentGrid;
