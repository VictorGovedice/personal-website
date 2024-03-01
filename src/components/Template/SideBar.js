import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Victor Govedice</h2>
        <p><a href="mailto:victorgovedice@gmail.com">victorgovedice@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>SOBRE</h2>
      <p>Olá, sou Victor Govedice, desenvolvedor Full Stack JavaScript, com destaque em front-end devido à minha ampla experiência e familiaridade nessa área. Formado pela Universidade Anhanguera, colaborei com a SPCM no desenvolvimento de aplicações para otimizar sistemas. Sou também especialista em UX/UI, o que me permite criar interfaces de usuário notáveis. Além disso, sou o fundador da DogPam, evidenciando meu comprometimento com a inovação tecnológica.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Leia Mais</Link> : <Link to="/about" className="button">Sobre Mim</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Victor Govedice <Link to="/">victorgovedice</Link>.</p>
    </section>
  </section>
);

export default SideBar;
