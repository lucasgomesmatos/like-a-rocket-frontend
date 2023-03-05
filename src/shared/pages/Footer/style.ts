import styled from 'styled-components';

export const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */

  background: ${(props) => props.theme.text};
`;

export const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.body};

  @media (max-width: 60em) {
    flex-direction: column-reverse;
    gap: 2rem;
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`;

export const IconsList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;

  & > * {
    transform: all 0.2s ease;

    &:hover {
      transform: scale(1.2);
    }
  }
`;
export const MenuItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 1rem;
  list-style: none;

  @media (max-width: 60em) {
    align-items: center;
    justify-content: center;
  }
`;

export const MenuItem = styled.li`
  cursor: pointer;
  color: ${(props) => props.theme.body};

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    margin-top: 2px;
    background: ${(props) => props.theme.body};
    transition: width 0.6s ease;
  }

  &:hover::after {
    width: 100%;
    color: #fff;
  }
`;

export const Copy = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 60em) {
    font-size: 1rem;
    text-align: center;
  }
`;
