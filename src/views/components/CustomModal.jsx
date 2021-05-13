import { useState } from "react";
import Modal, { closeStyle } from "simple-react-modal";

export const CustomModal = ({ children, openButtonText, handlePublish }) => {
  const [isVisible, setIsVisible] = useState(false);

  const openModal = () => {
    setIsVisible(true);
  };

  const closeModal = () => {
    setIsVisible(false);
  };

  const handleClick = () => {
    closeModal();
    handlePublish();
  };

  return (
    <>
      <button onClick={openModal}>{openButtonText}</button>
      <Modal closeOnOuterClick={false} show={isVisible} onClose={closeModal}>
        <button style={closeStyle} onClick={closeModal}>
          x
        </button>
        {children}
        <button onClick={handleClick}>Publish</button>
      </Modal>
    </>
  );
};
