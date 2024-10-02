
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer" id="contact">
      <p>© {new Date().getFullYear()} Hospital General La Madrid. Todos los derechos reservados.</p>
      <p>Contacto: salud@lamadrid.gob.ar | Tel: 02286 420054</p>
      <p>Dirección: San Martin 565, General La Madrid, Provincia de Buenos Aires, Argentina</p>
    </footer>
  );
}

export default Footer;
