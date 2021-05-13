import React, { useContext } from "react";
import { Context } from "../../../../context/Store";
import { CustomModal } from "../../../components/CustomModal";
import { SelectedPalette } from "../../../components/SelectedPalette";

const AlertBox = () => {
  const [state] = useContext(Context);

  const handlePublish = () => {
    //send state to DB
    console.log(state);
    if (state.error) {
      throw state.error;
    }
  };

  return (
    <div className="flex justify-between">
      <SelectedPalette />
      <CustomModal
        handlePublish={handlePublish}
        openButtonText="Export to code"
      >
        <article>
          <h2>HTML</h2>
          <pre>
            <code>
              {`<div className="react-alert">
  meow
  <button>meow</button>
</div>`}
            </code>
          </pre>
        </article>
        <article>
          <h2>CSS</h2>
          <pre>
            <code>
              {`.react-alert {
  background-color: ${state.alertBackgroundColor};
  border: 1px solid ${state.alertBorderColor};
  color: ${state.textColor};
}

.react-alert button {
  background-color: ${state.buttonBackgroundColor};
  border: 1px solid ${state.buttonBorderColor};
  color: ${state.buttonTextColor};
}
`}
            </code>
          </pre>
        </article>
      </CustomModal>
    </div>
  );
};

export default AlertBox;
