import styled from 'styled-components';

interface UpProps {
  display: 'flex' | 'none';
}

export const Up = styled.div`
  display: ${({ display }: UpProps) => display};
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background: ${(props) => props.theme.white};

  border: 1px solid ${(props) => props.theme.white};
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  position: fixed;
  right: 1rem;
  bottom: 1rem;

  font-size: 2rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }

  &:active {
    transform: scale(0.9);
  }
`;
