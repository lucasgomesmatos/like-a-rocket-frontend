import styled from 'styled-components';

export const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  position: relative;
  display: flex;
  /* flex-direction: column;
  justify-content: center;
  align-items: center; */

  background: ${(props) => props.theme.text};
`;
