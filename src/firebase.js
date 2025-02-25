import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVCcD9FvinRKjrulFXd9UeHGAfp87cdu0",
  authDomain: "resume-b802d.firebaseapp.com",
  projectId: "resume-b802d",
  storageBucket: "resume-b802d.firebasestorage.app",
  messagingSenderId: "815150488326",
  appId: "1:815150488326:web:0bcc01fb392bba9910dc87",
  measurementId: "G-EP66KD0S7Z"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db, collection, addDoc };