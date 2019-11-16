import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import { Container, Row } from "shards-react";

import Navigation from "./navigation";
import Sidebar from "./sidebar";
import AllTickets from "./all-tickets";
import ProjectTickets from "./project-tickets";
import Profile from "./profile";
import TicketForm from "./ticket-form";

const Dashboard = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Container fluid>
        <Row>
          <Sidebar />
          <main className="main-content px-0 py-3 col-sm-12 col-md-9 col-lg-10">
            <Container>
              <Route path="/" exact component={AllTickets} />
              <Route path="/projects/:id" component={ProjectTickets} />
              <Route path="/profile" component={Profile} />
              <Switch>
                <Route
                  path="/ticket-form/:verb/:ticketID"
                  component={TicketForm}
                />
                <Route path="/ticket-form/:verb" component={TicketForm} />
              </Switch>
            </Container>
          </main>
        </Row>
      </Container>
    </BrowserRouter>
  );
};

export default Dashboard;
