import React, { useEffect } from "react";
import { Layout } from "antd";
import Pages from "../../pages/Pages";
import HeroHeader from "../HeroHeader/HeroHeadeer";
import { Switch, useLocation } from "react-router-dom";
import PopularMoviesSwiper from "../PopularMoviesSwiper/PopularMoviesSwiper";

const { Content, Footer } = Layout;

export default function SiteLayout() {
  const location = useLocation();

  function heroHeaderChildren() {
    switch (location.pathname) {
      case "/":
        return <PopularMoviesSwiper />;
      case "/about":
        return <div>About</div>;
      default:
        return null;
    }
  }

  return (
    <Layout>
      <HeroHeader>{heroHeaderChildren()}</HeroHeader>
      <Content>
        <Pages />
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}
