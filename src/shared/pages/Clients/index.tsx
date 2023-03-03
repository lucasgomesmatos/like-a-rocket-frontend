import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';
import ci from '../../../../public/clientes/ciencia-interativa.svg';
import ptf from '../../../../public/clientes/professor-criativo.svg';
import rm from '../../../../public/clientes/rm-festas.svg';
import * as C from './style';

export const Clients = () => {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    let element = ref.current;

    ScrollTrigger.create({
      trigger: element,
      start: 'top top',
      end: 'bottom top',
      pin: true,
      pinSpacing: false,
      scrub: true,
      // markers: true,
    });

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <C.Section ref={ref}>
      <C.Title>Clientes</C.Title>
      <C.Box>
        <img src={ci} alt="ciência interativa" />
        <img src={ptf} alt="professor criativo" />
        <img src={rm} alt="rm festas" />
      </C.Box>
    </C.Section>
  );
};
