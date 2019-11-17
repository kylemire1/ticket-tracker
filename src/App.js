import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

import { UserContext } from "./context/user-context";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import firebase from "./firebase";

const App = () => {
  const [user, setUser] = useState({
    name: "",
    email: ""
  });

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(userData => {
      if (userData && (user.name === "" || user.email === "")) {
        setUser({
          name: userData.displayName,
          email: userData.email
        });
      }
    });
    return () => unsubscribe();
  }, [user.name, user.email]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;
