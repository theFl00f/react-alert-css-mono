import React, { useContext } from "react";
import { Context } from "../../../context/Store";
import { Form } from "../Form";
import { RangeInput } from "../Form/RangeInput";

export const CreateAlertForm = () => {
  const [state, dispatch] = useContext(Context);

  const handleAlertWidthChange = (e) => {
    dispatch({ type: "SET_ALERT_WIDTH", payload: e.target.value });
  };

  const handleAlertHeightChange = (e) => {
    dispatch({ type: "SET_ALERT_HEIGHT", payload: e.target.value });
  };

  const handleAlertBorderRadiusChange = (e) => {
    dispatch({ type: "SET_ALERT_BORDER_RADIUS", payload: e.target.value });
  };

  const handleAlertBorderWidthChange = (e) => {
    dispatch({ type: "SET_ALERT_BORDER_WIDTH", payload: e.target.value });
  };

  const inputClasses = "grid grid-cols-2";

  return (
    <Form className="grid grid-cols-2 gap-y-4 gap-x-12">
      <RangeInput
        className={inputClasses}
        label="Alert width"
        min={8}
        max={36}
        defaultValue={state.alertWidth}
        onChange={handleAlertWidthChange}
      />
      <RangeInput
        className={inputClasses}
        label="Alert height"
        min={7}
        max={20}
        defaultValue={state.alertHeight}
        onChange={handleAlertHeightChange}
      />
      <RangeInput
        className={inputClasses}
        label="Alert border radius"
        min={0}
        max={50}
        step={0.5}
        defaultValue={state.alertBorderRadius}
        onChange={handleAlertBorderRadiusChange}
      />
      <RangeInput
        className={inputClasses}
        label="Alert border width"
        min={0}
        max={2}
        step={0.1}
        defaultValue={state.alertBorderWidth}
        onChange={handleAlertBorderWidthChange}
      />
    </Form>
  );
};
