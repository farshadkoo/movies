import React from "react";
import { useParams } from "react-router-dom";
import Container from "../component/Layout/Container";
import useMovieDB from "../Hooks/useMovieDB";

export default function TvShow() {
  const { id } = useParams();
  const { data = {}, loading } = useMovieDB(`tv/${id}`);
  return (
    <Container>
      <h1>{data.name}</h1>
    </Container>
  );
}
