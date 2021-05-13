import { useContext, useEffect } from "react";
import { AlertButton } from ".";
import { Context } from "../../../../context/Store";
import { useColorDrop } from "../../ReactDnD/useColorDrop";

export const AlertButtonBorder = () => {
  const [state, dispatch] = useContext(Context);
  const { isOver, color, drop } = useColorDrop("#000000");

  useEffect(() => {
    dispatch({ type: "SET_BUTTON_BORDER_COLOR", payload: color });
  }, [color, dispatch]);

  return (
    <div
      style={{ backgroundColor: state.buttonBorderColor }}
      className="p-2"
      ref={drop}
    >
      <AlertButton>Hello</AlertButton>
    </div>
  );
};
