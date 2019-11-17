import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

import { UserContext } from "./context/user-context";
import Login from "./components/login";
import Dashboard from "./components/dashboard";

const App = () => {
  const [user, setUser] = useState({
    name: "",
    email: ""
  });

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
