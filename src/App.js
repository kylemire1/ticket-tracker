import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import { Container } from "shards-react";

function App() {
  console.log(process.env.REACT_APP_API_KEY);
  return (
    <Container style={{ maxWidth: "100%" }}>
      <h1>hi</h1>
    </Container>
  );
}

export default App;
