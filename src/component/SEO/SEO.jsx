import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

function SEO(title, discription) {
  return (
    <Helmet>
      <title>Watch Movies</title>
      <meta content={discription} name="discription" />
    </Helmet>
  );
}

SEO.defultProps = {
  title: "Watch Movies",
  discription: "Watch Movies Database",
};

SEO.propTypes = {
  title: PropTypes.string,
  discription: PropTypes.string,
};

export default SEO;
