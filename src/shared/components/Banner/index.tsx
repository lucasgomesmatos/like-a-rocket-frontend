import { Button } from '../Button';
import * as C from './style';

export const Banner = () => {
  return (
    <C.Section>
      <C.Box>
        <C.Title>
          Junte-se a <br />
          Like a Rocket !
        </C.Title>
        <Button link="" text="Entrar em Contato" />
      </C.Box>
    </C.Section>
  );
};
