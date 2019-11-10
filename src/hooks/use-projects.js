import { useState, useEffect } from "react";

import firebase from "../firebase";

export const useProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("projects")
      .onSnapshot(snapshot => {
        const newProjects = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setProjects(newProjects);
      });

    return () => unsubscribe();
  }, []);

  return projects;
};
