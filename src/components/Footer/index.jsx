import * as C from './style.js';

export const Footer = () => {
  return (
    <C.Container>
      <p>
        Todos os direitos reservados a Like a Rocket &copy;{' '}
        {new Date().getFullYear()}
      </p>
    </C.Container>
  );
};
