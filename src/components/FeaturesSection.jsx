import React, { useRef, useState, useEffect } from 'react';
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

const SlideContent = ({ feature, idx }) => (
  <>
    <div style={{ textAlign: 'center', width: '100%' }}>
      <p className="text-body" style={{ color: 'var(--color-black)', fontWeight: 800, fontSize: '0.75rem', marginBottom: '0.5rem' }}>
        0{idx + 1} — NOSOTROS
      </p>
      <h3 className="text-huge" style={{ fontSize: 'clamp(2rem, 9vw, 6rem)', color: 'var(--color-black)', lineHeight: 0.9 }}>
        {feature.title}
      </h3>
      <p className="text-body" style={{ color: 'var(--color-black)', fontSize: 'clamp(0.8rem, 2.5vw, 1.1rem)', marginTop: '0.75rem', lineHeight: 1.4, maxWidth: '400px', margin: '0.75rem auto 0' }}>
        {feature.desc}
      </p>
    </div>

    <div style={{
      width: '85vw',
      maxWidth: '500px',
      height: '35vh',
      overflow: 'hidden',
      position: 'relative',
      border: '3px solid var(--color-black)',
      borderRadius: '4px'
    }}>
      <img
        src={feature.image}
        alt={feature.title}
        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: feature.position || 'center' }}
      />
    </div>
  </>
);

const FeaturesSection = () => {
  const targetRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.6666%"]);

  if (!isDesktop) {
    return (
      <section className="section-pink" id="nosotros" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{
          display: 'flex',
          overflowX: 'auto',
          overflowY: 'hidden',
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}>
          {features.map((feature, idx) => (
            <div key={idx} style={{
              flexShrink: 0,
              width: '100vw',
              minHeight: '100vh',
              scrollSnapAlign: 'start',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 'calc(env(safe-area-inset-top, 0px) + 3rem) 5vw calc(env(safe-area-inset-bottom, 0px) + 3rem)',
              gap: '1.5rem'
            }}>
              <SlideContent feature={feature} idx={idx} />
            </div>
          ))}
        </div>

        <div style={{
          position: 'absolute',
          bottom: 'calc(env(safe-area-inset-bottom, 0px) + 1rem)',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '8px'
        }}>
          {features.map((_, idx) => (
            <div key={idx} style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: idx === 0 ? 'var(--color-black)' : 'rgba(0,0,0,0.25)'
            }} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section ref={targetRef} className="section-pink snap-anchor" style={{ position: 'relative', height: '300vh' }} id="nosotros">
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
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

        <div style={{ position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)', width: '50vw', height: '4px', backgroundColor: 'rgba(0,0,0,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
          <motion.div style={{ scaleX: scrollYProgress, transformOrigin: 'left', width: '100%', height: '100%', backgroundColor: 'var(--color-black)' }} />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
