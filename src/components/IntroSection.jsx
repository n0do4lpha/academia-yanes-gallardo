import React from 'react';
import { motion } from 'framer-motion';

const IntroSection = () => {
  return (
    <section className="section-black" style={{ padding: '8vw 0', borderBottom: '1px solid var(--color-pink)' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
        >
          <h2 className="text-large" style={{ color: 'var(--color-pink)', marginBottom: '2rem' }}>
            Nuestra experiencia y seriedad ES TU MEJOR GARANTÍA.
          </h2>
          <p className="text-body" style={{ color: 'var(--color-pink)', opacity: 0.8, marginBottom: '1rem' }}>
            Llevamos más de 20 años formando auténticos profesionales de la peluquería y estética. Con un equipo docente especializado, dedicamos ilusión, seriedad y entrega a cada alumno en San Isidro.
          </p>
          <p className="text-body" style={{ color: 'var(--color-pink)', opacity: 0.8 }}>
            Hemos formado a más de 250 profesionales, y nos enorgullece saber que <strong>más del 60% de nuestro alumnado acaba trabajando</strong> en distintos centros de la isla de Tenerife, especialmente en la zona sur.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
