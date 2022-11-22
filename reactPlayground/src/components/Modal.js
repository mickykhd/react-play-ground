import React from "react";
import { useState, useEffect, useRef } from "react";
function Modal() {
  const gg = useRef(null);
  const kk = useRef(null);
  const pp = useRef(null);

  useEffect(() => {
    const vv = kk.current;
    const bb = gg.current;
    try {
      vv.addEventListener("click", () => {
        bb.showModal();
      });
    } catch (error) {
      console.log(error);
    }

    return () => {
      vv.removeEventListener("click", () => {
        bb.showModal();
      });
    };
  }, []);
  //   useEffect(() => {
  //     pp.current.addEventListener("click", () => {
  //       gg.current.close();
  //     });
  //     return () => {
  //       kk.current.removeEventListener("click", () => {
  //         gg.current.clo();
  //       });
  //     };
  //   }, []);
  return (
    <>
      <dialog ref={gg} className="modal">
        <h1>hello</h1>
        <button ref={pp} className="close-modal">
          close modal
        </button>
      </dialog>

      <button ref={kk} className="btn">
        close
      </button>
    </>
  );
}

export default Modal;
