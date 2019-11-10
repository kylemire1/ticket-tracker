import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import {
  Navbar,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
  Button
} from "shards-react";
import { NavLink, Link } from "react-router-dom";

const Navigation = () => {
  const [collapseOpen, setCollapseOpen] = useState(false);

  return (
    <header>
      <Navbar
        style={{
          zIndex: 99,
          background: "white",
          boxShadow: "-3px 0px 16px 0px rgba(146, 173, 227, 0.26)"
        }}
        type="light"
        expand="md"
      >
        <Link className="navbar-brand" to="/">
          Ticket Tracker
        </Link>
        <NavbarToggler onClick={() => setCollapseOpen(!collapseOpen)} />
        <Collapse
          open={collapseOpen}
          style={{ justifyContent: "flex-end" }}
          navbar
        >
          <Nav navbar>
            <NavItem>
              <Link to="/ticket-form/create">
                <Button theme="success">Create Ticket</Button>
              </Link>
            </NavItem>
            <NavItem>
              <NavLink exact className="nav-link" to="/">
                Dashboard
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/profile">
                Profile
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
};

export default Navigation;
