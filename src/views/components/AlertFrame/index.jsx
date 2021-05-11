import React from "react";
import { ColorSwatch } from "../ColorSwatch";
import { useColorDrop } from "../ReactDnD/useColorDrop";
import { AlertBackgroundBorder } from "./AlertBackground/AlertBackgroundBorder";

export const AlertFrame = () => {
  const textColor = useColorDrop("#ffffff");
  const buttonTextColor = useColorDrop("#ffffff");
  const layoutClasses = "flex flex-col items-start";
  return (
    <div className="bg-purple-200 py-4 gap-x-8 flex justify-center">
      <AlertBackgroundBorder />
      <article className={layoutClasses}>
        <div className={layoutClasses}>
          <p>Text color</p>
          <ColorSwatch
            ref={textColor.drop}
            style={{ backgroundColor: textColor.color }}
          />
        </div>
        <div className={layoutClasses}>
          <p>Button text color</p>

          <ColorSwatch
            ref={buttonTextColor.drop}
            style={{ backgroundColor: buttonTextColor.color }}
          />
        </div>
      </article>
    </div>
  );
};
