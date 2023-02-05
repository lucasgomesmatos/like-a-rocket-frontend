import { Button } from '../../components/Button';
import * as C from './style';

export const Main = () => {
  return (
    <C.Section>
      <C.Container>
        <C.Box></C.Box>
        <C.Box>
          <C.SubTitle>
            Se o seu negócio ainda não tem uma presença digital, ele está
            dividido entre dois destinos: ser apagado aos poucos ou começar a
            escalar o faturamento de forma digital.
          </C.SubTitle>
          <C.SubTitle>
            E se você, assim como nós, também opta pela segunda opção, te
            garanto que nós somos a melhor solução para que isso aconteça.
          </C.SubTitle>
          <C.SubTitle>
            Faremos seu site com as melhores ferramentas e com velocidade
            Desenvolvemos todo o site pensando na necessidade do seu projeto,
            seja ele uma prestação de serviço, um e-commerce ou algum tipo de
            atendimento personalizado.
          </C.SubTitle>
          <C.Contact>
            <Button text="Entrar em Contato" link="Saiba mais" />
          </C.Contact>
        </C.Box>
      </C.Container>
    </C.Section>
  );
};
