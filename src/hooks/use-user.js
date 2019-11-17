import { useState, useEffect } from "react";

import firebase from "../firebase";

export const useUser = userId => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (userId) {
      firebase
        .firestore()
        .collection("users")
        .doc(userId)
        .get()
        .then(doc => {
          if (doc.exists) {
            setUser(doc.data());
          } else {
            console.error("User does not exist");
          }
        });
    }
  }, [userId]);

  return user;
};
