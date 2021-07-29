import React from "react";
import useMovieDB from "../../Hooks/useMovieDB";
import SimpleSwiper from "../Simpleswiper/SimpleSwiper";

export default function PopularMoviesSwiper() {
  const { data = { results: [] } } = useMovieDB("movie/upcoming");

  return <SimpleSwiper slides={data.results} />;
}
