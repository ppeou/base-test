import React from 'react';
import {Provider} from 'react-redux'
import './App.css';
import store from './store';
import UserProfile from './UserProfile';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
       <UserProfile />
      </div>
    </Provider>
  );
}

export default App;
