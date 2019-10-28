import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import {
  Container,
  Navbar,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
  NavbarBrand
} from "shards-react";
import { NavLink, Link } from "react-router-dom";

const Navigation = () => {
  const [collapseOpen, setCollapseOpen] = useState(false);

  return (
    <header>
      <Navbar type="dark" theme="info" expand="md">
        <Link className="navbar-brand" to="/">
          Ticket Tracker
        </Link>
        <NavbarToggler onClick={() => setCollapseOpen(!collapseOpen)} />
        <Collapse
          open={collapseOpen}
          navbar
          style={{ justifyContent: "flex-end" }}
        >
          <Nav navbar>
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
