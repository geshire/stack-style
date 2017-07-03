import React from "react";
import PropTypes from "prop-types";

const Sidebar = props => (
  <aside className="sidebar bg-white border-left border--thin border--gray-light shadow">
    {props.children}
  </aside>
);


Sidebar.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Sidebar;
