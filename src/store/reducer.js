import { ADD_NUMBER } from './actionTypes';

const initialState = {
    counter: '0'
};

const reducer = (state = initialState, action) => {
    if(action.type === ADD_NUMBER) {
return {...state, counter: state.counter + action.value}
    }
    return state;
};

export default reducer