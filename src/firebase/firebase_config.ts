// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLHFgPMEiiprRqHwH8NbwtAG3vhJDKQo0",
  authDomain: "ieee-site-d2a99.firebaseapp.com",
  projectId: "ieee-site-d2a99",
  storageBucket: "ieee-site-d2a99.appspot.com",
  messagingSenderId: "943093198822",
  appId: "1:943093198822:web:925ede70e8994a53e37027",
  measurementId: "G-F8ELYE9YZX"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app