import React from "react";
import Search from "../Search/Search";
import Container from "../Layout/Container";
import classes from "./HeroHeader.module.scss";

export default function HeroHeader({ children }) {
  return (
    <header className={classes.root}>
      <nav>
        <Container>wwwwww </Container>
      </nav>
      <Container>
        <Search />
      </Container>
      {children && (
        <div style={{ margin: "48px auto" }}>
          <Container>{children}</Container>
        </div>
      )}
    </header>
  );
}
