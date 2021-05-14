import { useContext, useEffect } from "react";
import { AlertButton } from ".";
import { Context } from "../../../../context/Store";
import { InlineEdit } from "../../InlineEdit";
import { useColorDrop } from "../../ReactDnD/useColorDrop";

export const AlertButtonBorder = () => {
  const [state, dispatch] = useContext(Context);
  const { isOver, color, drop } = useColorDrop(
    state.buttonBorderColor || "#000000"
  );

  const saveText = (value) => {
    dispatch({ type: "SET_BUTTON_TEXT", payload: value });
  };

  useEffect(() => {
    dispatch({ type: "SET_BUTTON_BORDER_COLOR", payload: color });
  }, [color, dispatch]);

  return (
    <div
      style={{ backgroundColor: state.buttonBorderColor }}
      className="p-2"
      ref={drop}
    >
      <AlertButton>
        <InlineEdit text={state.buttonText} saveText={saveText} />
      </AlertButton>
    </div>
  );
};
