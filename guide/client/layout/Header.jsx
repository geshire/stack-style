import React from "react";
import PropTypes from "prop-types";

const Header = ({ title }) => (
  <header>
    <h3 className="padding-horz-large padding-top-large head-1 head--navy text--bold">
      {title}
    </h3>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
