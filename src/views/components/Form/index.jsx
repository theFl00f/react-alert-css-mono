import React from "react";

export const Form = ({ args, className, children }) => {
  return (
    <form className={className || ""} {...args}>
      {children}
    </form>
  );
};
