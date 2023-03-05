import { useRef } from 'react';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { useWindowScroll } from 'react-use';
import * as C from './style';

export const ScrollToTop = () => {
  const ref = useRef(null);
  const { y } = useWindowScroll();

  const scrollTo = () => {
    let element = document.getElementById('home');

    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  };

  return (
    <>
      <C.Up display={y > 250 ? 'flex' : 'none'} onClick={scrollTo} ref={ref}>
        <BsFillArrowUpCircleFill width={32} />
      </C.Up>
    </>
  );
};
