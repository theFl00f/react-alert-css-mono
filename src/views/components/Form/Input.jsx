import React from "react";
export const Input = ({ label, ...args }) => {
  return (
    <label>
      {label}
      <input type="text" {...args} />
    </label>
  );
};
