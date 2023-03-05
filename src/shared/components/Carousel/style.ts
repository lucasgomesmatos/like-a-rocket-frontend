import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 2rem;
  width: 25vw;
  height: 70vh;
  object-fit: cover;

  @media (max-width: 74em) {
    width: 35vw;
    height: fit-content;
  }

  @media (max-width: 64em) {
    width: 45vw;
  }

  img {
    display: block;
    max-width: 100%;
  }

  .swiper {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 18px;
    font-size: 22px;
    font-weight: bold;
    color: #fff;
  }
`;
