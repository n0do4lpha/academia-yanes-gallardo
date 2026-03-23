import React from 'react';
import { motion } from 'framer-motion';

const MediaCollageSection = () => {
  // Simulating the 4 slightly rotated videos/images from the reference
  const mediaItems = [
    { id: 1, rot: 4, src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop', borderColor: 'var(--color-pink)' },
    { id: 2, rot: -2, src: 'https://images.unsplash.com/photo-1595476108010-b4d1f10d5e43?q=80&w=800&auto=format&fit=crop', borderColor: 'var(--color-yellow)' },
    { id: 3, rot: 5, src: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=800&auto=format&fit=crop', borderColor: '#d461c1' },
    { id: 4, rot: -3, src: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800&auto=format&fit=crop', borderColor: '#6d40c2' }
  ];

  return (
    <section className="section-black" style={{ padding: '10vw 0', overflow: 'hidden' }}>
      <div className="container">
        <h2 className="text-large text-center" style={{ color: 'var(--color-pink)', marginBottom: '4rem' }}>
          MÁS DE 20 AÑOS DE HISTORIA
        </h2>
        
        <div style={{ display: 'flex', gap: '2vw', justifyContent: 'center', flexWrap: 'wrap' }}>
          {mediaItems.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
              style={{
                width: 'calc(25% - 1.5vw)',
                minWidth: '200px',
                aspectRatio: '9/16',
                transform: `rotate(${item.rot}deg)`,
                border: `2px solid ${item.borderColor}`,
                position: 'relative'
              }}
            >
              <img 
                src={item.src} 
                alt="Hair style" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaCollageSection;
