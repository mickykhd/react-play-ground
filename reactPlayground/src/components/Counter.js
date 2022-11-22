import React from "react";
import { connect } from "react-redux";
import "./Counter.css";
function Counter({ count, name, decrease, increase }) {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => increase()}>+</button>
      <button onClick={() => decrease()}>-</button>
    </div>
  );
}
const mapStateToProps = (state) => {
  const { count, name } = state;

  return { count, name };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increase: () => dispatch({ type: "INCREASE_VALUE" }),
    decrease: () => dispatch({ type: "DECREASE_VALUE" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
