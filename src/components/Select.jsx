import React from "react";
import PropTypes from "prop-types";

const Select = ({ name, label, selected, options, size, type, onChange }) => {
  const nativeView = (
    <select
      defaultValue={selected.value}
      name={name}
      onChange={onChange}
      className={`width-100 btn-white btn--${size} icon-chevron-down-black icon--right icon--xsmall`}
    >
      <option value="default" disabled>{label}</option>
      {options.index.map(key => (
        <option
          key={key}
          value={options.data[key].value}
        >
          {options.data[key].label}
        </option>
      ))}
    </select>
  );

  const customView = (
    <div />
  );

  return (
    <fieldset className="select">
      {type === "native" ? nativeView : customView}
    </fieldset>
  );
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  selected: PropTypes.object,
  options: PropTypes.shape({
    index: PropTypes.array.isRequired,
    data: PropTypes.object.isRequired,
  }).isRequired,
  onChange: PropTypes.func,
  size: PropTypes.string,
  type: PropTypes.string,
};

Select.defaultProps = {
  label: "Select...",
  selected: { value: "default" },
  size: "medium",
  type: "native",
  onChange() {},
};

export default Select;
