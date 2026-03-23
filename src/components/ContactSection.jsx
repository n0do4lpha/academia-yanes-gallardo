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
    <section id="contacto" ref={targetRef} className="section-black" style={{ position: 'relative', height: '200vh' }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div className="snap-anchor" style={{ position: 'absolute', top: 0, height: '1vh', width: '100%' }} />
        <div className="snap-anchor" style={{ position: 'absolute', top: '199vh', height: '1vh', width: '100%' }} />
      </div>

      <div className="scene-layout" style={{ position: 'sticky', top: 0 }}>
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          alignItems: 'center', textAlign: 'center', padding: '0 5vw'
        }}>
          <h2 className="text-large" style={{ color: 'var(--color-pink)', marginBottom: '1rem' }}>¿INTERESADO?</h2>
          <p className="text-body" style={{ color: 'var(--color-white)', opacity: 0.8 }}>
            Sigue deslizando para abrir el formulario y contactarnos.
          </p>
          <motion.div
            animate={{ x: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            style={{ marginTop: '2rem', color: 'var(--color-pink)' }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
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
            height: '100vh',
            padding: 'calc(env(safe-area-inset-top, 0px) + 2.5rem) 0 calc(env(safe-area-inset-bottom, 0px) + 1rem) 0',
            boxShadow: '-10px 0 50px rgba(0,0,0,0.5)'
          }}
        >
          <div className="container" style={{ width: '100%', overflowY: 'auto', maxHeight: '100%' }}>
            <div className="contact-grid">

              <div style={{ flex: '1 1 100%' }}>
                <h2 className="text-large" style={{ color: 'var(--color-black)', marginBottom: '1.5rem' }}>¿EMPEZAMOS?</h2>
                <p className="text-body" style={{ color: 'var(--color-black)', opacity: 0.8, marginBottom: '1.5rem' }}>
                  Facilítanos tus datos y nos pondremos en contacto contigo lo antes posible.
                </p>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <input type="text" placeholder="TU NOMBRE" className="contact-input" />
                  <input type="tel" placeholder="TELÉFONO" className="contact-input" />
                  <button
                    type="button"
                    className="hero-btn"
                    style={{
                      alignSelf: 'flex-start',
                      border: '2px solid var(--color-black)',
                      cursor: 'pointer',
                      marginTop: '0.75rem'
                    }}
                  >
                    ENVIAR
                  </button>
                </form>
              </div>

              <div style={{ flex: '1 1 100%', display: 'flex', flexDirection: 'column', gap: '1.25rem', paddingTop: '0.5rem' }}>
                <div className="contact-item">
                  <MapPin size={18} color="var(--color-black)" />
                  <div>
                    <p className="text-caption" style={{ color: 'var(--color-black)', fontSize: '0.7rem' }}>DÓNDE ESTAMOS</p>
                    <p className="text-body" style={{ color: 'var(--color-black)', opacity: 0.7, fontSize: '0.8rem' }}>C. Mata, 8, 38611 San Isidro<br />Santa Cruz de Tenerife</p>
                  </div>
                </div>

                <div className="contact-item">
                  <Phone size={18} color="var(--color-black)" />
                  <div>
                    <p className="text-caption" style={{ color: 'var(--color-black)', fontSize: '0.7rem' }}>LLÁMANOS</p>
                    <p className="text-body" style={{ color: 'var(--color-black)', opacity: 0.7, fontSize: '0.8rem' }}>922 39 40 50</p>
                  </div>
                </div>

                <div className="contact-item">
                  <Mail size={18} color="var(--color-black)" />
                  <div>
                    <p className="text-caption" style={{ color: 'var(--color-black)', fontSize: '0.7rem' }}>ESCRÍBENOS</p>
                    <p className="text-body" style={{ color: 'var(--color-black)', opacity: 0.7, fontSize: '0.8rem' }}>yanesgallardo@hotmail.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <Instagram size={18} color="var(--color-black)" />
                  <div>
                    <p className="text-caption" style={{ color: 'var(--color-black)', fontSize: '0.7rem' }}>SÍGUENOS</p>
                    <p className="text-body" style={{ color: 'var(--color-black)', opacity: 0.7, fontSize: '0.8rem' }}>@academiayanesgallardo1</p>
                  </div>
                </div>

                <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
                  <p className="text-caption" style={{ color: 'var(--color-black)', opacity: 0.5, fontSize: '0.65rem' }}>
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

export default ContactSection;
