import React from "react";

import Form from "./form";

const TicketForm = props => {
  const { verb } = props.match.params;

  return (
    <>
      <span className="small-title">{verb}</span>
      <h1>Ticket Form</h1>
      <Form />
    </>
  );
};

export default TicketForm;
