import styled from 'styled-components';

interface HamburgerMenuProps {
  open: boolean;
}

export const Section = styled.header`
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
  height: 5rem;
  margin: 0 auto;

  color: ${(props) => props.theme.text};

  .mobile {
    display: none;
  }

  @media (max-width: 64em) {
    /* 1024px */
    .mobile {
      display: flex;
    }
    .desktop {
      display: none;
    }
  }
`;

export const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;

  @media (max-width: 64em) {
    /* 1024px */
    position: fixed;
    top: 5.5rem;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: calc(100vh - 5rem);
    z-index: 50;
    background: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(2px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: ${({ open }: HamburgerMenuProps) =>
      open ? 'translateY(0) ' : 'translateY(100%)'};
    transition: all 0.3s ease;

    width: 100%;
    padding-top: 2rem;
  }
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

export const HamburgerMenu = styled.span`
  width: ${({ open }: HamburgerMenuProps) => (open ? '2rem' : '1.5rem')};
  height: 2px;
  background: ${(props) => props.theme.text};
  /* position: absolute; */
  /* top: 3.3rem; */
  /* left: 50%; */
  transform: ${({ open }: HamburgerMenuProps) =>
    open ? 'translateX(-50%) rotate(90deg)' : 'translateX(-50%) rotate(0)'};

  display: none;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 64em) {
    /* 1024px */
    display: flex;
  }

  &::after,
  &::before {
    content: '';
    width: ${({ open }: HamburgerMenuProps) => (open ? '1rem' : '1.5rem')};
    height: 2px;
    right: ${({ open }: HamburgerMenuProps) => (open ? '-2px' : '0')};
    background: ${(props) => props.theme.text};
    position: absolute;
    transition: all 0.3s ease;
  }

  &::after {
    top: ${({ open }: HamburgerMenuProps) => (open ? '0.3rem' : '0.5rem')};
    transform: ${({ open }: HamburgerMenuProps) =>
      open ? 'rotate(-40deg)' : 'rotate(0)'};
  }
  &::before {
    bottom: ${({ open }: HamburgerMenuProps) => (open ? '0.3rem' : '0.5rem')};
    transform: ${({ open }: HamburgerMenuProps) =>
      open ? 'rotate(40deg)' : 'rotate(0)'};
  }
`;
