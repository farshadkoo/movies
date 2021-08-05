import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "../component/Layout/Container";
import useMovieDB from "../Hooks/useMovieDB";

export default function Movie() {
  const { id } = useParams();
  const { data = {}, loading } = useMovieDB(`/movie${id}`);

  useEffect(() => {
    document.title = data?.title;
  }, [data]);

  return (
    <Container>
      <h1>{data.title}</h1>
    </Container>
  );
}
