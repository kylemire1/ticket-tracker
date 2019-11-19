import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import axios from "axios";

const firebaseConfig = {
  apiKey: "AIzaSyCcKlsmoCMGjUnNlkJt4yE6nfYRqVN0MjA",
  authDomain: "ticket-tracker-ccb7a.firebaseapp.com",
  databaseURL: "https://ticket-tracker-ccb7a.firebaseio.com",
  projectId: "ticket-tracker-ccb7a",
  storageBucket: "ticket-tracker-ccb7a.appspot.com",
  messagingSenderId: "105587002100",
  appId: "1:105587002100:web:1058ab180f42d57290eca1"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
