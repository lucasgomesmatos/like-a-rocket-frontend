import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
100% {
  transform: rotate(1turn);
}
`;

export const Section = styled.div`
  position: relative;
  border: 1px solid ${(props) => props.theme.text};
  border-radius: 50%;
  padding: 1rem;

  img {
    width: 22rem;
    height: 22rem;
    animation: ${rotate} 30s infinite linear reverse;
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
`;
