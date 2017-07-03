import React from "react";
import PropTypes from "prop-types";
import { timeSeries } from "utils/utils";

const SelectTime = ({ name, value, size, onChange }) => (
  <fieldset className="select select--calendar">
    <button className={`btn-white btn--${size} icon-chevron-down-black icon--right icon--xsmall`}>
      {value}
    </button>
    <div>{timeSeries(15, "09:00:00", "22:00:00")}</div>
    <input
      name={name}
      type="hidden"
      onChange={onChange}
      defaultValue={value}
    />
  </fieldset>
);

SelectTime.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  size: PropTypes.string,
};

SelectTime.defaultProps = {
  value: "",
  size: "medium",
  onChange() {},
};

export default SelectTime;
