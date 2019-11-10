import React from "react";
import { Link } from "react-router-dom";

import styles from "./sidebar.module.scss";
import { useProjects } from "../hooks/use-projects";

const Sidebar = () => {
  const projects = useProjects();

  return (
    <aside className={`col-12 col-md-3 col-lg-2 ${styles.sidebar}`}>
      <h2 className="small-title">Projects</h2>
      <ul className={styles.sidebarList}>
        {projects.map(project => (
          <li key={project.id}>
            <Link to={`/projects/${project.id}`}>{project.name}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
