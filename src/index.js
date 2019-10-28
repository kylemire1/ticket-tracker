import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyCcKlsmoCMGjUnNlkJt4yE6nfYRqVN0MjA",
  authDomain: "ticket-tracker-ccb7a.firebaseapp.com",
  databaseURL: "https://ticket-tracker-ccb7a.firebaseio.com",
  projectId: "ticket-tracker-ccb7a",
  storageBucket: "ticket-tracker-ccb7a.appspot.com",
  messagingSenderId: "105587002100",
  appId: "1:105587002100:web:1058ab180f42d57290eca1"
});

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
