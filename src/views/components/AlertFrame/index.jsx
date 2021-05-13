import React, { useContext, useEffect } from "react";
import { Context } from "../../../context/Store";
import { ColorSwatch } from "../ColorSwatch";
import { useColorDrop } from "../ReactDnD/useColorDrop";
import { AlertBackgroundBorder } from "./AlertBackground/AlertBackgroundBorder";

export const AlertFrame = () => {
  const [state, dispatch] = useContext(Context);

  const textColor = useColorDrop("#ffffff");
  const buttonTextColor = useColorDrop("#ffffff");

  const layoutClasses = "flex flex-col items-start";

  useEffect(() => {
    dispatch({ type: "SET_TEXT_COLOR", payload: textColor.color });
  }, [dispatch, textColor.color]);

  useEffect(() => {
    dispatch({ type: "SET_BUTTON_TEXT_COLOR", payload: buttonTextColor.color });
  }, [dispatch, buttonTextColor.color]);

  return (
    <div className="bg-purple-200 py-4 gap-x-8 flex justify-center">
      <AlertBackgroundBorder />
      <article className={layoutClasses}>
        <div className={layoutClasses}>
          <p>Text color</p>
          <ColorSwatch
            ref={textColor.drop}
            style={{ backgroundColor: state.textColor }}
          />
        </div>
        <div className={layoutClasses}>
          <p>Button text color</p>

          <ColorSwatch
            ref={buttonTextColor.drop}
            style={{ backgroundColor: state.buttonTextColor }}
          />
        </div>
      </article>
    </div>
  );
};
