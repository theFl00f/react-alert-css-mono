import React, { useState } from "react";
import ReactModal from "react-modal";
import PropTypes from "prop-types";

export const Modal = ({ children, openButtonText, handlePublish }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleClick = () => {
    closeModal();
    handlePublish();
  };

  ReactModal.setAppElement("#root");

  return (
    <>
      <button onClick={openModal}>{openButtonText}</button>
      <ReactModal isOpen={isOpen}>
        <button onClick={closeModal}>Close</button>
        {handlePublish && <button onClick={handleClick}>Publish</button>}
        {children}
      </ReactModal>
    </>
  );
};

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  openButtonText: PropTypes.string.isRequired,
  handlePublish: PropTypes.func.isRequired,
};
