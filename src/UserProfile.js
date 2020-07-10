import React from 'react';
import {actions} from './store';
import { useSelector } from 'react-redux';


const UserProfile = () => {
  const count = useSelector(state => state);
  const addClick = () => {actions.add(1);};
  const minusClick = () => {actions.minus(1);};

  return (<section>
    <h1>User Profile</h1>
    <button onClick={addClick}>+</button>
    &nbsp;[ <span>{count}</span> ]&nbsp;
    <button onClick={minusClick}>-</button>
  </section>);
};

export default UserProfile;