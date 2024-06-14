// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyApfQweCffKwLqsSkITv_PJXYLDsiaCcMI",
//   authDomain: "bwood-a2021.firebaseapp.com",
//   projectId: "bwood-a2021",
//   storageBucket: "bwood-a2021.appspot.com",
//   messagingSenderId: "988636814502",
//   appId: "1:988636814502:web:2dbb9a46e917bd55d42867",
//   measurementId: "G-GFF8LC74FZ",
// };

const firebaseConfig = {
  apiKey: "AIzaSyD_S6BV69I0SvxuWbK6UgX5jGUc4ncRyJE",
  authDomain: "furniture-ec000.firebaseapp.com",
  projectId: "furniture-ec000",
  storageBucket: "furniture-ec000.appspot.com",
  messagingSenderId: "602118249360",
  appId: "1:602118249360:web:c704eb2ca1c8af9950f115",
  measurementId: "G-3TF5Q2FMG7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
