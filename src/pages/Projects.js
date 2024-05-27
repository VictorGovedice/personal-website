import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

import Main from '../layouts/Main';
import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const Projects = () => (
  <Main
    title="Projects"
    description="Learn about Victor Govedice's projects."
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2><Link to="/projects">Projetos</Link></h2>
          <p>Todos os projetos estão no GitHub. clique no gatinho</p>
          <p>
            <a href="https://github.com/VictorGovedice?tab=repositories" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} />
            </a>
          </p>
        </div>
      </header>
      {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
    </article>
  </Main>
);

export default Projects;
