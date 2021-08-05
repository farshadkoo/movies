import React, { useEffect } from "react";
import { Row, Col, Card, Pagination, Spin } from "antd";
import useMovieDB from "../Hooks/useMovieDB";
import Container from "../component/Layout/Container";
import MovieCard from "../component/MovieCard/MovieCord";
import image from "../helpers/image";
import slugify from "../helpers/slugify";
import SEO from "../component/SEO/SEO";
const { Meta } = Card;

export default function Home() {
  const {
    data: popularMovieData = {},
    reFetch,
    loading,
  } = useMovieDB("movie/popular");
  //loading uk max mendaze ro load shodan
  // const [loading, setLoading] = useState(false);
  const { results = [], page, total_pages, total_resultes } = popularMovieData;

  function handelChangePage(page) {
    reFetch({ page });
  }

  useEffect(() => {
    document.title = "Watch Movies | Home";
  }, []);

  return (
    <Container>
      <SEO title="Home" />
      {/* spin component loding ast ke uk sppining megire */}
      <Spin spinning={loading}>
        <Row gutter={[16, 16]}>
          {results?.map((movie) => (
            <Col key={movie.id} xs={24} sm={12} md={8} lg={6} xl={6}>
              <MovieCard
                poster={image(movie.poster_path, "w780")}
                title={movie.title}
                rate={movie.vote_average}
                linkpath={`/movies/${movie.id}/${slugify(movie.title)}`}
              />
            </Col>
          ))}
        </Row>
      </Spin>
      <Row style={{ marginTop: 32 }} justify="center">
        <Col>
          <Pagination
            current={popularMovieData.page}
            defaultCurrent={1}
            total={popularMovieData.total_results}
            defaultPageSize={20}
            showSizeChanger={false}
            onChange={handelChangePage}
          />
        </Col>
      </Row>
    </Container>
  );
}
