import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCwy6BG6EUay5pvkNh6_Fg-6Zz2exL5t64",
  authDomain: "crwn-db-4e424.firebaseapp.com",
  projectId: "crwn-db-4e424",
  storageBucket: "crwn-db-4e424.appspot.com",
  messagingSenderId: "197082671715",
  appId: "1:197082671715:web:53a4bf6281c7ee6b44a656",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
