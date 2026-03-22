import React, { useState, useEffect } from 'react';
import { Home } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BackToHome = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when scrolled down more than 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            top: '1.5rem',
            right: '1.5rem',
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
            color: 'var(--color-pink)',
            boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
            transition: 'background 0.3s, color 0.3s'
          }}
          whileHover={{ 
            background: 'var(--color-pink)', 
            color: 'var(--color-black)',
            scale: 1.1 
          }}
          whileTap={{ scale: 0.9 }}
          title="Ir al inicio"
        >
          <Home size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToHome;
