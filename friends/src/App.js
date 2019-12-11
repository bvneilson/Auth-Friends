import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import './App.css';

import Login from './components/Login.js';
import FriendsList from './components/FriendsList.js';

function App() {

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("token") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );

  return (
    <div className="App">
      <Route path="/login" render={props => {return <Login {...props} />}} />
      <PrivateRoute path='/friends' component={FriendsList} />
    </div>
  );
}

export default App;
