import styled from 'styled-components';

export const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
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
`;

export const Container = styled.div`
  width: 85%;
  min-height: 100vh;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  position: relative;
`;

export const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Items = styled.ul`
  position: absolute;
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background: lightblue; */

  & > *:nth-of-type(2n + 1) {
    justify-content: start;
  }
  & > *:nth-of-type(2n) {
    justify-content: end;
  }
`;

export const Item = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
  color: ${(props) => props.theme.body};
`;
