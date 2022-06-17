import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/storage";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCgwxRipfFF4GLAvcSRBTn0mh5Y52qC4DM",
  authDomain: "disney-clone-27a1e.firebaseapp.com",
  projectId: "disney-clone-27a1e",
  storageBucket: "disney-clone-27a1e.appspot.com",
  messagingSenderId: "812406989036",
  appId: "1:812406989036:web:2b40365aa8c1553e6305c9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider(); //dodanie ekranu logowania
provider.setCustomParameters({
  prompt: "select_account",
});

//const storage = firebase.storage().ref(); //trzymanie filmów obrazów
export { auth, provider };
export default db;
