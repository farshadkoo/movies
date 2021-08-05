import React from "react";
import { useParams } from "react-router-dom";
import Container from "../component/Layout/Container";
import useMovieDB from "../Hooks/useMovieDB";

export default function Celebrity() {
  const { id } = useParams();
  const { data = {}, loading } = useMovieDB(`/person${id}`);
  return (
    <Container>
      <h1>{data.title}</h1>
    </Container>
  );
}
