// import { initialState } from "./App";
import { v4 as uuidv4 } from "uuid";

const reducer = (
  state = {
    count: 0,
    name: "",
    age: "",
    email: "",
    totalData: [],
  },
  action
) => {
  if (action.type === "INCREASE_VALUE") {
    return { ...state, count: state.count + 1 };
  }
  if (action.type === "DECREASE_VALUE") {
    if (state.count === 0) {
      return { ...state, count: 0 };
    }

    return { ...state, count: state.count - 1 };
  }
  if (action.type === "CHANGE_NAME") {
    const name = action.payload;
    return { ...state, name };
  }

  if (action.type === "CHANGE_AGE") {
    const age = action.payload;

    return { ...state, age };
  }
  if (action.type === "CHANGE_EMAIL") {
    const email = action.payload;

    return { ...state, email };
  }
  if (action.type === "HANDLE_SUBMIT") {
    // console.log(state.totalData);
    const newUser = { name: state.name, age: state.age, email: state.email };

    return {
      ...state,
      name: "",
      email: "",
      age: "",
      totalData: [...state.totalData, newUser],
    };
  }

  return state;
};

export default reducer;
