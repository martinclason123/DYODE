import { MobileTextBox } from "../../Snippets";
// import Swiper core and required modules
import { Pagination, A11y, Autoplay } from "swiper";
// Import Swiper React components

import { Swiper, SwiperSlide } from "swiper/react";
import { heroData } from "../../Data/Data";

// Import Swiper styles
import "swiper/css";
import "./Hero.scss";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Hero = () => {
  return (
    <div className="hero">
      <Swiper
        // install Swiper modules
        modules={[Pagination, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
      >
        {heroData.map((slide) => {
          return (
            <SwiperSlide>
              <img
                class="hero__slider-small"
                src={slide.mobileImage}
                alt="new arrivals"
              />
              <img
                class="hero__slider-img"
                src={slide.image}
                alt="new arrivals"
              />
              <div className="hero__text">
                <h1
                  className={
                    "hero__text-header" +
                    (slide.alternateColor ? " text__secondary" : "")
                  }
                >
                  {slide.title}
                </h1>
                <p
                  className={
                    "hero__text-blurb" +
                    (slide.alternateColor ? " text__secondary" : "")
                  }
                >
                  {slide.blurb}
                </p>
                <button className="hero__text-button">{slide.action}</button>
              </div>
              <MobileTextBox
                title={slide.title}
                blurb={slide.blurb}
                actionMessage={slide.action}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Hero;
