import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import { Container, Row } from "shards-react";

import Navigation from "./components/navigation/navigation";
import Sidebar from "./components/sidebar/sidebar";
import AllProjects from "./components/all-projects/all-projects";
import Profile from "./components/profile/profile";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Container fluid>
        <Row>
          <Sidebar />
          <main className="main-content p-0 col-sm-12 col-md-9 col-lg-10">
            <Container>
              <Route path="/" exact component={AllProjects} />
              <Route path="/profile" component={Profile} />
            </Container>
          </main>
        </Row>
      </Container>
    </BrowserRouter>
  );
};

export default App;
