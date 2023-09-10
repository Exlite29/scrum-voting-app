import firebase from "firebase/compat/app";
import "firebase/compat/database";
const firebaseConfig = {
  apiKey: "AIzaSyB0uGsVCBgUzYIVqqRlusT-IYpkS7OQvhM",
  authDomain: "scrum-voting-app-a6a68.firebaseapp.com",
  databaseURL:
    "https://scrum-voting-app-a6a68-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "scrum-voting-app-a6a68",
  storageBucket: "scrum-voting-app-a6a68.appspot.com",
  messagingSenderId: "1096524424077",
  appId: "1:1096524424077:web:5743ab9a12bbd6f5de53c4",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const database = firebase.database();

export default firebase;
