import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import { Container } from "shards-react";
import Navigation from "./components/navigation/navigation";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Container>
        <Route path="/" exact render={() => <h1>Home</h1>} />
        <Route path="/profile" exact render={() => <h1>Profile</h1>} />
      </Container>
    </BrowserRouter>
  );
};

export default App;
