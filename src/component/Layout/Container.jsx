import React from "react";
import { Col, Row } from "antd";

export default function Container({ children }) {
  return (
    <Row justify="center">
      <Col xs={24} sm={22} md={22} lg={20} xl={19}>
        {children}
      </Col>
    </Row>
  );
}
