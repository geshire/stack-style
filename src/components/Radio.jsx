import React from "react";
import PropTypes from "prop-types";

const Radio = ({ name, checked, onChange, label, size, type }) => {
  const toggleView = (
    <span className="checkbox--contain">
      <span className="checkbox--icon" />
      <span className="checkbox--circle">
        <i className="circle-top"><span /></i>
        <i className="circle-bottom"><span /></i>
      </span>
      {label &&
        <span className="checkbox--label">{label}</span>
      }
    </span>
  );

  const standardView = (
    <span className="checkbox--contain">
      <span className="checkbox--icon">
        <span className="checkbox--animate" />
      </span>
      {label &&
        <span className="checkbox--label">{label}</span>
      }
    </span>
  );

  return (
    <fieldset className={`checkbox ${size} ${type === "toggle" ? "alt" : ""}`}>
      <input type="checkbox" onChange={onChange} name={name} id={name} defaultChecked={checked} />
      <label htmlFor={name} className="ready">
        {type === "toggle" ? toggleView : standardView}
      </label>
    </fieldset>
  );
};

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  size: PropTypes.string,
  type: PropTypes.string,
};

Radio.defaultProps = {
  label: null,
  checked: false,
  size: "medium",
  type: null,
  onChange() {},
};

export default Radio;
