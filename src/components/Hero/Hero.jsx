// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// Import Swiper React components

import { Swiper, SwiperSlide } from "swiper/react";

import images from "../../constants/images";

// Import Swiper styles
import "swiper/css";
import "./Hero.scss";
import "swiper/css/pagination";

const Hero = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Pagination, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img
          class="hero__slider-small"
          src={images.Hero1Mobile}
          alt="new arrivals"
        />
        <img class="hero__slider-img" src={images.Hero1} alt="new arrivals" />
      </SwiperSlide>
      <SwiperSlide>
        <img class="hero__slider-img" src={images.Hero2} alt="favorites" />
      </SwiperSlide>
      <SwiperSlide>
        <img class="hero__slider-img" src={images.Hero3} alt="mens" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
