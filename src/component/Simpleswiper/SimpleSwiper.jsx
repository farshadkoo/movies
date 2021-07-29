import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "../MovieCard/MovieCord";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";
import image from "../../helpers/image";
import slugify from "../../helpers/slugify";

// install Swiper modules
SwiperCore.use([Pagination]);

export default function SimpleSwiper({ slides }) {
  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      className="mySwiper"
      autoplay
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <MovieCard
            poster={image(slide.poster_path, "w342")}
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
