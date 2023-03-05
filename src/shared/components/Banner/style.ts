import styled from 'styled-components';

export const Section = styled.div`
  width: 100%;
  height: 25rem;
  position: relative;

  border-top: 2px solid ${(props) => props.theme.body};
  border-bottom: 2px solid ${(props) => props.theme.body};

  /* background: url('/public/images/footer.jpg') no-repeat; */
  background: ${(props) => props.theme.body};
  background-position: center;
  background-size: cover;

  color: ${(props) => props.theme.white};
  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
`;
export const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 60em) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const Title = styled.span`
  max-width: 25%;
  text-align: center;
  display: block;
  font-size: 1.5rem;
  letter-spacing: 2px;
  font-weight: 400;
  text-transform: uppercase;
  font-family: 'Monument Bold';
  margin: 0.5rem 0;
  color: ${(props) => props.theme.text};

  @media (max-width: 60em) {
    font-size: 1rem;
    max-width: 65%;
  }
`;
