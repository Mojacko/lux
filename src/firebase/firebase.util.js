import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAXSP1qubAMrJgZ0C7g0WS5cQlStE3Msqs",
    authDomain: "lux-db-5b88b.firebaseapp.com",
    databaseURL: "https://lux-db-5b88b.firebaseio.com",
    projectId: "lux-db-5b88b",
    storageBucket: "lux-db-5b88b.appspot.com",
    messagingSenderId: "507738326947",
    appId: "1:507738326947:web:faf44dafa104273ee37c16",
    measurementId: "G-JDSW1K7CWR",
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;