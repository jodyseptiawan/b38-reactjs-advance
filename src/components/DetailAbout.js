// import package for property types
import PropTypes from "prop-types";

// create component here
import React from "react";

export default function DetailAbout(props) {
  console.log(props);
  return <div>DetailAbout</div>;
}

// define property type for this component here
DetailAbout.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
  view: PropTypes.number.isRequired,
};
