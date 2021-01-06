import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6HHCfrUEGtU2-31oswfuPtPh3A45KYzI",
    authDomain: "chat-d9a40.firebaseapp.com",
    databaseURL: "https://chat-d9a40-default-rtdb.firebaseio.com",
    projectId: "chat-d9a40",
    storageBucket: "chat-d9a40.appspot.com",
    messagingSenderId: "586610792591",
    appId: "1:586610792591:web:d8cc289c155631bcf3f8fa",
    measurementId: "G-MK8CSVH28L"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
