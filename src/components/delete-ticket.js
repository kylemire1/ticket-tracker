import React from "react";
import { ModalHeader, ModalBody, ButtonGroup, Button } from "shards-react";

const DeleteTicket = props => {
  return (
    <>
      <ModalHeader>Are you sure you want to delete this ticket?</ModalHeader>
      <ModalBody>
        <ButtonGroup className="mx-auto" style={{ width: "100%" }}>
          <Button theme="primary">Yes</Button>
          <Button onClick={props.close} theme="light">
            No
          </Button>
        </ButtonGroup>
      </ModalBody>
    </>
  );
};

export default DeleteTicket;
