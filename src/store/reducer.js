import {
  ADD_NUMBER,
  ADD_PLUS,
  ADD_MINUS,
  ADD_MULTIPLICATION,
  ADD_DIVISION,
  TOTAL_SUM,
  DELETE_ONE
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
    case TOTAL_SUM:
        console.log(state.counter);
        let sum = eval(state.counter);
        console.log(sum);
        return{...state, counter:  eval(state.counter)};
        case DELETE_ONE:
          return {...state, counter: state.counter.substring(0, state.counter.length - 1)}
    default:
        return state;
  }
};

export default reducer;
