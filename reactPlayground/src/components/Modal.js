import React from "react";
import { connect } from "react-redux";

import { useRef } from "react";
import "./Modal.css";
function Modal() {
  const modalContainer = useRef(null);

  const handleSubmit = () => {
    modalContainer.current.showModal();
  };
  const handleClose = () => {
    modalContainer.current.close();
  };

  return (
    <>
      <div className="modal-cntnr">
        <dialog ref={modalContainer} className="modal">
          <h1>hello</h1>
          <button onClick={handleClose} className="close-modal">
            close modal
          </button>
        </dialog>

        <button className="btn" onClick={handleSubmit}>
          close
        </button>
      </div>
    </>
  );
}

export default connect()(Modal);
