import { initializeApp } from 'firebase/app';
import 'firebase/storage';  
import {
GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
  } from "firebase/auth";
  import {
    getFirestore,
    
  } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDtsHwedexosKeloz1Gvqp6R7pMFYTwds8",
  authDomain: "nust-connect.firebaseapp.com",
  projectId: "nust-connect",
  storageBucket: "nust-connect.appspot.com",
  messagingSenderId: "115645770620",
  appId: "1:115645770620:web:f3b9a4e43bb50bb2fe92f9"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider , storage, firebaseApp};
export default db;
