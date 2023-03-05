import styled from 'styled-components';

export const Section = styled.section`
  background-color: ${(props) => props.theme.body};
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: ${(props) => props.theme.text};
`;

export const Container = styled.div`
  width: 85%;
  margin: auto;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 74em) {
    width: 100%;
    flex-direction: column;
    padding: 1rem;
  }
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
  align-items: ${({ direction = 'center' }: IBoxProps) => direction};

  @media (max-width: 74em) {
    width: 80%;
    align-items: center;
  }
  @media (max-width: 40em) {
    min-height: 50vh;
  }
`;

export const SubTitle = styled.p`
  margin: 1rem 0;
  font-size: 1.2rem;
  color: ${(props) => props.theme.text};
  font-weight: 500;
  letter-spacing: 1px;

  @media (max-width: 74em) {
    font-size: 1rem;
  }
`;

export const Contact = styled.div`
  width: 100%;
  margin-top: 2rem;
`;
