import React from 'react';
import {Provider} from 'react-redux'
import './App.css';
import store from './store';
import UserProfile from './UserProfile';
import FeaturedDeals from './FeaturedDeals';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <FeaturedDeals />
       <UserProfile />
      </div>
    </Provider>
  );
}

export default App;
