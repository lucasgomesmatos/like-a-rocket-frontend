import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: 25rem;
  position: relative;

  border-top: 2px solid ${(props) => props.theme.body};
  border-bottom: 2px solid ${(props) => props.theme.body};

  background: url('../../../../public/images/footer.jpg') no-repeat center;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
`;
