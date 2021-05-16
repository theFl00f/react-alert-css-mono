import React, { useContext } from "react";
import { useHistory } from "react-router";
import { alertDao } from "../../../../context/persistentContext";
import { Context } from "../../../../context/Store";
import { AlertFrame } from "../../../components/AlertFrame";
import { CreateAlertForm } from "../../../components/forms/CreateAlertForm";
import { Modal } from "../../../components/Modal";
import { SelectedPalette } from "../../../components/SelectedPalette";
import { ExportedCodeBlock } from "./ExportedCodeBlock";

const AlertBox = () => {
  const [state] = useContext(Context);
  const history = useHistory();

  const addAlert = async ({
    alertBorderColor,
    alertBackgroundColor,
    buttonBorderColor,
    buttonBackgroundColor,
    textColor,
    buttonTextColor,
    message,
    buttonText,
    alertWidth,
    alertHeight,
    alertBorderRadius,
    alertBorderWidth,
  }) => {
    try {
      const newAlert = await alertDao.addAlert({
        alertBorderColor,
        alertBackgroundColor,
        buttonBorderColor,
        buttonBackgroundColor,
        textColor,
        buttonTextColor,
        message,
        buttonText,
        alertWidth,
        alertHeight,
        alertBorderRadius,
        alertBorderWidth,
      });
      if (newAlert) return true;
    } catch (e) {
      console.log(e);
    }
  };

  const handlePublish = () => {
    //send state to DB
    console.log(state);
    if (state.error) {
      throw state.error;
    }
    const response = addAlert(state);

    if (response) {
      history.push("/alerts");
    }
  };

  return (
    <>
      <AlertFrame />
      <div className="flex justify-between">
        <SelectedPalette />
        <Modal handlePublish={handlePublish} openButtonText="Export to code">
          <div className="grid grid-cols-2">
            <ExportedCodeBlock
              title="CSS"
              code={`html {
  font-size: 62.5%;
}

body {
  font-size: 1.4rem;
}
              
.react-alert {
  display: flex;
  flex-direction: column;
  width: ${state.alertWidth}rem;
  height: ${state.alertHeight}rem;
  background-color: ${state.alertBackgroundColor};
  border: ${state.alertBorderWidth}rem solid ${state.alertBorderColor};
  border-radius: ${state.alertBorderRadius}%;${
                state.message &&
                `
  color: ${state.textColor};`
              }
}

.react-alert button {
  margin-top: auto;
  background-color: ${state.buttonBackgroundColor};
  border: 1px solid ${state.buttonBorderColor};
  color: ${state.buttonTextColor};
}
`}
            />
            <ExportedCodeBlock
              title="HTML"
              code={`<div className="react-alert">${
                state.message &&
                `
  <p>${state.message}</p>`
              }
  <button>${state.buttonText}</button>
</div>`}
            />
          </div>
        </Modal>
      </div>
      <CreateAlertForm />
    </>
  );
};

export default AlertBox;
