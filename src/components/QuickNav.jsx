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

      setShowHome(scrollPos > 300);
      setShowContact(scrollPos > 300 && scrollPos < contactTop - 300);
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const scrollToContact = () => {
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop + window.innerHeight,
        behavior: 'smooth'
      });
    }
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
            className="quick-nav-btn"
            style={{ right: '1rem', color: 'var(--color-pink)' }}
            whileHover={{ background: 'var(--color-pink)', color: 'var(--color-black)', scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title="Ir al inicio"
          >
            <Home size={16} />
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
            className="quick-nav-btn"
            style={{ left: '1rem', color: 'var(--color-yellow)' }}
            whileHover={{ background: 'var(--color-yellow)', color: 'var(--color-black)', scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title="Ir al formulario"
          >
            <Mail size={16} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default QuickNav;
