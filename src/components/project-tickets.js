import React, { useEffect, useState } from "react";

import firebase from "../firebase";
import { useTickets } from "../hooks/use-tickets";
import Ticket from "./ticket";

const ProjectTickets = props => {
  const [project, setProject] = useState("");
  const { id } = props.match.params;

  useEffect(() => {
    firebase
      .firestore()
      .collection("projects")
      .doc(id)
      .get()
      .then(doc => {
        if (doc.exists) {
          setProject(doc.data().name);
        } else {
          console.error("That project does not exist");
        }
      });
  }, [id]);

  const tickets = useTickets(id);

  return (
    <>
      <span className="small-title">{project ? project : "⠀"}</span>
      <h1>Dashboard</h1>
      {tickets.map(ticket => (
        <Ticket
          key={ticket.id}
          id={ticket.id}
          priority={ticket.priority}
          title={ticket.title}
          description={ticket.description}
          createdBy={ticket.createdBy}
        />
      ))}
    </>
  );
};

export default ProjectTickets;
