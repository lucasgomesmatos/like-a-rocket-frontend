import { DrawSvg } from '../../components/DrawSvg';
import { ItemAbout } from '../../components/ItemAbout';
import * as C from './style';

export const About = () => {
  return (
    <C.Section>
      <C.Title>Like a Rocket</C.Title>
      <C.Container>
        <C.SvgContainer>
          <DrawSvg />
        </C.SvgContainer>
        <C.Items>
          <C.Item />
          <ItemAbout
            title="Desde 2021 desbravando o Mercado digital"
            subTitle="A Like a Rocket nasceu com a ideia de  mudar o mundo para melhor usando a tecnologia como principal ferramenta, desbravando o novo e o desconhecido sem considerar limites."
          />
          <ItemAbout
            title="O nosso objetivo"
            subTitle="É impactar positivamente a vida das pessoas trazendo melhorias e soluções de problemas com formas inovadoras de executar processos entendendo o que é preciso para uma evolução diária na forma como vivemos e a partir disso ser protagonista das melhores respostas para alcançar este objetivo."
          />
          <ItemAbout
            title="A nossa missão"
            subTitle="Seu desafio agora não é mais ser digital, mas sim ser eficiente em um mercado tão competitivo."
          />
          <ItemAbout
            title="Os nossos valores"
            subTitle="Seu desafio agora não é mais ser digital, mas sim ser eficiente em um mercado tão competitivo."
          />
        </C.Items>
      </C.Container>
    </C.Section>
  );
};
