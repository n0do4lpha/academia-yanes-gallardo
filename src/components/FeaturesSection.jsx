import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const features = [
  {
    title: "HORARIOS FLEXIBLES",
    desc: "Adaptamos la formación a tu ritmo de vida. Mañanas de 09:00 a 13:00 y tardes de 16:00 a 19:00.",
    image: "/feature-classroom.png"
  },
  {
    title: "PRÁCTICAS REALES",
    desc: "Más de 20 años demostrando que la práctica hace al maestro. Desde el minuto 1 estarás creando.",
    image: "https://images.pexels.com/photos/3356170/pexels-photo-3356170.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    title: "TU COMUNIDAD",
    desc: "Más del 60% de nuestros más de 250 alumnos egresados ya están trabajando en salones top del sur.",
    image: "/feature-3.png",
    position: "top center"
  }
];

const FeaturesSection = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.6666%"]);

  return (
    <section ref={targetRef} className="section-pink snap-anchor" style={{ position: 'relative', height: '300vh' }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div className="snap-anchor" style={{ height: '100vh' }} />
        <div className="snap-anchor" style={{ height: '100vh' }} />
        <div className="snap-anchor" style={{ height: '100vh' }} />
      </div>

      <div className="scene-layout" style={{ position: 'sticky', top: 0, display: 'flex', alignItems: 'center' }}>
        <motion.div style={{ x, display: 'flex', width: '300vw', height: '100%' }}>
          {features.map((feature, idx) => (
            <div key={idx} style={{
              width: '100vw',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0 5vw'
            }}>
              <div className="features-slide">
                <div className="features-slide__text">
                  <h2 className="text-body" style={{ color: 'var(--color-black)', marginBottom: '0.25rem', fontWeight: 800, fontSize: '0.7rem' }}>
                    0{idx + 1} — NOSOTROS
                  </h2>
                  <h3 className="text-huge" style={{ fontSize: 'clamp(1.5rem, 9vw, 6rem)', color: 'var(--color-black)' }}>
                    {feature.title}
                  </h3>
                  <p className="text-body" style={{ color: 'var(--color-black)', fontSize: 'clamp(0.8rem, 1.5vw, 1.1rem)', marginTop: '0.5rem', maxWidth: '400px', margin: '0.5rem auto 0' }}>
                    {feature.desc}
                  </p>
                </div>

                <div className="features-slide__image">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: feature.position || 'center' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, border: '3px solid var(--color-black)', pointerEvents: 'none' }} />
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <div style={{ position: 'absolute', bottom: 'clamp(0.5rem, 2vh, 1.5rem)', left: '50%', transform: 'translateX(-50%)', width: '50vw', height: '4px', backgroundColor: 'rgba(0,0,0,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
          <motion.div style={{ scaleX: scrollYProgress, transformOrigin: 'left', width: '100%', height: '100%', backgroundColor: 'var(--color-black)' }} />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
