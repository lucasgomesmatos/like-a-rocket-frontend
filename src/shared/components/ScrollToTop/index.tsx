import { useLayoutEffect, useRef, useState } from 'react';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { useWindowScroll } from 'react-use';
import * as C from './style';

export const ScrollToTop = () => {
  const [scrollToUp, setScrollToUp] = useState(false);

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

  useLayoutEffect(() => {
    if (y > 250) {
      setScrollToUp((state) => (state = true));
    } else {
      setScrollToUp((state) => (state = false));
    }
  }, [y]);

  return (
    <>
      <C.Up display={scrollToUp ? 'flex' : 'none'} onClick={scrollTo} ref={ref}>
        <BsFillArrowUpCircleFill width={32} />
      </C.Up>
    </>
  );
};
