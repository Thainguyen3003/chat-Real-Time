import firebase from "firebase/compat/app";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-60q1Zss9qyvgC6JqIfxgbRf_ztgZrsg",
  authDomain: "chat-app-21e21.firebaseapp.com",
  projectId: "chat-app-21e21",
  storageBucket: "chat-app-21e21.appspot.com",
  messagingSenderId: "968166601710",
  appId: "1:968166601710:web:d4b6c50d9270194c6854ff",
  measurementId: "G-EV4MNMSNKL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const authentication = getAuth(app);

export { authentication };
export default firebase;
