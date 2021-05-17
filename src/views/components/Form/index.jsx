import React from "react";
import PropTypes from "prop-types";

export const Form = ({ className, children, ...args }) => {
  return (
    <form className={className || ""} {...args}>
      {children}
    </form>
  );
};

Form.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
