import React from "react";
import PropTypes from "prop-types";

export const RangeInput = ({ label, className, ...args }) => {
  return (
    <div className={className || ""}>
      <label>{label}</label>
      <input type="range" {...args} />
    </div>
  );
};

RangeInput.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};
