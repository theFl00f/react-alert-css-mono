import React from "react";

export const ColorInput = ({ label, ...args }) => {
  return (
    <label className="flex flex-col md:flex-row">
      {label || args.value}
      <input type="color" {...args} />
    </label>
  );
};
