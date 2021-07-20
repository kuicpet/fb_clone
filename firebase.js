import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB8unmXkAK8G3RWUpXeZDJISivEjHqyJG4",
    authDomain: "facebook-clone-6c8b0.firebaseapp.com",
    projectId: "facebook-clone-6c8b0",
    storageBucket: "facebook-clone-6c8b0.appspot.com",
    messagingSenderId: "471639454677",
    appId: "1:471639454677:web:7e7a0ed659c28fe71b035c"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();
  const storage = firebase.storage

  export { db, storage };