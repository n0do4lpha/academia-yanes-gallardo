import React from 'react';

const Footer = () => {
  return (
    <footer className="section-white" style={{ padding: '6vw 0', textAlign: 'center' }}>
      <div className="container">
        <h3 className="text-large" style={{ color: 'var(--color-black)', marginBottom: '3rem', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
          ÚNETE A YANES GALLARDO
        </h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <p className="text-body" style={{ color: 'var(--color-black)' }}><strong>Teléfono:</strong> 922 39 40 50</p>
          <p className="text-body" style={{ color: 'var(--color-black)' }}><strong>Email:</strong> <a href="mailto:yanesgallardo@hotmail.com">yanesgallardo@hotmail.com</a></p>
          <p className="text-body" style={{ color: 'var(--color-black)' }}><strong>Dirección:</strong> C. Mata, 8, 38611 San Isidro, Santa Cruz de Tenerife</p>
          <p className="text-body" style={{ color: 'var(--color-black)' }}><strong>Horario:</strong> Lunes a Viernes de 09:00 a 13:00 y de 16:00 a 19:00.</p>
          <p className="text-body" style={{ color: 'var(--color-black)' }}><strong>Instagram:</strong> <a href="https://instagram.com/academiayanesgallardo1" target="_blank" rel="noopener noreferrer">@academiayanesgallardo1</a></p>
          <p className="text-caption" style={{ color: 'rgba(0,0,0,0.5)', marginTop: '3rem' }}>© {new Date().getFullYear()} Academia de Peluquería Yanes Gallardo. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
