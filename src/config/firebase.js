// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6w-wB7lBWvMtQwMvAcz1SD8QQXEVmfvE",
  authDomain: "fir-test-fe5cf.firebaseapp.com",
  projectId: "fir-test-fe5cf",
  storageBucket: "fir-test-fe5cf.appspot.com",
  messagingSenderId: "883485594063",
  appId: "1:883485594063:web:3181cd02fb435c23b602ba",
  measurementId: "G-2JYZZ3YN2J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);