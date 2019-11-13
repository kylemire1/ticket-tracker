import { useState, useEffect } from "react";

import firebase from "../firebase";

export const useProjects = projectId => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (!projectId) {
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
    } else {
      firebase
        .firestore()
        .collection("projects")
        .doc(projectId)
        .get()
        .then(doc => {
          if (doc.exists) {
            setProjects(doc.data());
          } else {
            console.error("Project");
          }
        });
    }
  }, [projectId]);

  return projects;
};
