
import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Hospital General La Madrid</h1>
      <nav>
        <ul>
          <li><a href="#home">Inicio</a></li>
          <li><a href="#appointment">Reservar Turno</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
