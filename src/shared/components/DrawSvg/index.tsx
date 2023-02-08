import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';
import { Vetor } from '../../icons';
import * as C from './style';

export const DrawSvg = () => {
  const ref = useRef(null);
  const ballRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    let element = ref.current;
    let svg = document.querySelector('.svg-path') as SVGGeometryElement;
    let ball = document.querySelector('.ball') as HTMLElement;
    let length = svg.getTotalLength();

    // start positioning of svg drawing

    svg.style.strokeDasharray = length.toString();
    svg.style.strokeDashoffset = length.toString();

    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: 'top center',
        end: 'bottom bottom',
        onUpdate: (self) => {
          const draw = length * self.progress;
          const offset = length - draw;

          svg.style.strokeDashoffset = offset.toString();
        },
        onToggle: (self) => {
          if (self.isActive) {
            ball.style.display = 'none';
          } else {
            ball.style.display = 'block';
          }
        },
      },
    });
    return () => {
      if (t1) t1.kill();
    };
  }, []);

  return (
    <>
      <C.Ball className="ball" ref={ballRef} />
      <C.Container ref={ref}>
        <Vetor />
      </C.Container>
    </>
  );
};
