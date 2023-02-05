import styled from 'styled-components';

export const Section = styled.section`
  background-color: ${(props) => props.theme.body};
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: ${(props) => props.theme.text};
`;

export const Container = styled.div`
  position: absolute;
  width: 85%;
  min-height: 80vh;
  margin: auto;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SubTitle = styled.h3`
  margin: 1rem 0;
  font-size: 1.2rem;
  color: ${(props) => `rgba(${props.theme.textRba}, .6)`};
  font-weight: 600;
  letter-spacing: 1px;
`;

export const Contact = styled.div`
  width: 100%;
  margin-top: 2rem;
`;
