// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBERXfi6gP1tyPO2afNMVvK15NVD3Wpdfk",
  authDomain: "protfileo-ac1e5.firebaseapp.com",
  projectId: "protfileo-ac1e5",
  storageBucket: "protfileo-ac1e5.appspot.com",
  messagingSenderId: "871276663532",
  appId: "1:871276663532:web:4033b724cd9b6c61b78bc9",
  measurementId: "G-E7WKQBKD37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app