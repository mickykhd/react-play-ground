import React from "react";

import { useRef } from "react";
import "./Modal.css";
function Modal() {
  const gg = useRef(null);

  const handleSubmit = () => {
    gg.current.showModal();
  };
  const handleClose = () => {
    gg.current.close();
  };

  return (
    <>
      <div className="modal-cntnr">
        <dialog ref={gg} className="modal">
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

export default Modal;
