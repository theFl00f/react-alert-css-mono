import { useColorDrop } from "../../ReactDnD/useColorDrop";

export const AlertButton = ({ children }) => {
  const { isOver, color, drop } = useColorDrop("#1f1f1f");
  return (
    <button
      className="block w-full"
      style={{ backgroundColor: color }}
      ref={drop}
    >
      {children}
    </button>
  );
};
