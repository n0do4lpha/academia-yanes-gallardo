import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/34922394050"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Contactar por WhatsApp"
    >
      <div className="whatsapp-pulse" />
      <MessageCircle size={28} color="white" />
    </motion.a>
  );
};

export default FloatingWhatsApp;
