import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsWhatsapp,
} from 'react-icons/bs';
import { Banner } from '../../components/Banner';
import { Logo } from '../../components/Logo';
import * as C from './style';

export const Footer = () => {
  const scrollTo = (id: string) => {
    let element = document.getElementById(id);

    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  };

  return (
    <C.Section>
      <Banner />
      <C.Container>
        <C.Left>
          <Logo fill="#0D0D0D" width="250" />
          <C.IconsList>
            <a href="" target="_blank">
              <BsFacebook size={24} />
            </a>
            <a href="" target="_blank">
              <BsWhatsapp size={24} />
            </a>
            <a href="" target="_blank">
              <BsInstagram size={24} />
            </a>
            <a href="" target="_blank">
              <BsLinkedin size={24} />
            </a>
          </C.IconsList>
        </C.Left>
        <C.MenuItems>
          <C.MenuItem onClick={() => scrollTo('home')}>Home</C.MenuItem>
          <C.MenuItem onClick={() => scrollTo('sobre')}>Sobre</C.MenuItem>
          <C.MenuItem onClick={() => scrollTo('servicos')}>Serviços</C.MenuItem>
          <C.MenuItem onClick={() => scrollTo('servicos')}>Clientes</C.MenuItem>
        </C.MenuItems>
      </C.Container>
      <C.Copy>
        &copy; {new Date().getFullYear()} - Like a Rocket. Todos os direitos
        reservados.
      </C.Copy>
    </C.Section>
  );
};
