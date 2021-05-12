import React from "react";
import { useColorDrop } from "../../ReactDnD/useColorDrop";
import { AlertButtonBorder } from "../AlertButton/AlertButtonBorder";

export const AlertBackground = ({ textColor, buttonTextColor }) => {
  const { isOver, color, drop } = useColorDrop("#4f4f4f");
  return (
    <div
      style={{ backgroundColor: color }}
      className="h-44 w-44 p-4 flex flex-col justify-between"
      ref={drop}
    >
      <p style={{ color: textColor }}>Hello</p>
      <AlertButtonBorder buttonTextColor={buttonTextColor} />
    </div>
  );
};
