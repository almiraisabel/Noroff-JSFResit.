import React from "react";
import PropTypes from "prop-types";


export default function Heading({ title }) {
 return  <div><h1 className="verticalh1"> {title}</h1></div>;
}

Heading.propTypes = {
 title: PropTypes.string,
};