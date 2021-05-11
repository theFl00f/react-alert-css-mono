import React from "react";
import { useLocation } from "react-router-dom";
import { DraggableColor } from "./DraggableColor";

export const SelectedPalette = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const colors = params
    .get("colors")
    .split("-")
    .map((color) => `#${color}`);

  return (
    <section className="flex">
      {colors &&
        colors.map((color, index) => (
          <DraggableColor key={index} color={color} />
        ))}
    </section>
  );
};
