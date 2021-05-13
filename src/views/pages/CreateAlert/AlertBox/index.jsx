import React, { useContext } from "react";
import { Context } from "../../../../context/Store";
import { SelectedPalette } from "../../../components/SelectedPalette";

const AlertBox = () => {
  const [state] = useContext(Context);

  const handleClick = () => {
    console.log(state);
    if (state.error) {
      throw state.error;
    }
  };

  return (
    <div className="flex justify-between">
      <SelectedPalette />
      <button onClick={handleClick}>Publish and Export</button>
    </div>
  );
};

export default AlertBox;
