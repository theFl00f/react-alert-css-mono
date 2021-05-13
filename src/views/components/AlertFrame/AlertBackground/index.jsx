import React, { useContext, useEffect } from "react";
import { Context } from "../../../../context/Store";
import { useColorDrop } from "../../ReactDnD/useColorDrop";
import { AlertButtonBorder } from "../AlertButton/AlertButtonBorder";
import EditableLabel from "react-inline-editing";

export const AlertBackground = () => {
  const [state, dispatch] = useContext(Context);
  const { isOver, color, drop } = useColorDrop("#4f4f4f");

  const saveText = (value) => {
    dispatch({ type: "SET_MESSAGE", payload: value });
  };

  useEffect(() => {
    dispatch({ type: "SET_ALERT_BACKGROUND_COLOR", payload: color });
  }, [color, dispatch]);

  return (
    <div
      style={{ backgroundColor: state.alertBackgroundColor }}
      className="h-44 w-44 p-4 flex flex-col justify-between"
      ref={drop}
    >
      <div style={{ color: state.textColor }}>
        <EditableLabel
          text={state.message || "Click to edit"}
          onFocusOut={saveText}
          inputClassName="bg-transparent border border-indigo-300 border-solid max-w-full px-1"
        />
      </div>
      <AlertButtonBorder />
    </div>
  );
};
