import { AlertBackground } from ".";
import React from "react";
import { useColorDrop } from "../../ReactDnD/useColorDrop";

export const AlertBackgroundBorder = ({ textColor, buttonTextColor }) => {
  const { isOver, color, drop } = useColorDrop("#ffffff");
  return (
    <div className="p-4" style={{ backgroundColor: color }} ref={drop}>
      <AlertBackground
        textColor={textColor}
        buttonTextColor={buttonTextColor}
      />
    </div>
  );
};
