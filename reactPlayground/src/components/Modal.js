import React from "react";

import { useState, useEffect, useRef } from "react";
import "./Modal.css";
function Modal() {
  const gg = useRef(null);
  const kk = useRef(null);
  const pp = useRef(null);

  // useEffect(() => {
  //   const vv = kk.current;
  //   const bb = gg.current;
  //   try {
  //     vv.addEventListener("click", () => {
  //       bb.showModal();
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }

  //   return () => {
  //     vv.removeEventListener("click", () => {
  //       bb.showModal();
  //     });
  //   };
  // }, []);
  // useEffect(() => {
  //   const vv = kk.current;
  //   const bb = gg.current;
  //   pp.current.addEventListener("click", () => {
  //     bb.close();
  //   });
  //   return () => {
  //     bb.removeEventListener("click", () => {
  //       gg.current.close();
  //     });
  //   };
  // }, []);
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
          <button ref={pp} onClick={handleClose} className="close-modal">
            close modal
          </button>
        </dialog>

        <button ref={kk} className="btn" onClick={handleSubmit}>
          close
        </button>
      </div>
    </>
  );
}

export default Modal;
