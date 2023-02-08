import styled from 'styled-components';

export const Container = styled.div`
  width: 25vw;
  height: 70vh;
  object-fit: cover;

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
