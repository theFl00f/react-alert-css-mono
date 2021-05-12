import { AlertButton } from ".";
import { useColorDrop } from "../../ReactDnD/useColorDrop";

export const AlertButtonBorder = ({ buttonTextColor }) => {
  const { isOver, color, drop } = useColorDrop("#000000");
  return (
    <div style={{ backgroundColor: color }} className="p-2" ref={drop}>
      <AlertButton buttonTextColor={buttonTextColor}>Hello</AlertButton>
    </div>
  );
};
