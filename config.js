import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAR90o4G56xMAJkVkpvoLOdtu9MEJHSewg",
    authDomain: "team-voting-272ce.firebaseapp.com",
    databaseURL: "https://team-voting-272ce-default-rtdb.firebaseio.com",
    projectId: "team-voting-272ce",
    storageBucket: "team-voting-272ce.appspot.com",
    messagingSenderId: "155717413913",
    appId: "1:155717413913:web:e3b349fb09ceed82614e88"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

export default firebase.database();