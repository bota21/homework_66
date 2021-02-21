import {
  ADD_NUMBER,
  ADD_PLUS,
  ADD_MINUS,
  ADD_MULTIPLICATION,
  ADD_DIVISION,
} from "./actionTypes";

const initialState = {
  counter: '0'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return { ...state, counter: state.counter + action.value };
    case ADD_PLUS:
      return { ...state, counter: state.counter + action.value };
    case ADD_MINUS:
      return { ...state, counter: state.counter + action.value };
    case ADD_MULTIPLICATION:
      return { ...state, counter: state.counter + action.value };
    case ADD_DIVISION:
      return { ...state, counter: state.counter + action.value };
    default:
        return state;
  }
};

export default reducer;
