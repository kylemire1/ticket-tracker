import React from "react";
import { Container } from "shards-react";

const Sidebar = () => {
  return (
    <aside className="px-0 col-12 col-md-3 col-lg-2">
      <Container>
        <h2>Projects</h2>
        <ul>
          <li>
            <a href="/">Project 1</a>
          </li>
          <li>
            <a href="/">Project 2</a>
          </li>
          <li>
            <a href="/">Project 3</a>
          </li>
          <li>
            <a href="/">Project 4</a>
          </li>
        </ul>
      </Container>
    </aside>
  );
};

export default Sidebar;
