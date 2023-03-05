import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  position: relative;
  top: 0.5rem;
  left: 50%;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  transform: translateX(50%);

  @media (max-width: 64em) {
    transform: translateX(-650%);
  }

  @media (max-width: 60em) {
    transform: translateX(-550%);
  }
  @media (max-width: 40em) {
    transform: translateX(-450%);
  }
  @media (max-width: 30em) {
    transform: translateX(-350%);
  }
  @media (max-width: 25em) {
    transform: translateX(-250%);
  }

  overflow: hidden;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const Bounce = keyframes`
  from { transform: translate(-50%) scale(0.5)}
  to { transform: translate(-50%) scale(1)}
`;

export const Ball = styled.div`
  position: absolute;
  top: -1rem;
  left: 50%;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background: ${(props) => props.theme.text};
  animation: ${Bounce} 0.5s linear infinite alternate;
`;
