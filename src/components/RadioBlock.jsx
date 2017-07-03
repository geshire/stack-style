import React from "react";
import PropTypes from "prop-types";

const RadioBlock = ({ name, options, selected, width, onChange, color, size }) => (
  <fieldset>
    <div className={`radio ${size} btn-group`}>
      {options.index.map(key => (
        <label
          key={key}
          className={`btn--${size} btn-${color} ${selected.value === options.data[key].value ? "selected" : ""} ${width ? `width-${width}` : ""}`}
          htmlFor={`${name}-${key}`}
        >
          {options.data[key].label}
        </label>
      ))}
    </div>
    <div className="hidden">
      {options.index.map(key => (
        <input
          key={key}
          onChange={onChange}
          type="radio"
          name={name}
          id={`${name}-${key}`}
          value={options.data[key].value}
        />
      ))}
    </div>
  </fieldset>
);

RadioBlock.propTypes = {
  name: PropTypes.string.isRequired,
  selected: PropTypes.object,
  options: PropTypes.shape({
    index: PropTypes.array.isRequired,
    data: PropTypes.object.isRequired,
  }).isRequired,
  width: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  size: PropTypes.string,
};

RadioBlock.defaultProps = {
  selected: { value: "default" },
  width: null,
  size: "medium",
  type: null,
  onChange() {},
};

export default RadioBlock;
