import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  height: calc(80vh - 60px);

  @media (max-width: 680px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  gap: 25px;
  transform: translateX(-50px);
  opacity: 0;
  animation: animaLeft 0.6s forwards;

  @keyframes animaLeft {
    to {
      opacity: 1;
      transform: initial;
    }
  }

  .intro-title {
    color: var(--button-bg);
    font-size: 2.5rem;
    line-height: 1;
  }

  .intro-description {
    color: var(--light-purple);
  }

  .button {
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: bold;
    font-size: 1rem;
    color: var(--button-bg);
    &:hover {
      color: var(--green);
    }
  }

  @media (max-width: 850px) {
    gap: 20px;
    .intro-title {
      font-size: 1.8rem;
    }
  }
`;
