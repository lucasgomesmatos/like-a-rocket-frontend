import styled from 'styled-components';

export const Item = styled.li`
  width: 100%;
  height: 100%;
  display: flex;

  @media (max-width: 64em) {
    justify-content: flex-end !important;
  }
`;
export const ItemContainer = styled.div`
  width: 40%;
  height: fit-content;
  padding: 1rem;
  border: 3px solid ${(props) => props.theme.text};

  @media (max-width: 64em) {
    width: 80%;
  }
`;

export const Box = styled.div`
  height: fit-content;
  color: ${(props) => props.theme.text};

  padding: 1rem;
  position: relative;
  border: 1px solid ${(props) => props.theme.text};
`;

export const Title = styled.span`
  display: block;
  font-size: 1.3rem;
  letter-spacing: 2px;
  font-weight: 400;
  text-transform: uppercase;
  font-family: 'Monument Regular';
  margin: 0.5rem 0;

  @media (max-width: 64em) {
    font-size: 1rem;
  }
`;
export const SubTitle = styled.p`
  display: block;
  font-size: 1.2rem;
  letter-spacing: 1px;
  font-weight: 400;
  color: ${(props) => props.theme.white};

  @media (max-width: 64em) {
    font-size: 0.9rem;
  }
`;
