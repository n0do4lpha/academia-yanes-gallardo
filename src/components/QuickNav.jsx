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
      const contactTop = contactEl ? contactEl.offsetTop : totalHeight;

      // Home button is visible scroll > 300px BUT hides 
      // when we are right in the contact section to avoid overlap with its UI
      setShowHome(scrollPos > 300 && scrollPos < contactTop + 100);

      // Contact button logic
      setShowContact(scrollPos > 300 && scrollPos < contactTop - 200);
    };

    toggleVisibility();
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      // Direct jump to contact for mobile smoothness
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const buttonBaseStyle = {
    position: 'fixed',
    top: 'max(1rem, calc(env(safe-area-inset-top) + 0.5rem))',
    zIndex: 1000,
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '50%',
    width: '44px', // Slightly larger for better tap target
    height: '44px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '0 8px 20px rgba(0,0,0,0.4)',
    transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
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
