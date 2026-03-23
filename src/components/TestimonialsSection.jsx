import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const realReviews = [
  { name: 'Carmela Dimarino', role: 'Cliente', time: 'Hace 4 meses', text: 'Fui a la academia por primera vez el lunes y me encontré con un equipo fantástico y profesional. Megan, la alumna que me cortó el pelo, cumplió por completo mis deseos.' },
  { name: 'cervero972', role: 'Cliente', time: 'Hace 9 meses', text: 'Los chicos ponen mucho interés, supongo que quieren aprender bien. El profesor es fantástico. Ayuda, aconseja y enseña a los alumnos con mucho cariño.' },
  { name: 'Carlos Mayol', role: 'Cliente', time: 'Hace un mes', text: 'Bastante profesional, hicieron un buen trabajo' },
  { name: 'Rave InDiE BoiG', role: 'Cliente', time: 'Hace 4 años', text: 'He ido dos veces y la verdad es que he salido muy contento porque ayudas a gente a practicar y te dan un buen trato.' },
  { name: 'Joselin Sarai', role: 'Cliente', time: 'Hace 5 años', text: 'Super buen trato, terminas con un buen corte, peinado o color y ayudas a las alumnas a seguir practicando.' },
  { name: 'Fiammetta Giolito', role: 'Cliente', time: 'Hace 3 años', text: 'Fui a la Academia a buscar mi color. El gerente fue muy paciente y amable, tratando de satisfacer mis solicitudes.' },
  { name: 'Rafael Cortes', role: 'Cliente', time: 'Hace 2 años', text: 'Son encantadora las chicas y la Mary, un ambiente agradable y con música y corta el pelo da tintes super contento.' },
  { name: 'LILIANA RODRIGUEZ', role: 'Cliente', time: 'Hace 2 años', text: 'Super atentos, excelente atención, tanto las chicas como los chicos son lo máximo y los profes también' },
  { name: 'Los PrestiGe', role: 'Cliente', time: 'Hace 3 años', text: 'Sin duda la mejor academia para todas aquellas personas que quieran formarse con buen nivel tanto en peluqueria como en barberia' },
  { name: 'Jose Mendoza', role: 'Cliente', time: 'Hace 4 años', text: 'Me ha encantado cortarme el pelo ahi porque cortan super bien. Recomiendo que vayan.' },
  { name: 'richs hm', role: 'Cliente', time: 'Hace 6 años', text: 'Muy buenos profesionales, amables y buena gestión y económico, grandes profesores.' },
  { name: 'JOSE LUIS LORENZO', role: 'Cliente', time: 'Hace 5 años', text: 'Todo perfecto muy buen trato y seguro y barato lo recomiendo' },
  { name: 'alba candamo', role: 'Cliente', time: 'Hace 5 años', text: 'Me encanta. Siempre que puedo acudo ahí y son fantásticas.' },
  { name: 'IRENE GUTIERREZ SOSA', role: 'Cliente', time: 'Hace 2 años', text: 'Siempre salgo contenta de allí y son muy amables.' },
  { name: 'Felicia Mitrofan', role: 'Cliente', time: 'Hace 7 años', text: 'Hay muy buenos profesionales' },
  { name: 'Veronica Bernal', role: 'Cliente', time: 'Hace 3 años', text: 'Excelente trabajo, maravillosa atención gracias.' },
  { name: 'Antonio Mendoza', role: 'Cliente', time: 'Hace 4 años', text: 'Muy buenos profesionales' },
  { name: 'Nacho Maneiro', role: 'Cliente', time: 'Hace 4 años', text: 'Buen trato y un precio excelente' },
  { name: 'CLINTON 10', role: 'Cliente', time: 'Hace un año', text: 'De las mejores peluquerías de todo San Isidro' },
  { name: 'Mónica', role: 'Cliente', time: 'Hace 5 años', text: 'Excelente el trato y la profesionalidad' },
];

const generateTestimonials = (startId, count, offset = 0) =>
  Array.from({ length: count }).map((_, i) => {
    const rev = realReviews[(i + offset) % realReviews.length];
    return { id: startId + i, ...rev };
  });

const row1 = generateTestimonials(100, 16, 0);
const row2 = generateTestimonials(200, 16, 8);
const row3 = generateTestimonials(300, 16, 16);

const accentColor = (id) => id % 2 === 0 ? 'var(--color-pink)' : 'var(--color-yellow)';

const TestimonialCard = ({ t }) => (
  <div
    className="testimonial-card"
    style={{ border: `1px solid ${accentColor(t.id)}` }}
  >
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.4rem' }}>
      <div style={{ flex: 1, minWidth: 0, paddingRight: '6px' }}>
        <h4 className="text-body" style={{
          color: accentColor(t.id),
          fontWeight: 'bold',
          fontSize: '0.85rem',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}>{t.name}</h4>
        <span className="text-caption" style={{ color: 'var(--color-white)', opacity: 0.5, fontSize: '0.7rem' }}>{t.role}</span>
      </div>
      <span className="text-caption" style={{ color: 'var(--color-white)', opacity: 0.3, fontSize: '0.65rem', flexShrink: 0 }}>{t.time}</span>
    </div>
    <p className="text-body" style={{
      color: 'var(--color-white)',
      fontSize: '0.8rem',
      display: '-webkit-box',
      WebkitLineClamp: 4,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      lineHeight: '1.35'
    }}>{t.text}</p>
  </div>
);

const TestimonialsSection = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const speedRow1 = useTransform(scrollYProgress, [0, 1], ['-32%', '-20%']);
  const speedRow2 = useTransform(scrollYProgress, [0, 1], ['-12%', '-28%']);
  const speedRow3 = useTransform(scrollYProgress, [0, 1], ['-45%', '-25%']);

  return (
    <section ref={targetRef} className="section-black snap-anchor" style={{
      position: 'relative',
      height: '300vh',
      backgroundColor: 'var(--color-black)'
    }}>
      <div className="snap-anchor" style={{ position: 'absolute', top: 0 }} />
      <div className="snap-anchor" style={{ position: 'absolute', top: '100vh' }} />
      <div className="snap-anchor" style={{ position: 'absolute', top: '200vh' }} />

      <div className="scene-layout" style={{ position: 'sticky', top: 0 }}>
        <div className="container" style={{ marginBottom: 'clamp(1rem, 3vh, 2.5rem)', textAlign: 'center' }}>
          <h2 className="text-large" style={{ color: 'var(--color-pink)' }}>LO QUE DICEN</h2>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(0.75rem, 2vh, 1.5rem)',
          paddingTop: '10px',
          paddingBottom: '10px',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
        }}>
          <motion.div style={{ display: 'flex', gap: '0.75rem', width: 'max-content', x: speedRow1, paddingBottom: '8px' }}>
            {row1.map(t => <TestimonialCard key={t.id} t={t} />)}
          </motion.div>

          <motion.div style={{ display: 'flex', gap: '0.75rem', width: 'max-content', x: speedRow2, paddingBottom: '8px' }}>
            {row2.map(t => <TestimonialCard key={t.id} t={t} />)}
          </motion.div>

          <motion.div className="mobile-only" style={{ display: 'flex', gap: '0.75rem', width: 'max-content', x: speedRow3, paddingBottom: '8px' }}>
            {row3.map(t => <TestimonialCard key={t.id} t={t} />)}
          </motion.div>
        </div>

        <div className="container" style={{ marginTop: 'clamp(0.75rem, 2vh, 2rem)', display: 'flex', justifyContent: 'center' }}>
          <a
            href="https://www.google.com/maps/place/Academia+De+Peluqueria+Yanes+Gallardo/@36.2166922,-5.4727197,14z/data=!4m8!3m7!1s0xc6a9e4a16807ef9:0x1053ee7d07869969!8m2!3d28.0775503!4d-16.5597914!9m1!1b1!16s%2Fg%2F1q5bmp99l?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn"
            style={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)', padding: '0.5rem 1.25rem' }}
          >
            VER TODAS LAS RESEÑAS
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
