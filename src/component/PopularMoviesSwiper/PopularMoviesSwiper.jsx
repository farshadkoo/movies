import React, { useContext } from "react";
import { HeroHeaderContext } from "../../context/HeroHeaderContext";
import image from "../../helpers/image";
import useMovieDB from "../../Hooks/useMovieDB";
import SimpleSwiper from "../Simpleswiper/SimpleSwiper";

export default function PopularMoviesSwiper() {
  const { data = { results: [] } } = useMovieDB("movie/popular");
  const [, setBg] = useContext(HeroHeaderContext);

  function changeHeaderBackground(slide) {
    setBg(image(slide.poster_path, "w780"));
  }

  return (
    <SimpleSwiper slides={data.results} onHoverSlide={changeHeaderBackground} />
  );
}
