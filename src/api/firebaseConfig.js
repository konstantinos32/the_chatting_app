// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFcx6Nd5zRvmcHsysSXAf5T1wyNUx6JoE",
  authDomain: "the-chatting-app-35ac4.firebaseapp.com",
  projectId: "the-chatting-app-35ac4",
  storageBucket: "the-chatting-app-35ac4.appspot.com",
  messagingSenderId: "343722227105",
  appId: "1:343722227105:web:86c2687ce90c72e3a547e0",
  measurementId: "G-9WSGQFC1QB"
};
//export function InitializeFirebaseConfig() {
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
const analytics = getAnalytics(app);

//}