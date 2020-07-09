import { createStore } from 'redux';

const reducer = (state, action) => {
  const {type, value} = action;
  if(type === 'add') {
    return state + value;
  }
  if(type === 'minus') {
    return state - value;
  }
  return state;
};


const store = createStore(reducer, 0);
const {dispatch} = store;


const addAction = (value) => {
  dispatch({type: 'add', value});
};
const minusAction = (value) => {
  dispatch({type: 'minus', value});
};

const actions = {add: addAction, minus: minusAction};
window.store = store;


export default store;
export {actions};