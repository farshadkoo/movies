import React from "react";
import { Row, Col, Card, Pagination, Spin } from "antd";
import useMovieDB from "../Hooks/useMovieDB";
import Container from "../component/Layout/Container";

const { Meta } = Card;

export default function Home() {
  const { data: popularMovieData = {}, loading } = useMovieDB("movie/popular");
  //loading uk max mendaze ro load shodan

  // const [loading, setLoading] = useState(false);
  const { results = [], page, total_pages, total_resultes } = popularMovieData;

  return (
    <Container>
      {/* spin component loding ast ke uk sppining megire */}
      <Spin spinning={loading}>
        <Row gutter={[16, 16]}>
          {results?.map((movie) => (
            <Col key={movie.id} xs={24} sm={12} md={8} lg={6} xl={6}>
              <Card
                hoverable
                cover={
                  <img
                    alt={movie.original_title}
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  />
                }
              >
                <Meta
                  title={movie.original_title}
                  description={`${movie.overview.substr(0, 25)} ...`}
                />
              </Card>
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
          />
        </Col>
      </Row>
    </Container>
  );
}
