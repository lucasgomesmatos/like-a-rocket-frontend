import styled from 'styled-components';

export const Section = styled.section`
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  padding: 1rem;
  z-index: 10;
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 85%;
  height: ${(props) => props.theme.navHeight};
  margin: 0 auto;

  color: ${(props) => props.theme.text};
`;

export const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
`;

export const MenuItem = styled.li`
  cursor: pointer;
  color: ${(props) => props.theme.text};

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    margin-top: 2px;
    background: ${(props) => props.theme.text};
    transition: width 0.6s ease;
  }

  &:hover::after {
    width: 100%;
    color: #fff;
  }
`;
