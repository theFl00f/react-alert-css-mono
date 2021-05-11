import { AlertBackground } from ".";
import React from "react";
import { useColorDrop } from "../../ReactDnD/useColorDrop";

export const AlertBackgroundBorder = () => {
  const { isOver, color, drop } = useColorDrop("#ffffff");
  return (
    <div
      className="p-4 text-white"
      style={{ backgroundColor: color }}
      ref={drop}
    >
      <AlertBackground />
    </div>
  );
};
