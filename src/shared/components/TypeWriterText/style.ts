import styled from 'styled-components';

export const Title = styled.h1`
  font-family: 'Monument Bold', sans-serif;
  text-transform: uppercase;
  font-size: 4rem;

  @media (max-width: 74em) {
    font-size: 3rem;
  }

  @media (max-width: 64em) {
    font-size: 2rem;
  }

  @media (max-width: 60em) {
    align-self: center;
    text-align: center;
  }

  @media (max-width: 40em) {
    font-size: 1.2rem;
  }
`;

export const SubTitle = styled.h3`
  margin: 2rem 0;
  font-size: 1.2rem;
  color: ${(props) => `rgba(${props.theme.textRba}, .6)`};
  font-weight: 600;
  letter-spacing: 1px;

  @media (max-width: 60em) {
    text-align: center;
    font-size: 1rem;
  }

  @media (max-width: 40em) {
    font-size: 0.875rem;
  }
`;
