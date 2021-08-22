import React from 'react';
import { MovieFooter } from './styles';
import { GrLinkedin, GrGithub } from 'react-icons/gr';
import { BsEnvelope } from 'react-icons/bs';
import img from '../../assets/TMDBLogo.svg';

const Footer: React.FC = () => {
  return (
    <MovieFooter>
      <p>Desenvolvido por Gabriel Sobreira</p>
      <nav>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/gabriel-sobreira-b584a9178"
              rel="noreferrer"
              target="_blank"
            >
              <GrLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/GabrielLSobreira"
              rel="noreferrer"
              target="_blank"
            >
              <GrGithub />
            </a>
          </li>
          <li>
            <a
              href="mailto:gabriellaranjasobreira@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              <BsEnvelope />
            </a>
          </li>
        </ul>
      </nav>
      <p>
        Api utilizada de
        <a
          href="https://www.themoviedb.org/?language=pt-BR"
          rel="noreferrer"
          target="_blank"
        >
          <img src={img} alt="Logo do site TD"></img>
        </a>
      </p>
    </MovieFooter>
  );
};

export default Footer;
