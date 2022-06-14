// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDLzMaJnb80XYAm9Z92JpZSgWwzMiwzgGQ",
    authDomain: "chatterbox-e6194.firebaseapp.com",
    projectId: "chatterbox-e6194",
    storageBucket: "chatterbox-e6194.appspot.com",
    messagingSenderId: "162010266178",
    appId: "1:162010266178:web:564f2ed6d136984bd94bdb",
    measurementId: "G-X7QV6L5M8N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
