import React from "react";

import Ticket from "./ticket";
import { useTickets } from "../hooks/use-tickets";

const AllProjects = () => {
  const tickets = useTickets();

  return (
    <>
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
        />
      ))}
    </>
  );
};

export default AllProjects;
