import { Swiper, SwiperSlide } from 'swiper/react';
import * as C from './style';

import img1 from '../../../../public/images/1.jpg';
import img2 from '../../../../public/images/2.jpg';
import img3 from '../../../../public/images/3.jpg';
import img4 from '../../../../public/images/4.jpg';

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';

import { Autoplay, EffectCards, Pagination } from 'swiper';

export const Carousel = () => {
  return (
    <C.Container>
      {' '}
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
        </SwiperSlide>
      </Swiper>
    </C.Container>
  );
};
