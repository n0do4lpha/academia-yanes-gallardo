import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

const ContactSection = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const slideX = useTransform(scrollYProgress, [0, 1], ["-100vw", "0vw"]);

  return (
    <section id="contacto" ref={targetRef} className="section-black" style={{ position: 'relative', height: '200dvh' }}>
      
      {/* Snap anchors to force resting at the start (pre-animation) and end (post-animation) */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div className="snap-anchor" style={{ position: 'absolute', top: 0, height: '1dvh', width: '100%' }} />
        {/* We place the bottom anchor at 199dvh so the user rests perfectly at the end of the scroll block */}
        <div className="snap-anchor" style={{ position: 'absolute', top: '199dvh', height: '1dvh', width: '100%' }} />
      </div>

      <div style={{ position: 'sticky', top: 0, height: '100dvh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        
        {/* Background text to fill the black space before the yellow scene slides in */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '0 5vw' }}>
          <h2 className="text-large" style={{ color: 'var(--color-pink)', marginBottom: '1rem' }}>¿INTERESADO?</h2>
          <p className="text-body" style={{ color: 'var(--color-white)', opacity: 0.8 }}>
            Sigue deslizando para abrir el formulario y contactarnos.
          </p>
          <motion.div 
            animate={{ x: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            style={{ marginTop: '2rem', color: 'var(--color-pink)' }}
          >
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </motion.div>
        </div>

        <motion.div 
          style={{ 
            x: slideX,
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            backgroundColor: 'var(--color-yellow)', 
            color: 'var(--color-black)',
            display: 'flex', 
            flexDirection: 'column',
            width: '100vw',
            height: '100dvh',
            padding: 'max(60px, 10vh) 0 5vh 0', // Adjusted safe top
            overflowY: 'auto',
            WebkitOverflowScrolling: 'touch',
            boxShadow: '-10px 0 50px rgba(0,0,0,0.5)'
          }}
        >
          <div className="container safe-bottom" style={{ width: '100%', paddingBottom: 'max(2rem, env(safe-area-inset-bottom))' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(2rem, 5vh, 4rem)' }}>
              
              <div style={{ flex: '1 1 400px' }}>
                <h2 className="text-large" style={{ color: 'var(--color-black)', marginBottom: '1.5rem', fontSize: 'clamp(2rem, 8vw, 3.5rem)' }}>¿EMPEZAMOS?</h2>
                <p className="text-body" style={{ color: 'var(--color-black)', opacity: 0.8, marginBottom: '2rem', fontSize: '1rem' }}>
                  Facilítanos tus datos y nos pondremos en contacto contigo lo antes posible.
                </p>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <input type="text" placeholder="TU NOMBRE" style={inputStyle} />
                  <input type="tel" placeholder="TELÉFONO" style={inputStyle} />
                  <button 
                    type="button" 
                    className="hero-btn" 
                    style={{ 
                      alignSelf: 'flex-start', 
                      border: '2px solid var(--color-black)', 
                      cursor: 'pointer', 
                      marginTop: '0.5rem' 
                    }}
                  >
                    ENVIAR
                  </button>
                </form>
              </div>

              <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '2rem', paddingTop: '1rem' }}>
                <div style={contactItemStyle}>
                  <MapPin color="var(--color-black)" />
                  <div>
                    <p className="text-caption" style={{ color: 'var(--color-black)' }}>DÓNDE ESTAMOS</p>
                    <p className="text-body" style={{ color: 'var(--color-black)', opacity: 0.7 }}>C. Mata, 8, 38611 San Isidro<br/>Santa Cruz de Tenerife</p>
                  </div>
                </div>
                
                <div style={contactItemStyle}>
                  <Phone color="var(--color-black)" />
                  <div>
                    <p className="text-caption" style={{ color: 'var(--color-black)' }}>LLÁMANOS</p>
                    <p className="text-body" style={{ color: 'var(--color-black)', opacity: 0.7 }}>922 39 40 50</p>
                  </div>
                </div>

                <div style={contactItemStyle}>
                  <Mail color="var(--color-black)" />
                  <div>
                    <p className="text-caption" style={{ color: 'var(--color-black)' }}>ESCRÍBENOS</p>
                    <p className="text-body" style={{ color: 'var(--color-black)', opacity: 0.7 }}>yanesgallardo@hotmail.com</p>
                  </div>
                </div>

                <div style={contactItemStyle}>
                  <Instagram color="var(--color-black)" />
                  <div>
                    <p className="text-caption" style={{ color: 'var(--color-black)' }}>SÍGUENOS</p>
                    <p className="text-body" style={{ color: 'var(--color-black)', opacity: 0.7 }}>@academiayanesgallardo1</p>
                  </div>
                </div>
                
                <div style={{ marginTop: 'auto', paddingTop: '2rem', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
                  <p className="text-caption" style={{ color: 'var(--color-black)', opacity: 0.5 }}>
                    ACADEMIA YANES GALLARDO © {new Date().getFullYear()}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

const inputStyle = {
  background: 'transparent',
  border: 'none',
  borderBottom: '2px solid var(--color-black)',
  color: 'var(--color-black)',
  padding: '0.75rem 0',
  fontFamily: 'var(--font-display)',
  fontSize: 'clamp(1.2rem, 4vw, 1.5rem)',
  outline: 'none',
  width: '100%',
  transition: 'border-color 0.3s'
};

const contactItemStyle = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '1rem'
};

export default ContactSection;
