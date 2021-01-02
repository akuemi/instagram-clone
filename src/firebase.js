import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDVC5SnGE1A5DID-q7QwaNJisL0xo1QOoI",
  authDomain: "instagram-clone-react-f8fa9.firebaseapp.com",
  databaseURL:
    "https://instagram-clone-react-f8fa9-default-rtdb.firebaseio.com",
  projectId: "instagram-clone-react-f8fa9",
  storageBucket: "instagram-clone-react-f8fa9.appspot.com",
  messagingSenderId: "635760494264",
  appId: "1:635760494264:web:24321d85a2397a5969d64d",
  measurementId: "G-MCR80F89ZZ",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
