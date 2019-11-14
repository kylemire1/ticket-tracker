import React from "react";
import { ModalHeader, ModalBody, ButtonGroup, Button } from "shards-react";

import firebase from "../firebase";

const DeleteTicket = props => {
  const deleteTicket = ticketId => {
    firebase
      .firestore()
      .collection("tickets")
      .doc(ticketId)
      .delete()
      .then(() => {
        props.close();
      })
      .catch(error => {
        console.error(`Error removing document: ${error}`);
      });
  };

  return (
    <>
      <ModalHeader>Are you sure you want to delete this ticket?</ModalHeader>
      <ModalBody>
        <ButtonGroup className="mx-auto" style={{ width: "100%" }}>
          <Button onClick={() => deleteTicket(props.ticketId)} theme="primary">
            Yes
          </Button>
          <Button onClick={props.close} theme="light">
            No
          </Button>
        </ButtonGroup>
      </ModalBody>
    </>
  );
};

export default DeleteTicket;
