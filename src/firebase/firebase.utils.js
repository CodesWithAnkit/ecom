import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCvBBOK4jNMkSItfWhvbYCTy1Moop5L4bo",
  authDomain: "ecom-4a46b.firebaseapp.com",
  databaseURL: "https://ecom-4a46b.firebaseio.com",
  projectId: "ecom-4a46b",
  storageBucket: "",
  messagingSenderId: "20995630903",
  appId: "1:20995630903:web:7f680a5f19065742099cb2",
  measurementId: "G-J59LVJXJ52"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
