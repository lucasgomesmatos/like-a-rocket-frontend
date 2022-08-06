import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  height: 60px;

  @media (min-width: 700px) {
    .close-menu,
    .menu-overlay,
    .menu-logo,
    .menu {
      display: none;
    }
  }
`;

export const NavBar = styled.nav`
  display: ${(pros) => (pros.active ? 'flex' : 'none')};
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  background: var(--purple-bg);
  width: 60%;
  height: 100vh;
  padding-top: 40px;
  z-index: 100;
  transform: translateX(50px);
  opacity: 0.8;
  animation: animaLeft 0.6s forwards;

  @keyframes animaLeft {
    to {
      opacity: 1;
      transform: initial;
    }
  }

  .close-menu {
    position: absolute;
    top: 20px;
    right: 40px;
    cursor: pointer;
    z-index: 100;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  a {
    color: #fff;
    font-weight: 400;
    display: flex;
    align-items: center;
    &:hover {
      color: var(--green);
    }
  }

  .active::before {
    content: '';
    display: inline-block;
    width: 2px;
    height: 17px;
    margin-right: 5px;
    background: var(--green);
  }

  @media (min-width: 700px) {
    display: flex;
    height: 60px;
    width: auto;
    position: static;
    background: transparent;

    ul {
      display: flex;
      flex-direction: row;
    }
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 40%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
`;
