import React from "react";
import PropTypes from "prop-types";
import classes from "./MovieCard.module.scss";
import { Link } from "react-router-dom";

function MovieCord({ poster, title, rate, linkpath }) {
  return (
    <div className={classes.root}>
      <span className={classes.overlay} />
      <Link to={linkpath}>
        <h3>{title.toUpperCase()}</h3>

        <img src={poster} />
      </Link>
    </div>
  );
}

MovieCord.propTypes = {
  poster: PropTypes.string,
  title: PropTypes.string,
  rate: PropTypes.number,
};

export default MovieCord;
