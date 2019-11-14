import React, { useState } from "react";

import Ticket from "./ticket";
import { useTickets } from "../hooks/use-tickets";
import Modal from "./modal";
import DeleteTicket from "./delete-ticket";

const AllProjects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [deletingTicket, setDeletingTicket] = useState(null);
  const tickets = useTickets();

  const handleModal = ticketId => {
    setModalOpen(!modalOpen);
    setDeletingTicket(ticketId);
  };

  return (
    <>
      <Modal toggle={() => handleModal()} open={modalOpen}>
        <DeleteTicket ticketId={deletingTicket} close={() => handleModal()} />
      </Modal>
      <span className="small-title">All Projects</span>
      <h1>Dashboard</h1>
      {tickets.map(ticket => (
        <Ticket
          key={ticket.id}
          id={ticket.id}
          priority={ticket.priority}
          title={ticket.title}
          description={ticket.description}
          createdBy={ticket.createdBy}
          projectId={ticket.project}
          handleModal={handleModal}
        />
      ))}
    </>
  );
};

export default AllProjects;
