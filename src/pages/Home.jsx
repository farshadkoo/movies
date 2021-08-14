import React, { useEffect } from "react";
import { Row, Col, Pagination, Spin } from "antd";
import useMovieDB from "../hooks/useMovieDB";
import Container from "../component/Layout/Container";
import MovieCard from "../component/MovieCard/MovieCord";
import image from "../helpers/image";
import slugify from "../helpers/slugify";
import SEO from "../component/SEO/SEO";

export default function Home() {
  const {
    data: latestMoviesData = {},
    reFetch,
    loading,
  } = useMovieDB("movie/popular");

  const { results = [], page, total_pages, totalResults } = latestMoviesData;

  function handleChangePage(page) {
    reFetch({ page });
  }

  return (
    <Container>
      <SEO title="Home" />
      <Spin spinning={loading}>
        <Row gutter={[16, 16]}>
          {results?.map((movie) => (
            <Col key={movie.id} xs={24} sm={12} md={8} lg={6}>
              <MovieCard
                poster={image(movie.poster_path, "w780")}
                title={movie.title}
                rate={movie.vote_average}
                linkPath={`/movies/${movie.id}/${slugify(movie.title)}`}
              />
            </Col>
          ))}
        </Row>
      </Spin>
      <Row style={{ marginTop: 32 }} justify="center">
        <Col>
          <Pagination
            current={latestMoviesData.page}
            defaultCurrent={1}
            total={latestMoviesData.total_results}
            defaultPageSize={20}
            showSizeChanger={false}
            onChange={handleChangePage}
          />
        </Col>
      </Row>
    </Container>
  );
}
