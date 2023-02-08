import styled from 'styled-components';

export const Item = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
`;
export const ItemContainer = styled.div`
  width: 40%;
  height: fit-content;
  padding: 1rem;
  border: 3px solid ${(props) => props.theme.text};
`;

export const Box = styled.div`
  height: fit-content;
  /* background: ${(props) => props.theme.text}; */
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
`;
export const SubTitle = styled.p`
  display: block;
  font-size: 1.2rem;
  letter-spacing: 1px;
  font-weight: 400;
  color: ${(props) => props.theme.white};
`;
