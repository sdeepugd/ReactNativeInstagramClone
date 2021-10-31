// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA52FMOrIJ-fTFkWOOAa9m99FtW07UkH0U",
  authDomain: "instagamtest-cd8eb.firebaseapp.com",
  projectId: "instagamtest-cd8eb",
  storageBucket: "instagamtest-cd8eb.appspot.com",
  messagingSenderId: "1021702939110",
  appId: "1:1021702939110:web:249480a630da26fa687627",
  measurementId: "G-9S9BT9Y2SX"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase