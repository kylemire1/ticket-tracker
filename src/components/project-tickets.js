import React, { useEffect, useState } from "react";

import firebase from "../firebase";
import { useTickets } from "../hooks/use-tickets";
import Ticket from "./ticket";
import Modal from "./modal";
import DeleteTicket from "./delete-ticket";

const ProjectTickets = props => {
  const [modalOpen, setModalOpen] = useState(false);
  const [project, setProject] = useState("");
  const [deletingTicket, setDeletingTicket] = useState(null);
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

  const handleModal = ticketId => {
    setModalOpen(!modalOpen);
    setDeletingTicket(ticketId);
  };

  return (
    <>
      <Modal toggle={handleModal} open={modalOpen}>
        <DeleteTicket ticketId={deletingTicket} close={handleModal} />
      </Modal>
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
          handleModal={handleModal}
        />
      ))}
    </>
  );
};

export default ProjectTickets;
