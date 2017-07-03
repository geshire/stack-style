import React from "react";
import PropTypes from "prop-types";

const SubHeader = ({ title, anchor }) => (
  <h4 className="margin-bottom-medium padding-bottom-small border-bottom border--thin border--gray-light text-1" id={anchor}>
    {title}
  </h4>
);

SubHeader.propTypes = {
  title: PropTypes.string.isRequired,
  anchor: PropTypes.string.isRequired,
};

export default SubHeader;
