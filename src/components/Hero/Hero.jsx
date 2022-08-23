import { MobileTextBox } from "../../Snippets";
// import Swiper core and required modules
import { Pagination, A11y, Autoplay } from "swiper";
// Import Swiper React components

import { Swiper, SwiperSlide } from "swiper/react";

import images from "../../constants/images";

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
        <SwiperSlide>
          <img
            class="hero__slider-small"
            src={images.Hero1Mobile}
            alt="new arrivals"
          />
          <img class="hero__slider-img" src={images.Hero1} alt="new arrivals" />
          <div className="hero__text">
            <h1 className="hero__text-header">Shop New Arrivals</h1>
            <p className="hero__text-blurb">
              Our coolest new items are waiting for you!
            </p>
            <button className="hero__text-button">shop now</button>
          </div>
          <MobileTextBox
            title={"Shop New Arrivals"}
            blurb={"Our coolest new items are waiting for you!"}
            actionMessage={"shop now"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            class="hero__slider-small"
            src={images.Hero2Mobile}
            alt="new arrivals"
          />
          <img class="hero__slider-img" src={images.Hero2} alt="favorites" />
          <div className="hero__text">
            <h1 className="hero__text-header text__secondary">Our Fave Tees</h1>
            <p className="hero__text-blurb text__secondary">
              Shop all of our favorites
            </p>
            <button className="hero__text-button">shop now</button>
          </div>
          <div className="hero__mobile-text">
            <h1 className="hero__mobile-header">Our Fave Tees</h1>
            <p className="hero__mobile-blurb">Shop all of our favorites.</p>
            <button className="hero__mobile-button">shop now</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            class="hero__slider-small"
            src={images.Hero3Mobile}
            alt="new arrivals"
          />
          <img class="hero__slider-img" src={images.Hero3} alt="mens" />
          <div className="hero__text">
            <h1 className="hero__text-header text__secondary">Men's Tees</h1>
            <p className="hero__text-blurb text__secondary">
              Find the perfect shirt
            </p>
            <button className="hero__text-button">shop now</button>
          </div>
          <div className="hero__mobile-text">
            <h1 className="hero__mobile-header">Men's Tees</h1>
            <p className="hero__mobile-blurb">Find the perfect shirt.</p>
            <button className="hero__mobile-button">shop now</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
