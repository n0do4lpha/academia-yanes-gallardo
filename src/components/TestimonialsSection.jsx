import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const realReviews = [
  { name: 'Carmela Dimarino', role: 'Cliente', time: 'Hace 4 meses', text: 'Fui a la academia por primera vez el lunes y me encontré con un equipo fantástico y profesional, profesores (Maria) con mucha experiencia y alumnos con muchas ganas de aprender. Megan, la alumna que me cortó el pelo, cumplió por completo mis deseos. La esteticista también es experta y fantástica; nadie me había hecho las cejas como ella. Pruébalo y créelo.' },
  { name: 'cervero972', role: 'Cliente', time: 'Hace 9 meses', text: 'Los chicos ponen mucho interés, supongo que quieren aprender bien. El profesor es fantástico. Ayuda, aconseja y enseña a los alumnos con mucho cariño. Es un gran profesional. Yo estoy encantado de asistir.' },
  { name: 'Carlos Mayol', role: 'Cliente', time: 'Hace un mes', text: 'Bastante profesional, hicieron un buen trabajo' },
  { name: 'Rave InDiE BoiG', role: 'Cliente', time: 'Hace 4 años', text: 'He ido dos veces y la verdad es que he salido muy contento porque ayudas a gente a practicar y te dan un buen trato. Mucha gente piensa que tardan demasiado pero es normal, no estas en una peluquería sino que estas en una academia. Recomiendo que vayan a probar. Un saludo' },
  { name: 'Joselin Sarai Rodríguez Alcántara', role: 'Cliente', time: 'Hace 5 años', text: 'Super buen trato, terminas con un buen corte, peinado o color y ayudas a las alumnas y alumnos a seguir practicando. Además nunca sales sin que la profesora te dé el visto bueno. Por tanto estoy encantada y seguiré yendo a la academia' },
  { name: 'Fiammetta Giolito', role: 'Cliente', time: 'Hace 3 años', text: 'Fui a la Academia a buscar mi color. No hablo español, pero el gerente fue muy paciente y amable, tratando de satisfacer mis solicitudes. las chicas que están aprendiendo el trabajo son muy serviciales y atentas. gracias y te deseo un buen trabajo' },
  { name: 'Rafael Cortes', role: 'Cliente', time: 'Hace 2 años', text: 'Son encantadora la chicas y yulir y la Mary un aviente agradable y con música y corta el pelo da tintes super contento Rafael Saludos' },
  { name: 'LILIANA RODRIGUEZ', role: 'Cliente', time: 'Hace 2 años', text: 'Super atentos, excelente atención, tanto las chicas como los chicos son lo máximo y los profes también' },
  { name: 'Los PrestiGe', role: 'Cliente', time: 'Hace 3 años', text: 'Sin duda la mejor academia para todas aquellas personas que quieran formarse con buen nivel tanto en peluqueria como en barberia' },
  { name: 'Jose Mendoza', role: 'Cliente', time: 'Hace 4 años', text: 'Me ha encantado cortarme el pelo ahi porque cortan super bien. Recomiendo que vayan a cortarse el pelo ahi.' },
  { name: 'richs hm', role: 'Cliente', time: 'Hace 6 años', text: 'Muy buenos profecionales, amables y buena gestión y económico, grandes profesores igual' },
  { name: 'JOSE LUIS LORENZO', role: 'Cliente', time: 'Hace 5 años', text: 'Todo perfecto muy buen trato y seguro y barato lo recomiendo' },
  { name: 'alba candamo', role: 'Cliente', time: 'Hace 5 años', text: 'Me encanta.siempre que puedo acudo ahí y son fantásticas.' },
  { name: 'IRENE GUTIERREZ SOSA', role: 'Cliente', time: 'Hace 2 años', text: 'Siempre salgo contenta de allí y son muy amables.' },
  { name: 'Felicia Mitrofan', role: 'Cliente', time: 'Hace 7 años', text: 'Hay muy buenos profesionales' },
  { name: 'Veronica Bernal', role: 'Cliente', time: 'Hace 3 años', text: 'Excelente trabajo 👏  maravillosa atención  gracias…' },
  { name: 'Antonio Mendoza', role: 'Cliente', time: 'Hace 4 años', text: 'Muy buenos profecionales' },
  { name: 'Nacho Maneiro', role: 'Cliente', time: 'Hace 4 años', text: 'Buen trato y un precio excelente' },
  { name: 'CLINTON 10', role: 'Cliente', time: 'Hace un año', text: 'De las mejores peluquerías de todo San Isidro' },
  { name: 'Mónica', role: 'Cliente', time: 'Hace 5 años', text: 'Excelente el trato y la profesionalidad' },
  { name: 'MIGUEL Perez capote', role: 'Cliente', time: 'Hace 5 años', text: 'Muy buena' },
  { name: 'Davide Lasagna', role: 'Cliente', time: 'Hace 4 años', text: 'Todos perfecto... Gracias 👍👍…' },
  { name: 'Denis David Garcia Camejo', role: 'Cliente', time: 'Hace 5 años', text: 'Excelente atención de John' },
  { name: 'Tere Lopez', role: 'Cliente', time: 'Hace 4 años', text: 'Excelente' }
];

const generateTestimonials = (startId, count, offset = 0) => {
  return Array.from({ length: count }).map((_, i) => {
    const rev = realReviews[(i + offset) % realReviews.length];
    return {
      id: startId + i,
      name: rev.name,
      role: rev.role,
      text: rev.text,
      time: rev.time
    };
  });
};

const row1 = generateTestimonials(100, 16, 0);
const row2 = generateTestimonials(200, 16, 8);
const row3 = generateTestimonials(300, 16, 16);

const TestimonialCard = ({ t }) => (
  <div style={{
    backgroundColor: 'rgba(255,255,255,0.05)',
    border: `1px solid ${t.id % 2 === 0 ? 'var(--color-pink)' : 'var(--color-yellow)'}`,
    borderRadius: '20px',
    padding: '1rem',
    width: 'clamp(260px, 70vw, 300px)',
    height: '180px',
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 0,
    position: 'relative',
    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
    // Add subtle hover response for extra polish
    transition: 'transform 0.2s',
  }}
  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
  >
    <div style={{ position: 'absolute', bottom: '-10px', left: '20px', borderTop: '10px solid rgba(255,255,255,0.05)', borderLeft: '10px solid transparent', borderRight: '10px solid transparent' }} />
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
      <div style={{ flex: 1, minWidth: 0, paddingRight: '8px' }}>
        <h4 className="text-body" style={{ 
          color: t.id % 2 === 0 ? 'var(--color-pink)' : 'var(--color-yellow)', 
          fontWeight: 'bold', 
          fontSize: '0.95rem',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}>{t.name}</h4>
        <span className="text-caption" style={{ color: 'var(--color-white)', opacity: 0.5, fontSize: '0.75rem' }}>{t.role}</span>
      </div>
      <span className="text-caption" style={{ color: 'var(--color-white)', opacity: 0.3, fontSize: '0.7rem', flexShrink: 0 }}>{t.time}</span>
    </div>
    <p className="text-body" style={{ 
      color: 'var(--color-white)', 
      fontSize: '0.85rem',
      display: '-webkit-box',
      WebkitLineClamp: 4,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      lineHeight: '1.4'
    }}>{t.text}</p>
  </div>
);

const TestimonialsSection = () => {
  const targetRef = useRef(null);
  
  // Track scroll exactly when this section enters the viewport
  // Mapping layout shifts aggressively to scroll progress
  const { scrollYProgress } = useScroll({ target: targetRef });

  // Each row now has its OWN unique starting offset and range for a "loose" feel
  // Row 1: Starts at -32% (around card 5) and moves right
  const speedRow1 = useTransform(scrollYProgress, [0, 1], ['-32%', '-20%']); 
  // Row 2: Starts at -12% (around card 2) and moves left
  const speedRow2 = useTransform(scrollYProgress, [0, 1], ['-12%', '-28%']);
  // Row 3: Starts at -45% (around card 7) and moves right
  const speedRow3 = useTransform(scrollYProgress, [0, 1], ['-45%', '-25%']);

  return (
    <section ref={targetRef} className="section-black snap-anchor" style={{ 
      position: 'relative',
      height: '300vh', // Increased scrollable room
      backgroundColor: 'var(--color-black)'
    }}>
      {/* Internal snap anchors for a longer, more detailed scroll experience */}
      <div className="snap-anchor" style={{ position: 'absolute', top: 0 }} />
      <div className="snap-anchor" style={{ position: 'absolute', top: '100vh' }} />
      <div className="snap-anchor" style={{ position: 'absolute', top: '200vh' }} />

      <div className="scene-layout" style={{ position: 'sticky', top: 0 }}>
        <div className="container" style={{ marginBottom: 'clamp(1.5rem, 3vh, 3rem)', textAlign: 'center' }}>
          <h2 className="text-large" style={{ color: 'var(--color-pink)' }}>LO QUE DICEN</h2>
        </div>

        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: 'clamp(1rem, 2vh, 2rem)',
          paddingTop: '15px',    // prevents the top scale hover from being clipped
          paddingBottom: '15px', // gives room for the card's drop shadow and triangle pointer
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
        }}>
          {/* ROW 1: Unique speed and start point */}
          <motion.div style={{ display: 'flex', gap: '1rem', width: 'max-content', x: speedRow1, paddingBottom: '10px' }}>
            {row1.map(t => <TestimonialCard key={t.id} t={t} />)}
          </motion.div>

          {/* ROW 2: Unique speed and start point */}
          <motion.div style={{ display: 'flex', gap: '1rem', width: 'max-content', x: speedRow2, paddingBottom: '10px' }}>
            {row2.map(t => <TestimonialCard key={t.id} t={t} />)}
          </motion.div>

          {/* ROW 3: Unique speed and start point (Hidden on Desktop) */}
          <motion.div className="mobile-only-row" style={{ display: 'flex', gap: '1rem', width: 'max-content', x: speedRow3, paddingBottom: '10px' }}>
            {row3.map(t => <TestimonialCard key={t.id} t={t} />)}
          </motion.div>
        </div>

        <div className="container" style={{ marginTop: 'clamp(1rem, 3vh, 4rem)', display: 'flex', justifyContent: 'center' }}>
          <a 
            href="https://www.google.com/maps/place/Academia+De+Peluqueria+Yanes+Gallardo/@36.2166922,-5.4727197,14z/data=!4m8!3m7!1s0xc6a9e4a16807ef9:0x1053ee7d07869969!8m2!3d28.0775503!4d-16.5597914!9m1!1b1!16s%2Fg%2F1q5bmp99l?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hero-btn"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', padding: '0.6rem 1.5rem' }}
          >
            VER TODAS LAS RESEÑAS
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
