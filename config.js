import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCyNsCMvLarQ1VcYS5AScIk23zkWR9b9qw",
    authDomain: "booksanta-14fc0.firebaseapp.com",
    projectId: "booksanta-14fc0",
    storageBucket: "booksanta-14fc0.appspot.com",
    messagingSenderId: "126007151155",
    appId: "1:126007151155:web:4bd899c41b1c8f4f213146"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();