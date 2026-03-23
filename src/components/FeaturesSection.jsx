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
  // Track scroll exactly within the bounds of this section
  const { scrollYProgress } = useScroll({ 
    target: targetRef
  });
  
  // Transform scroll progress to horizontal translation
  // Since we have 3 screens, we want to shift 2 completely to the left.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.6666%"]);

  return (
    // Tall container creates the scrollable area
    <section ref={targetRef} className="section-pink snap-anchor" style={{ position: 'relative', height: '300vh' }}>
      {/* Inner snap anchors to ensure we snap to each 100vh step */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div className="snap-anchor" style={{ height: '100vh' }} />
        <div className="snap-anchor" style={{ height: '100vh' }} />
        <div className="snap-anchor" style={{ height: '100vh' }} />
      </div>
      
      {/* Sticky container locks the viewport while scrolling the tall container */}
      <div className="scene-layout" style={{ position: 'sticky', top: 0, display: 'flex', alignItems: 'center' }}>
        
        {/* Animated horizontal track moving based on scrolling */}
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
                              <div style={{ 
                  display: 'flex', 
                  flexDirection: window.innerWidth < 768 ? 'column' : 'row',
                  gap: 'clamp(0.5rem, 2vh, 4rem)', 
                  alignItems: 'center', 
                  width: '100%', 
                  maxWidth: '1600px',
                  justifyContent: 'center'
                }}>
                   
                   <div style={{ 
                     flex: window.innerWidth < 768 ? 'none' : '1 1 400px',
                     textAlign: window.innerWidth < 768 ? 'center' : 'left',
                     padding: window.innerWidth < 768 ? '0 5vw' : '0'
                   }}>
                      <h2 className="text-body" style={{ color: 'var(--color-black)', marginBottom: '0.25rem', fontWeight: 800, fontSize: '0.7rem' }}>0{idx + 1} — NOSOTROS</h2>
                      <h3 className="text-huge" style={{ fontSize: 'clamp(1.5rem, 9vw, 6rem)', color: 'var(--color-black)' }}>
                        {window.innerWidth < 768 ? feature.title : feature.title.split(' ').map((word, i) => <span key={i} style={{display: 'block'}}>{word}</span>)}
                      </h3>
                      <p className="text-body" style={{ color: 'var(--color-black)', fontSize: 'clamp(0.8rem, 1rem, 1.25rem)', marginTop: '0.5rem', maxWidth: '400px', margin: '0.5rem auto 0' }}>
                        {feature.desc}
                      </p>
                   </div>

                   {/* Feature Image with tighter mobile padding */}
                   <div style={{ 
                     flex: window.innerWidth < 768 ? 'none' : '1 1 400px', 
                     width: window.innerWidth < 768 ? '80vw' : 'auto',
                     height: window.innerWidth < 768 ? '25vh' : '60vh', 
                     overflow: 'hidden', 
                     position: 'relative',
                     marginTop: window.innerWidth < 768 ? '0.5rem' : '0'
                   }}>
                      <img 
                        src={feature.image} 
                        alt={feature.title} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: feature.position || 'center' }} 
                      />
                      {/* Overlay for aesthetic */}
                      <div style={{ position: 'absolute', inset: 0, border: '3px solid var(--color-black)', pointerEvents: 'none' }}></div>
                   </div>

                </div>
            </div>
          ))}
          
        </motion.div>
        {/* Dynamic Progress Indicator */}
        <div style={{ position: 'absolute', bottom: 'clamp(0.5rem, 2vh, 1.5rem)', left: '50%', transform: 'translateX(-50%)', width: '50vw', height: '4px', backgroundColor: 'rgba(0,0,0,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
          <motion.div style={{ scaleX: scrollYProgress, transformOrigin: 'left', width: '100%', height: '100%', backgroundColor: 'var(--color-black)' }} />
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;
