import { useState, useEffect } from "react";

import firebase from "../firebase";

export const useTickets = projectId => {
  const [tickets, setTickets] = useState([]);

  let comparison = ">";
  let value = "";
  if (projectId) {
    comparison = "==";
    value = projectId;
  }

  useEffect(() => {
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
  }, [comparison, value]);

  return tickets;
};
