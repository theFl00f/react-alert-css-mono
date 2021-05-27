import React from "react";
import PropTypes from "prop-types";

export const Button = ({ children, ...args }) => {
  return (
    <button
      className="bg-rac-light-peach px-6 rounded border-2 font-medium text-black border-rac-peach hover:bg-rac-peach hover:border-rac-light-peach transition-colors ease-in-out duration-200 text-opacity-90 hover:text-opacity-100"
      {...args}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
};
