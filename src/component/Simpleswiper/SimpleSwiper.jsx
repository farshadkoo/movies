import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "../MovieCard/MovieCord";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import SwiperCore, { Pagination, Autoplay } from "swiper/core";
import image from "../../helpers/image";
import slugify from "../../helpers/slugify";
// import { Autoplay } from "swiper/js/swiper.esm";

// install Swiper modules
SwiperCore.use([Pagination, Autoplay]);

export default function SimpleSwiper({ slides, onHOverSlide }) {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      className="mySwiper"
      pagination={{ dynamicBullets: true }}
      autoplay
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1000: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
      }}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id} onMouseEnter={() => onHOverSlide(slide)}>
          <MovieCard
            poster={image(slide.poster_path, "w780")}
            title={slide.title}
            rate={slide.vote_average}
            linkpath={`/movies/${slide.id}/${slugify(slide.title)}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

SimpleSwiper.propTypes = {
  slides: PropTypes.array.isRequired,
};
