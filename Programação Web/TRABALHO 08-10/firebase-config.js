// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCozLClgf0HNr6-n2dQx-mziLYIVUvi80E",
  authDomain: "tentativa7-a1002.firebaseapp.com",
  projectId: "tentativa7-a1002",
  storageBucket: "tentativa7-a1002.firebasestorage.app",
  messagingSenderId: "323372343509",
  appId: "1:323372343509:web:3bb114f42f744ffcae825c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
