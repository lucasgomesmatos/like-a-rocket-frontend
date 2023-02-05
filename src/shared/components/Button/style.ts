import styled from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  background: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  outline: none;
  border: none;

  font-size: ${(props) => props.theme.sm};
  padding: 0.9rem 2.3rem;
  border-radius: 3.125rem;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.6s ease;
  position: relative;

  &:hover {
    transform: scale(0.9);
    background: #fff;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid ${(props) => props.theme.text};
    width: 100%;
    height: 120%;
    border-radius: 3.125rem;
    transition: all 0.2s ease;
  }

  &:hover::after {
    transform: translate(-50%, -50%) scale(1.1);
    padding: 0.3rem;
  }
`;
