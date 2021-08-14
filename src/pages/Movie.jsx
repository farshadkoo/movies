import { message, Rate } from "antd";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import Container from "../component/Layout/Container";
import SEO from "../component/SEO/SEO";
import useMovieDB from "../hooks/useMovieDB";
import movieService from "../service/MovieService";

export default function Movie() {
  const { id } = useParams();
  const { data = {}, loading, reFetch } = useMovieDB(`movie/${id}`);

  function handleRateMovie(rate) {
    movieService.rate(data.id, rate);

    message.success(`Rate ${rate} is submitted.`);
  }

  // useEffect(() => {
  //   reFetch();
  // }, [id]);

  return (
    <Container>
      <SEO title={data?.title} poster_path={data?.poster_path} />
      <h1>{data.title}</h1>
      <h1>{data.poster_path}</h1>

      <Rate
        allowHalf
        count={10}
        value={data.vote_average}
        onChange={handleRateMovie}
      />
    </Container>
  );
}
