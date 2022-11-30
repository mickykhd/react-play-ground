import React from "react";
import { connect } from "react-redux";

import { useRef, useEffect, useState } from "react";
import "./Modal.css";
import Loader from "./Loader";

const url = "https://official-joke-api.appspot.com/random_joke";
const handleJokeData = async () => {
  const response = await fetch(url);
  const data = await response.json();

  return data;
};

function Modal({ set, pun, handleJoke, loading }) {
  const modalContainer = useRef(null);

  const handleSubmit = () => {
    modalContainer.current.showModal();
  };
  const handleClose = () => {
    modalContainer.current.close();
  };

  return (
    <>
      <dialog ref={modalContainer} className="modal">
        <h1>Random Jokes</h1>
        <h2>{set}</h2>
        <h3>{pun}</h3>
        <button
          className="open-modal"
          onClick={(e) => {
            e.preventDefault();

            return handleJoke();
          }}
        >
          Generate Joke
        </button>
        <button onClick={handleClose} className="close-modal">
          close
        </button>
        <p>{loading ? "Loading.." : "Joke Loaded"}</p>
      </dialog>

      <button className="open-modal" onClick={handleSubmit}>
        open modal
      </button>
    </>
  );
}
const mapStateToProps = (state) => {
  const {
    joke: { set, pun },
    loading,
  } = state;

  return { set, pun, loading };
};

const mapDispatchToPros = (dispatch) => {
  return {
    handleJoke: () => {
      const jokePromise = handleJokeData().then((data) => {
        return dispatch({
          type: "HANDLE_JOKE",
          payload: data,
        });
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToPros)(Modal);
