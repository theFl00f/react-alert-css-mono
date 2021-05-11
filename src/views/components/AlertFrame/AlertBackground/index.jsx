import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../../ReactDnD/constants";
import { useColorDrop } from "../../ReactDnD/useColorDrop";
import { AlertButtonBorder } from "../AlertButton/AlertButtonBorder";

export const AlertBackground = () => {
  const { isOver, color, drop } = useColorDrop("#4f4f4f");
  return (
    <div
      style={{ backgroundColor: color }}
      className="h-44 w-44 p-4 flex flex-col justify-between"
      ref={drop}
    >
      <p>Hello</p>
      <AlertButtonBorder />
    </div>
  );
};
