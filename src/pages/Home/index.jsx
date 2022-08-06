import * as C from './style';
import foto from '../../assets/bg-image.png';
import arrow from '../../assets/arrow-right.svg';
import { NavLink } from 'react-router-dom';

export const Home = () => {
  return (
    <C.Container>
      <C.Intro>
        <h1 className="intro-title">O seu negócio merece um projeto </h1>
        <p className="intro-description">
          Qual será o próximo passo digital da sua marca?
        </p>
        <NavLink className="button" to="/">
          Ver Mais <img src={arrow} alt="Flecha" />
        </NavLink>
      </C.Intro>
      <div className="image">
        <img src={foto} alt="Linhas de códigos" />
      </div>
    </C.Container>
  );
};
