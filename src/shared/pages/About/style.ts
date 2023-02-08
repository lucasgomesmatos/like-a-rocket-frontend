import styled from 'styled-components';

export const Section = styled.section`
  min-height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  display: flex;
  justify-content: center;
  align-items: center;
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

interface IBoxProps {
  direction?: 'baseline' | 'flex-end' | 'center';
}

export const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${({ direction }: IBoxProps) => direction};
`;
