import React, { useContext, useEffect } from "react";
import { Context } from "../../../../context/Store";
import { useColorDrop } from "../../ReactDnD/useColorDrop";
import PropTypes from "prop-types";

export const AlertButton = ({ children }) => {
  const [state, dispatch] = useContext(Context);
  const { _isOver, color, drop } = useColorDrop(
    state.buttonBackgroundColor || "#1f1f1f"
  );

  useEffect(() => {
    dispatch({ type: "SET_BUTTON_BACKGROUND_COLOR", payload: color });
  }, [color, dispatch]);

  return (
    <button
      className="block w-full"
      style={{
        backgroundColor: state.buttonBackgroundColor,
        color: state.buttonTextColor,
      }}
      ref={drop}
    >
      {children}
    </button>
  );
};

AlertButton.propTypes = {
  children: PropTypes.element.isRequired,
};
