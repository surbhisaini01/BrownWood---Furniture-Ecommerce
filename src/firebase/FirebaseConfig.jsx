// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApfQweCffKwLqsSkITv_PJXYLDsiaCcMI",
  authDomain: "bwood-a2021.firebaseapp.com",
  projectId: "bwood-a2021",
  storageBucket: "bwood-a2021.appspot.com",
  messagingSenderId: "988636814502",
  appId: "1:988636814502:web:2dbb9a46e917bd55d42867",
  measurementId: "G-GFF8LC74FZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
