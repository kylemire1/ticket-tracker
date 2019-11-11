import { useState, useEffect } from "react";

import firebase from "../firebase";

export const useTickets = (projectId = null, ticketId = null) => {
  const [tickets, setTickets] = useState([]);

  let comparison = ">";
  let value = "";
  if (projectId) {
    comparison = "==";
    value = projectId;
  }

  useEffect(() => {
    if (!ticketId) {
      const unsubscribe = firebase
        .firestore()
        .collection("tickets")
        .where("project", comparison, value)
        .onSnapshot(snapshot => {
          const newTickets = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));

          setTickets(newTickets);
        });

      return () => unsubscribe();
    } else {
      firebase
        .firestore()
        .collection("tickets")
        .doc(ticketId)
        .get()
        .then(doc => {
          if (doc.exists) {
            setTickets(doc.data());
          } else {
            console.error("That ticket does not exist");
          }
        });
    }
  }, [comparison, value, ticketId]);

  return tickets;
};
