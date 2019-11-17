import React, { useState, useContext } from "react";
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
import { UserContext } from "../context/user-context";

import firebase from "../firebase";
import styles from "./navigation.module.scss";

const Navigation = props => {
  const { user } = useContext(UserContext);
  const [collapseOpen, setCollapseOpen] = useState(false);

  const handleLogOut = () => {
    firebase.auth().signOut();
    window.location.reload();
  };

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
        <span className={styles.displayName}>Hello, {user.name}</span>
        <NavbarToggler onClick={() => setCollapseOpen(!collapseOpen)} />
        <Collapse
          open={collapseOpen}
          style={{ justifyContent: "flex-end" }}
          navbar
        >
          <Nav className={styles.navigation} navbar>
            <NavItem>
              <NavLink exact className="nav-link" to="/">
                Dashboard
              </NavLink>
            </NavItem>
            <NavItem>
              <Link to="/ticket-form/create">
                <Button theme="success">Create Ticket</Button>
              </Link>
            </NavItem>

            <NavItem>
              <Button onClick={handleLogOut} outline theme="primary">
                Log Out
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
};

export default Navigation;
