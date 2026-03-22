import React, { useState, useEffect } from 'react';
import { Home, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const QuickNav = () => {
  const [showHome, setShowHome] = useState(false);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollPos = window.pageYOffset;
      const totalHeight = document.documentElement.scrollHeight;
      
      const contactEl = document.getElementById('contacto');
      // Calculate where the contact section effectively starts
      const contactTop = contactEl ? contactEl.offsetTop : totalHeight;

      // Home button is visible any time we scroll down more than 300px
      setShowHome(scrollPos > 300);

      // Contact button is visible if we are down more than 300px 
      // AND we haven't reached the contact section yet.
      // We subtract 300px from contactTop to make it disappear right as they reach it
      setShowContact(scrollPos > 300 && scrollPos < contactTop - 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      const targetPos = contactSection.offsetTop + window.innerHeight;
      window.scrollTo({
        top: targetPos,
        behavior: 'smooth'
      });
    }
  };

  const buttonBaseStyle = {
    position: 'fixed',
    top: 'max(1.5rem, calc(env(safe-area-inset-top) + 1rem))', // Shifted for iPhone notch
    zIndex: 1000,
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
    transition: 'background 0.3s, color 0.3s'
  };

  return (
    <>
      <AnimatePresence>
        {showHome && (
          <motion.button
            key="home"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            onClick={scrollToTop}
            style={{ ...buttonBaseStyle, right: '1.5rem', color: 'var(--color-pink)' }}
            whileHover={{ background: 'var(--color-pink)', color: 'var(--color-black)', scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title="Ir al inicio"
          >
            <Home size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showContact && (
          <motion.button
            key="contact"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            onClick={scrollToContact}
            style={{ ...buttonBaseStyle, left: '1.5rem', color: 'var(--color-yellow)' }}
            whileHover={{ background: 'var(--color-yellow)', color: 'var(--color-black)', scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title="Ir al formulario"
          >
            <Mail size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default QuickNav;
