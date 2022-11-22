import React from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import "./Form.css";
function Form({
  name,
  email,
  age,
  changeName,
  changeAge,
  changeEmail,
  handleSubmit,
  totalData,
}) {
  return (
    <>
      <form className="form-body">
        <label className="label" htmlFor="name">
          Name
        </label>
        <input
          className="input-body"
          id="name"
          type="text"
          value={name}
          onChange={(e) => changeName(e)}
        />
        <label className="label" htmlFor="age">
          Age
        </label>
        <input
          className="input-body"
          type="number"
          id="age"
          value={age}
          onChange={(e) => changeAge(e)}
        />
        <label className="label" htmlFor="email">
          Email
        </label>
        <input
          className="input-body"
          type="email"
          value={email}
          onChange={(e) => changeEmail(e)}
        />
        <button
          className="btn"
          type="submit"
          onClick={(e) => {
            console.log(totalData);

            return handleSubmit(e);
          }}
        >
          <h3>Submit</h3>
        </button>
      </form>

      {totalData.map((singleData) => {
        const { name, age, email } = singleData;

        return (
          <div className="form-output" key={uuidv4()}>
            <h2>Name :</h2> <p className="sub-para">{name}</p>
            <h2> Age :</h2>
            <p className="sub-para">{age}</p>
            <h2>Email :</h2>
            <p className="sub-para">{email}</p>
          </div>
        );
      })}
    </>
  );
}
const mapStateToProps = (state) => {
  const { name, age, email, totalData } = state;

  return { name, age, email, totalData };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeName: (e) =>
      dispatch({ type: "CHANGE_NAME", payload: e.target.value }),
    changeAge: (e) => dispatch({ type: "CHANGE_AGE", payload: e.target.value }),
    changeEmail: (e) =>
      dispatch({ type: "CHANGE_EMAIL", payload: e.target.value }),
    handleSubmit: (e) => {
      e.preventDefault();

      return dispatch({ type: "HANDLE_SUBMIT" });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);
