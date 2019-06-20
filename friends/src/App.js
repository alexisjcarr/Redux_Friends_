import React from "react";
import { Route } from "react-router-dom";

import "./App.scss";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <div className="App">
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/protected" component={FriendsList} />
    </div>
  );
};

export default App;
