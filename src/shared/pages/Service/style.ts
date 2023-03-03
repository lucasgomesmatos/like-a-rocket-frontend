import styled, { keyframes } from 'styled-components';

export const Section = styled.section`
  min-height: 50vh;
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  margin-bottom: 2rem;
  font-family: 'Monument Bold', sans-serif;
  text-transform: uppercase;
  font-size: 4rem;
  color: ${(props) => props.theme.text};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const move = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

interface IRowProps {
  direction: 'none' | 'reverse';
}

export const Row = styled.div`
  /* background: #fff; */
  white-space: nowrap;
  margin: 1rem 0;
  display: flex;

  animation: ${move} 20s linear infinite
    ${({ direction }: IRowProps) => direction};
`;

export const Item = styled.div`
  font-family: 'Monument Regular', sans-serif;
  text-transform: uppercase;
  font-size: 2rem;
  color: ${(props) => props.theme.text};
  display: flex;
  align-items: center;
  justify-content: center;
`;
