import React from "react";
import PropTypes from "prop-types";

const Input = ({ name, value, size, type, onChange }) => {
  const view = {};

  view.smart = (
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
    />
  );

  view.password = (
    <input
      type="password"
      name={name}
      value={value}
      onChange={onChange}
    />
  );

  view.search = (
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
    />
  );

  return (
    <fieldset className={`input input--${type} ${size}`}>
      {view[type]}
    </fieldset>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  size: PropTypes.string,
  type: PropTypes.oneOf(["smart", "search", "password"]),
};

Input.defaultProps = {
  value: "",
  size: "medium",
  type: "smart",
  onChange() {},
};

export default Input;
