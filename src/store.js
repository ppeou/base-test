import { createStore } from 'redux';
const initialState = 0;

const reducer = (state = initialState, action) => {
  const {type, value} = action;
  if(type === 'add') {
    return state + value;
  }
  if(type === 'minus') {
    return state - value;
  }
  return state;
};


const store = createStore(reducer);
const {dispatch} = store;


const addAction = (value) => {
  dispatch({type: 'add', value});
};
const minusAction = (value) => {
  dispatch({type: 'minus', value});
};

const actions = {add: addAction, minus: minusAction};

export default store;
export {initialState, actions, reducer};