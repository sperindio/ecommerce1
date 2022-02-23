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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return; //If the user is logged out, just return
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    //This if will check if the user exist already. If it DOES NOT exist, it will create one in the DB
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
