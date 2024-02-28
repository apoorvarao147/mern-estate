// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-f0012.firebaseapp.com",
  projectId: "mern-estate-f0012",
  storageBucket: "mern-estate-f0012.appspot.com",
  messagingSenderId: "455767964054",
  appId: "1:455767964054:web:950fc72cb25063e99345b7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);