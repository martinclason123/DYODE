import "./Carousel.scss";
import images from "../../constants/images";

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
          <SwiperSlide>
            <a href="#/" alt="new products">
              <img
                className="carousel__slide-img"
                src={images.Carousel1}
                alt="new products"
              />
              <h1 className="carousel__slide-title">Product Title</h1>
              <p className="carousel__slide-blurb">women's t-shirt</p>
              <p className="carousel__slide-price">$19.99</p>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#/" alt="new products">
              <img
                className="carousel__slide-img"
                src={images.Carousel1}
                alt="new products"
              />
              <h1 className="carousel__slide-title">Product Title</h1>
              <p className="carousel__slide-blurb">women's t-shirt</p>
              <p className="carousel__slide-price">$19.99</p>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#/" alt="new products">
              <img
                className="carousel__slide-img"
                src={images.Carousel1}
                alt="new products"
              />
              <h1 className="carousel__slide-title">Product Title</h1>
              <p className="carousel__slide-blurb">women's t-shirt</p>
              <p className="carousel__slide-price">$19.99</p>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#/" alt="new products">
              <img
                className="carousel__slide-img"
                src={images.Carousel1}
                alt="new products"
              />
              <h1 className="carousel__slide-title">Product Title</h1>
              <p className="carousel__slide-blurb">women's t-shirt</p>
              <p className="carousel__slide-price">$19.99</p>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
