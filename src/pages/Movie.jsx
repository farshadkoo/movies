import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "../component/Layout/Container";
import useMovieDB from "../Hooks/useMovieDB";
import SEO from "../component/SEO/SEO";
import { Rate } from "antd";

export default function Movie() {
  const { id } = useParams();
  const { data = {}, loading } = useMovieDB(`movie/${id}`);

  // useEffect(() => {
  //   document.title = data?.title;
  // }, [data]);

  return (
    <Container>
      <SEO title={data?.title} />
      <h1>{data.title}</h1>
      <Rate allowHalf count={10} value={data.vote_average} />
    </Container>
  );
}
