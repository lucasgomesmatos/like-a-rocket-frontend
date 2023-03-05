import styled from 'styled-components';

export const Section = styled.section`
  min-height: 50vh;
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.text};
`;

export const Title = styled.h1`
  font-family: 'Monument Bold', sans-serif;
  text-transform: uppercase;
  font-size: 4rem;
  color: ${(props) => props.theme.text};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  @media (max-width: 74em) {
    font-size: 3rem;
  }

  @media (max-width: 64em) {
    font-size: 2rem;
  }
`;

export const Box = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 3rem;
  justify-content: center;
  align-items: center;

  img {
    width: 20%;
  }
`;
