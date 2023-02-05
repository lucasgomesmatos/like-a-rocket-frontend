import { Button } from '../Button';
import { Logo } from '../Logo';
import * as C from './style';

export const Header = () => {
  return (
    <C.Section>
      <C.NavBar>
        <Logo />
        <C.Menu>
          <C.MenuItem>Sobre</C.MenuItem>
          <C.MenuItem>Serviços</C.MenuItem>
          <C.MenuItem>Clientes</C.MenuItem>
        </C.Menu>
        <Button link="Entrar em contato" text="Entrar em Contato" />
      </C.NavBar>
    </C.Section>
  );
};
