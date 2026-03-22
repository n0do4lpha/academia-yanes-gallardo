import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const letterAnim = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', damping: 15, stiffness: 100 }
  },
};

const HeroSection = () => {
  const { scrollY } = useScroll();
  const yBackground = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacityBackground = useTransform(scrollY, [0, 800], [0.6, 0.2]);

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      const targetPos = contactSection.offsetTop + window.innerHeight;
      window.scrollTo({
        top: targetPos,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="section-black min-h-screen snap-anchor" style={{ position: 'relative', overflow: 'hidden' }}>
      <motion.div style={{ position: 'absolute', inset: -50, zIndex: 0, y: yBackground, opacity: opacityBackground }}>
        <img 
          src="/hero-image.jpg" 
          alt="Academia Yanes Gallardo"  
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </motion.div>

      <div className="container flex-center min-h-screen" style={{ position: 'relative', zIndex: 1, flexDirection: 'column' }}>
        <motion.div
          variants={sentence}
          initial="hidden"
          animate="visible"
          style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '3rem' }}
        >
          {['ACADEMIA', 'YANES', 'GALLARDO'].map((word, wordIndex) => (
            <div key={wordIndex} style={{ overflow: 'hidden' }}>
              <motion.h1 
                className="text-huge" 
                style={{ color: 'var(--color-pink)', display: 'inline-block' }}
                variants={letterAnim}
              >
                {word}
              </motion.h1>
            </div>
          ))}
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          style={{
            color: 'var(--color-white)',
            opacity: 0.85,
            textAlign: 'center',
            maxWidth: '450px',
            marginBottom: '3rem',
            fontFamily: 'var(--font-primary)',
            fontSize: 'clamp(1rem, 3vw, 1.25rem)',
            fontWeight: 500,
            lineHeight: 1.4,
            letterSpacing: '0.05em',
            textTransform: 'uppercase'
          }}
        >
          La formación que buscabas<br/>El futuro que te espera
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', damping: 20, stiffness: 100, delay: 0.8 }}
        >
          <button onClick={scrollToContact} className="hero-btn" style={{ border: 'none', cursor: 'pointer' }}>
            <span>INSCRÍBETE AHORA</span>
            <ArrowDownRight strokeWidth={3} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
