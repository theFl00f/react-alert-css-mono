import React from "react";
import PropTypes from "prop-types";

export const RadioInput = ({ label, id, ...args }) => {
  return (
    <div className="flex gap-2 items-center">
      <label htmlFor={id}>{label}</label>
      <input id={id} type="radio" {...args} />
    </div>
  );
};

RadioInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
