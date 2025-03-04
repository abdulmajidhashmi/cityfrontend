// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
    apiKey: "AIzaSyCDp9qAEHgS8PUMbQaOfGrTcfCylHoyRAI",
    authDomain: "nanded-app.firebaseapp.com",
    projectId: "nanded-app",
    storageBucket: "nanded-app.firebasestorage.app",
    messagingSenderId: "79865379388",
    appId: "1:79865379388:web:c05919246302f28cd2e139",
    measurementId: "G-31BLNH6YL9"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, RecaptchaVerifier, signInWithPhoneNumber };