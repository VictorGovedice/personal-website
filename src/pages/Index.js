import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={'Site pessoal de Victor Govedice. Formado pela Universidade Anhanguera, com base em São Paulo.,'
    + 'Fundador, Desenvolvedor e Engenheiro de Software na DogPam.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">Sobre esse site</Link></h2>
          <p>
            Uma aplicações react bonita, responsivo e gerado estaticamente,
            escrito com Javascript moderno.
          </p>
        </div>
      </header>
      <p> Bem-vindo ao meu website. Fique à vontade para ler mais <Link to="/about">sobre mim</Link>,
        ou você pode conferir {' '}
        <Link to="/resume">currículo</Link>, {' '}
        <Link to="/projects">projetos</Link>, {' '}
        ver <Link to="/stats">estatísticas do site</Link>, {' '}
        ou entrar em <Link to="/contact">contato</Link> comigo.
      </p>
      <p> Whatsapp +55 11 94188-1298.</p>
    </article>
  </Main>
);

export default Index;
