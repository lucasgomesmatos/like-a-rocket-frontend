import styled from 'styled-components';

export const Title = styled.h1`
  font-family: 'Monument Bold', sans-serif;
  text-transform: uppercase;
  font-size: 4rem;
`;

export const SubTitle = styled.h3`
  margin: 2rem 0;
  font-size: 1.2rem;
  color: ${(props) => `rgba(${props.theme.textRba}, .6)`};
  font-weight: 600;
  letter-spacing: 1px;
`;
