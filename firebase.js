// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBeAOJ5TDHYvmIdEjidjCqpjFq3kT3Q8Pk",
    authDomain: "routeco-a024b.firebaseapp.com",
    projectId: "routeco-a024b",
    storageBucket: "routeco-a024b.appspot.com",
    messagingSenderId: "203849245299",
    appId: "1:203849245299:web:c50e3ead48ac83dfb58006"
  };

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { auth };