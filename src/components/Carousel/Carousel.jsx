import "./Carousel.scss";
import { carouselData } from "../../Data/Data";

// import Swiper core and required modules
import { Navigation, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="swiper__carousel-container">
        <h1 className="carousel__title">Shop New Arrivals</h1>
        <h1 className="carousel__title-full">New Arrivals</h1>
        <Swiper
          // install Swiper modules
          loop={true}
          breakpoints={{
            270: {
              slidesPerView: 2,
            },
            // when window width is >= 270px
            600: {
              slidesPerView: 4,
            },
            // when window width is >= 600px
          }}
          modules={[Navigation, A11y]}
          navigation
          scrollbar={{ draggable: true }}
        >
          {carouselData.map((slide, index) => {
            return (
              <SwiperSlide key={index}>
                <a href={`#/${slide.url}`} alt={slide.title}>
                  <img
                    className="carousel__slide-img"
                    src={slide.image}
                    alt={slide.title}
                  />
                  <h1 className="carousel__slide-title">{slide.title}</h1>
                  <p className="carousel__slide-blurb">{slide.description}</p>
                  <p className="carousel__slide-price">{slide.price}</p>
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
