import React from "react";
import PropTypes from "prop-types";

const Header = ({ title }) => (
  <header className="row padding-horz-large">
    <div className="col width-1-2">
      <h3 className="padding-horz-large padding-top-large head-1 head--navy text--bold">
        {title}
      </h3>
    </div>
    <div className="col width-1-2 code-block">
      <pre className="padding-horz-large padding-top-large">
        <code>{title && title.toUpperCase()}</code>
      </pre>
    </div>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
