import Typewriter from 'typewriter-effect';
import { Button } from '../Button';
import * as C from './style';

export const TypeWriterText = () => {
  return (
    <>
      <C.Title>Uma </C.Title>
      <C.Title>solução prática</C.Title>
      <C.Title>e digital para</C.Title>
      <C.Title>
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString('<span>para você !</span>')
              .pauseFor(2000)
              .deleteAll()
              .typeString('<span>sua empresa !</span>')
              .pauseFor(2000)
              .deleteAll()
              .start();
          }}
        />
      </C.Title>
      <C.SubTitle>O seu negócio merece um projeto</C.SubTitle>
      <Button text="Saiba mais" link="#saiba-mais" />
    </>
  );
};
