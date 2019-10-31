import React from "react";

import Ticket from "../ticket/ticket";

const AllProjects = () => {
  return (
    <>
      <h1>All Projects</h1>
      <Ticket priority="High" />
      <Ticket priority="Low" />
      <Ticket priority="Medium" />
    </>
  );
};

export default AllProjects;
