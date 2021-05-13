import React, { useContext } from "react";
import { alertDao } from "../../../../context/persistentContext";
import { Context } from "../../../../context/Store";
import { AlertFrame } from "../../../components/AlertFrame";
import { Modal } from "../../../components/Modal";
import { SelectedPalette } from "../../../components/SelectedPalette";
import { ExportedCodeBlock } from "./ExportedCodeBlock";

const AlertBox = () => {
  const [state] = useContext(Context);

  const fetchAlerts = async () => {
    try {
      const alerts = await alertDao.getAlerts();
      console.log(alerts);
    } catch (e) {
      console.log(e);
    }
  };

  const addAlert = async ({
    alertBorderColor,
    alertBackgroundColor,
    buttonBorderColor,
    buttonBackgroundColor,
    textColor,
    buttonTextColor,
    message,
    buttonText,
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
      });
      console.log(newAlert);
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
    addAlert(state);
    fetchAlerts();
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
  background-color: ${state.alertBackgroundColor};
  border: 1px solid ${state.alertBorderColor};${
                state.message &&
                `
  color: ${state.textColor};`
              }
}

.react-alert button {
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
    </>
  );
};

export default AlertBox;
