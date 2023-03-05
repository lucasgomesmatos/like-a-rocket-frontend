import { useState } from 'react';
import { Button } from '../Button';
import { Logo } from '../Logo';
import * as C from './style';

export const Header = () => {
  const [clickOpenMenu, setClickOpenMenu] = useState(false);

  const scrollTo = (id: string) => {
    let element = document.getElementById(id);

    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
    setClickOpenMenu(!clickOpenMenu);
  };

  return (
    <C.Section id="home">
      <C.NavBar>
        <Logo />
        <C.HamburgerMenu
          open={clickOpenMenu}
          onClick={() => setClickOpenMenu(!clickOpenMenu)}
        >
          &nbsp;
        </C.HamburgerMenu>
        <C.Menu open={clickOpenMenu}>
          <C.MenuItem onClick={() => scrollTo('home')}>Home</C.MenuItem>
          <C.MenuItem onClick={() => scrollTo('sobre')}>Sobre</C.MenuItem>
          <C.MenuItem onClick={() => scrollTo('servicos')}>Serviços</C.MenuItem>
          <C.MenuItem onClick={() => scrollTo('servicos')}>Clientes</C.MenuItem>
          <div className="mobile">
            <Button link="Entrar em contato" text="Entrar em Contato" />
          </div>
        </C.Menu>
        <div className="desktop">
          <Button link="Entrar em contato" text="Entrar em Contato" />
        </div>
      </C.NavBar>
    </C.Section>
  );
};
