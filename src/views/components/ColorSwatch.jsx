import React from "react";

export const ColorSwatch = React.forwardRef(({ style }, ref) => {
  return <div className="h-12 w-12" ref={ref} style={style}></div>;
});
