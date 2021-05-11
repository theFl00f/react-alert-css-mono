import React from "react";

export const RangeInput = ({ label, ...args }) => {
  return (
    <label>
      {label}
      <input type="range" {...args} />
    </label>
  );
};
