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
      <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        
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
                 flexWrap: 'wrap-reverse', 
                 gap: 'clamp(1rem, 3vh, 3rem)', 
                 alignItems: 'center', 
                 width: '100%', 
                 maxWidth: '1600px' 
               }}>
                  
                  <div style={{ flex: '1 1 300px' }}>
                     <h2 className="text-body" style={{ color: 'var(--color-black)', marginBottom: '0.5rem', fontWeight: 800, fontSize: '0.9rem' }}>POR QUÉ NOSOTROS — 0{idx + 1}</h2>
                     <h3 className="text-huge" style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', color: 'var(--color-black)' }}>
                       {feature.title.split(' ').map((word, i) => <span key={i} style={{display: 'inline-block', marginRight: '0.5rem'}}>{word}</span>)}
                     </h3>
                     <p className="text-body" style={{ color: 'var(--color-black)', fontSize: 'clamp(1rem, 2vw, 1.25rem)', marginTop: '0.5rem', maxWidth: '500px' }}>
                       {feature.desc}
                     </p>
                  </div>

                  {/* Feature Image with subtle parallax */}
                  <div style={{ 
                    flex: '1 1 300px', 
                    height: 'clamp(200px, 40vh, 55vh)', // More compact on mobile
                    overflow: 'hidden', 
                    position: 'relative' 
                  }}>
                     <img 
                       src={feature.image} 
                       alt={feature.title} 
                       style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: feature.position || 'center' }} 
                     />
                     {/* Overlay for aesthetic */}
                     <div style={{ position: 'absolute', inset: 0, border: '4px solid var(--color-black)', pointerEvents: 'none' }}></div>
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
