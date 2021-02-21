import {
  ADD_NUMBER,
  ADD_PLUS,
  ADD_MINUS,
  ADD_MULTIPLICATION,
  ADD_DIVISION,
  TOTAL_SUM,
  DELETE_ONE,
  CLEAN_DISPLAY,
} from "./actionTypes";

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      if (state.counter === 0) {
        return { ...state, counter: action.value };
      } else if (state.counter.length > 1) {
        return { ...state, counter: state.counter + action.value };
      }
    case ADD_PLUS:
      return { ...state, counter: state.counter + action.value };
    case ADD_MINUS:
      return { ...state, counter: state.counter + action.value };
    case ADD_MULTIPLICATION:
      return { ...state, counter: state.counter + action.value };
    case ADD_DIVISION:
      return { ...state, counter: state.counter + action.value };
    case TOTAL_SUM:
      return { ...state, counter: eval(state.counter) };
    case DELETE_ONE:
      if (state.counter.length > 1) {
        return {
          ...state,
          counter: state.counter.substring(0, state.counter.length - 1),
        };
      }
    case CLEAN_DISPLAY:
      return { ...state, counter: 0 };
    default:
      return state;
  }
};

export default reducer;
