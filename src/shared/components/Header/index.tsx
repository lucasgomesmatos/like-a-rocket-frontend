import { Button } from '../Button';
import { Logo } from '../Logo';
import * as C from './style';

export const Header = () => {
  const scrollTo = (id: string) => {
    let element = document.getElementById(id);

    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  };

  return (
    <C.Section id="home">
      <C.NavBar>
        <Logo />
        <C.Menu>
          <C.MenuItem onClick={() => scrollTo('home')}>Home</C.MenuItem>
          <C.MenuItem onClick={() => scrollTo('sobre')}>Sobre</C.MenuItem>
          <C.MenuItem onClick={() => scrollTo('servicos')}>Serviços</C.MenuItem>
          <C.MenuItem onClick={() => scrollTo('servicos')}>Clientes</C.MenuItem>
        </C.Menu>
        <Button link="Entrar em contato" text="Entrar em Contato" />
      </C.NavBar>
    </C.Section>
  );
};
