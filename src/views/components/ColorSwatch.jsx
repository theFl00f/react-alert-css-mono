import React from "react";
import PropTypes from "prop-types";

export const ColorSwatch = React.forwardRef(({ style }, ref) => {
  return <div className="h-12 w-12" ref={ref} style={style}></div>;
});

ColorSwatch.propTypes = {
  style: PropTypes.object,
};

ColorSwatch.displayName = "ColorSwatch";
