import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const instaPosts = [
  "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=800&auto=format&fit=crop",
  "https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=800", 
  "https://images.pexels.com/photos/3993444/pexels-photo-3993444.jpeg?auto=compress&cs=tinysrgb&w=800"
];

const InstagramSection = () => {
  const targetRef = useRef(null);
  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    const checkSize = () => setIsDesktop(window.innerWidth >= 1024);
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  const { scrollYProgress } = useScroll({ target: targetRef });
  
  // Responsive horizontal displacement:
  // Mobile needs -85% to see all 9 items sequentially in a narrow view.
  // Desktop has more screen width, so -58% ensures the last 4 items are perfectly framed with symmetric margins.
  const x = useTransform(scrollYProgress, [0, 1], ["2%", isDesktop ? "-58%" : "-85%"]);

  return (
    <section 
      ref={targetRef} 
      className="section-black snap-anchor" 
      style={{ position: 'relative', height: '300vh', backgroundColor: 'var(--color-black)' }}
    >
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {isDesktop ? (
          /* Desktop: Low-friction snap track. Prevents skipping the section and prevents reverse-jump, 
             but simulates completely free scroll without the "magnet" leaping effect. */
          Array.from({ length: 30 }).map((_, i) => (
            <div key={i} style={{ scrollSnapAlign: 'start', scrollSnapStop: 'normal', position: 'absolute', top: `${i * 10}vh`, height: '10vh', width: '100%' }} />
          ))
        ) : (
          /* Mobile: Strict 100vh snaps at start and end for tight mobile swiping */
          <>
            <div className="snap-anchor" style={{ position: 'absolute', top: 0, height: '100vh', width: '100%' }} />
            <div className="snap-anchor" style={{ position: 'absolute', top: '200vh', height: '100vh', width: '100%' }} />
          </>
        )}
      </div>

      <div className="scene-layout" style={{ position: 'sticky', top: 0 }}>
        
        <div className="container" style={{ textAlign: 'center', marginBottom: '5vh', zIndex: 10 }}>
           <a href="https://instagram.com/academiayanesgallardo1" target="_blank" rel="noopener noreferrer">
             <h2 className="text-large" style={{ color: 'var(--color-yellow)' }}>
                SÍGUENOS EN <br /><span style={{ textDecoration: 'underline' }}>@ACADEMIAYANESGALLARDO1</span>
             </h2>
           </a>
        </div>
        
        {/* Horizontal Track Container */}
        <div style={{ width: '100vw', overflow: 'hidden', marginBottom: 'clamp(1rem, 4vh, 3rem)' }}>
          <motion.div style={{ x, display: 'flex', gap: '5vw', padding: '0 5vw', height: '50vh', width: 'max-content' }}>
            {instaPosts.map((src, idx) => (
              <motion.a 
                href="https://instagram.com/academiayanesgallardo1" target="_blank" rel="noopener noreferrer"
                key={idx}
                whileHover={{ scale: 0.95, zIndex: 10 }}
                transition={{ type: 'spring', damping: 20 }}
                style={{ 
                  flexShrink: 0, 
                  width: 'clamp(280px, 60vw, 400px)', // Adaptive size
                  height: '100%', 
                  display: 'block',
                  border: '2px solid var(--color-pink)' 
                }}
              >
                <img src={src} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt={`Instagram post ${idx + 1}`} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Dynamic Progress Indicator */}
        <div style={{ width: '50vw', margin: '0 auto', height: '4px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
          <motion.div style={{ scaleX: scrollYProgress, transformOrigin: 'left', width: '100%', height: '100%', backgroundColor: 'var(--color-pink)' }} />
        </div>

      </div>
    </section>
  );
};

export default InstagramSection;
