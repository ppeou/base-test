import React from 'react';
import {Provider} from 'react-redux'
import store from './store';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import NumericInput from './features/NumericInput';
import FeaturedDeals from './features/FeaturedDeals';
import Counter from './features/Counter';
import './index.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <div>
            <nav>
              <NavLink activeClassName="selected" to="/NumericInput">NumericInput</NavLink >
              <NavLink activeClassName="selected" to="/FeaturedDeals">FeaturedDeals</NavLink >
              <NavLink activeClassName="selected" to="/Counter">Counter</NavLink >

            </nav>

            <Switch>
              <Route path="/Counter">
                <Counter/>
              </Route>
              <Route path="/FeaturedDeals">
                <FeaturedDeals/>
              </Route>
              <Route path="/NumericInput">
                <NumericInput/>
              </Route>
            </Switch>
          </div>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
