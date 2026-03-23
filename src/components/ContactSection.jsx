import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

const ContactSection = () => {
  const targetRef = useRef(null);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
            alignItems: 'center',
            width: '100vw',
            height: '100dvh',
            padding: '8vw 0 2vw 0',
            boxShadow: '-10px 0 50px rgba(0,0,0,0.5)' // add a small shadow to make the curtain edge distinct
          }}
        >
          <div className="container" style={{ width: '100%', padding: '0 20px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(1.5rem, 5vh, 4rem)', justifyContent: 'center' }}>

              <div style={{ flex: '1 1 400px' }}>
                <h2 className="text-large" style={{ color: 'var(--color-black)', marginBottom: '2rem' }}>¿EMPEZAMOS?</h2>
                <p className="text-body" style={{ color: 'var(--color-black)', opacity: 0.8, marginBottom: '2rem' }}>
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
                      marginTop: '1rem'
                    }}
                  >
                    ENVIAR
                  </button>
                </form>
              </div>

              <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: 'clamp(0.5rem, 1.5vh, 2rem)', paddingTop: '0.5rem' }}>
                <div style={contactItemStyle}>
                  <MapPin color="var(--color-black)" size={isMobile ? 20 : 24} />
                  <div>
                    <p className="text-caption" style={{ color: 'var(--color-black)', fontSize: '0.75rem' }}>DÓNDE ESTAMOS</p>
                    <p className="text-body" style={{ color: 'var(--color-black)', opacity: 0.7, fontSize: '0.9rem' }}>C. Mata, 8, 38611 San Isidro<br />Santa Cruz de Tenerife</p>
                  </div>
                </div>

                <div style={contactItemStyle}>
                  <Phone color="var(--color-black)" size={isMobile ? 20 : 24} />
                  <div>
                    <p className="text-caption" style={{ color: 'var(--color-black)', fontSize: '0.75rem' }}>LLÁMANOS</p>
                    <p className="text-body" style={{ color: 'var(--color-black)', opacity: 0.7, fontSize: '0.9rem' }}>922 39 40 50</p>
                  </div>
                </div>

                <div style={contactItemStyle}>
                  <Mail color="var(--color-black)" size={isMobile ? 20 : 24} />
                  <div>
                    <p className="text-caption" style={{ color: 'var(--color-black)', fontSize: '0.75rem' }}>ESCRÍBENOS</p>
                    <p className="text-body" style={{ color: 'var(--color-black)', opacity: 0.7, fontSize: '0.9rem' }}>yanesgallardo@hotmail.com</p>
                  </div>
                </div>

                <div style={contactItemStyle}>
                  <Instagram color="var(--color-black)" size={isMobile ? 20 : 24} />
                  <div>
                    <p className="text-caption" style={{ color: 'var(--color-black)', fontSize: '0.75rem' }}>SÍGUENOS</p>
                    <p className="text-body" style={{ color: 'var(--color-black)', opacity: 0.7, fontSize: '0.9rem' }}>@academiayanesgallardo1</p>
                  </div>
                </div>

                <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
                  <p className="text-caption" style={{ color: 'var(--color-black)', opacity: 0.5, fontSize: '0.7rem' }}>
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
  padding: '1rem 0',
  fontFamily: 'var(--font-display)',
  fontSize: '1.5rem',
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
