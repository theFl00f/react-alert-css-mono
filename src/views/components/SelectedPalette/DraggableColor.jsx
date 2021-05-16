import React from "react";
import { useDrag } from "react-dnd";
import { ColorSwatch } from "../ColorSwatch";
import { ItemTypes } from "../ReactDnD/constants";
import PropTypes from "prop-types";

export const DraggableColor = ({ color }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.COLORS,
    item: { color },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <ColorSwatch
      ref={drag}
      style={{ backgroundColor: color, opacity: isDragging ? 0.7 : 1 }}
    />
  );
};

DraggableColor.propTypes = {
  color: PropTypes.string.isRequired,
};
