import { AlertBackground } from ".";
import React, { useContext, useEffect } from "react";
import { useColorDrop } from "../../ReactDnD/useColorDrop";
import { Context } from "../../../../context/Store";

export const AlertBackgroundBorder = () => {
  const [state, dispatch] = useContext(Context);
  const { isOver, color, drop } = useColorDrop(
    state.alertBorderColor || "#ffffff"
  );

  useEffect(() => {
    dispatch({ type: "SET_ALERT_BORDER_COLOR", payload: color });
  }, [color, dispatch]);

  return (
    <div
      className="p-4"
      style={{ backgroundColor: state.alertBorderColor }}
      ref={drop}
    >
      <AlertBackground />
    </div>
  );
};
