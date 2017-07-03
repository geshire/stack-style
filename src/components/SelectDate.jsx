import React from "react";
import PropTypes from "prop-types";
import moment from "moment-timezone";

const SelectDate = ({ name, value, localTimezone, showLocalTimezone, size, onChange }) => (
  <fieldset className="select select--calendar">
    <button className={`btn-white btn--${size} icon-chevron-down-black icon--right icon--xsmall`}>
      {moment.tz(value, localTimezone).format("MM/DD/YYYY")} {showLocalTimezone && moment().tz(localTimezone).format("z")}
    </button>
    <input
      name={name}
      type="hidden"
      onChange={onChange}
      defaultValue={value}
    />
  </fieldset>
);

SelectDate.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  showLocalTimezone: PropTypes.bool,
  localTimezone: PropTypes.string,
  onChange: PropTypes.func,
  size: PropTypes.string,
};

SelectDate.defaultProps = {
  value: moment().toISOString(),
  showLocalTimezone: false,
  size: "medium",
  localTimezone: moment.tz.guess(),
  onChange() {},
};

export default SelectDate;
