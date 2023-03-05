import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
0% {
  transform: rotate(1turn);
}
`;

export const Section = styled.div`
  position: relative;
  border: 1px solid ${(props) => props.theme.text};
  border-radius: 50%;
  padding: 1rem;

  img {
    width: 28rem;
    height: 28rem;
    animation: ${rotate} 30s infinite linear reverse;
  }

  @media (max-width: 74em) {
    img {
      width: 24rem;
      height: 24rem;
    }
  }

  @media (max-width: 64em) {
    img {
      width: 20rem;
      height: 20rem;
    }
  }

  @media (max-width: 60em) {
    img {
      width: 14rem;
      height: 14rem;
    }
  }

  @media (max-width: 40em) {
    img {
      width: 10rem;
      height: 10rem;
    }
  }
`;

export const Circle = styled.div`
  font-size: 10rem;
  width: 10rem;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 74em) {
    font-size: 8rem;
  }

  @media (max-width: 64em) {
    font-size: 6rem;
  }

  @media (max-width: 60em) {
    font-size: 4rem;
  }
`;
