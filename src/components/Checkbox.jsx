import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({ name, checked, onChange, label, size, type }) => {
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
    <span>
      <span className="checkbox--icon margin-small">
        <span className="icon icon-checkmark" />
      </span>
      {label &&
        <span className="checkbox--label inline-block">{label}</span>
      }
    </span>
  );

  return (
    <fieldset className={`checkbox checkbox--${size} checkbox--${type} padding-small relative`}>
      <input type="checkbox" onChange={onChange} name={name} id={name} defaultChecked={checked} />
      <label htmlFor={name} className="ready">
        {type === "toggle" ? toggleView : standardView}
      </label>
    </fieldset>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  size: PropTypes.string,
  type: PropTypes.string,
};

Checkbox.defaultProps = {
  label: null,
  checked: false,
  size: "medium",
  type: "standard",
  onChange() {},
};

export default Checkbox;
