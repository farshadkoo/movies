import React from "react";
import PropTypes from "prop-types";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Autoplay } from "swiper/core";
import MovieCard from "../MovieCard/MovieCord";
import image from "../../helpers/image";
import slugify from "../../helpers/slugify";

// install Swiper modules
SwiperCore.use([Pagination, Autoplay]);

export default function SimpleSwiper({ slides, onHoverSlide }) {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      className="mySwiper"
      autoplay={{
        delay: 2000,
      }}
      loop
      pagination={{ dynamicBullets: true }}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1000: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      }}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id} onMouseEnter={() => onHoverSlide(slide)}>
          <MovieCard
            poster={image(slide.poster_path, "w780")}
            title={slide.title}
            rate={slide.vote_average}
            linkPath={`/movies/${slide.id}/${slugify(slide.title)}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

SimpleSwiper.propTypes = {
  slides: PropTypes.array.isRequired,
};
