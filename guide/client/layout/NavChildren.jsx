import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import typography from "typography.json";

const NavChildren = ({ childItems }) => (
  <ul>
    {Object.keys(childItems).map(childKey => (
      <li key={childKey}>
        <Link
          className={`text--${Object.keys(typography.text.colors)[0]} text-1 margin-vert-small block`}
          to={childItems[childKey].to}
        >
          {childItems[childKey].title}
        </Link>
      </li>
    ))}
  </ul>
);

NavChildren.propTypes = {
  childItems: PropTypes.object.isRequired,
};

export default NavChildren;
