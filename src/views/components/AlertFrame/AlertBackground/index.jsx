import React, { useContext, useEffect } from "react";
import { Context } from "../../../../context/Store";
import { useColorDrop } from "../../ReactDnD/useColorDrop";
import { AlertButtonBorder } from "../AlertButton/AlertButtonBorder";

export const AlertBackground = () => {
  const [state, dispatch] = useContext(Context);
  const { isOver, color, drop } = useColorDrop("#4f4f4f");

  useEffect(() => {
    dispatch({ type: "SET_ALERT_BACKGROUND_COLOR", payload: color });
  }, [color, dispatch]);

  return (
    <div
      style={{ backgroundColor: state.alertBackgroundColor }}
      className="h-44 w-44 p-4 flex flex-col justify-between"
      ref={drop}
    >
      <p style={{ color: state.textColor }}>Hello</p>
      <AlertButtonBorder />
    </div>
  );
};
