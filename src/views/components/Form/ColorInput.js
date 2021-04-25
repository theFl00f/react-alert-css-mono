import React from "react";

export const ColorInput = ({ label, ...args }) => {
  return (
    <label>
      {label}
      <input type="color" {...args} />
    </label>
  );
};
