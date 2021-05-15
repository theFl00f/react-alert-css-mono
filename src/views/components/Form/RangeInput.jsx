import React from "react";

export const RangeInput = ({ label, className, ...args }) => {
  return (
    <div className={className || ""}>
      <label>{label}</label>
      <input type="range" {...args} />
    </div>
  );
};
