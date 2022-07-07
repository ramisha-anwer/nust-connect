import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDtsHwedexosKeloz1Gvqp6R7pMFYTwds8",
    authDomain: "nust-connect.firebaseapp.com",
    projectId: "nust-connect",
    storageBucket: "nust-connect.appspot.com",
    messagingSenderId: "115645770620",
    appId: "1:115645770620:web:f3b9a4e43bb50bb2fe92f9"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export {auth,provider,storage};
  export default db;
