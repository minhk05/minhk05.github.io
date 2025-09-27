import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDdzqUMHbGP9tjasgAP8dLc7NvWtUF87ys",
  authDomain: "minblogmain.firebaseapp.com",
  projectId: "minblogmain",
  storageBucket: "minblogmain.firebasestorage.app",
  messagingSenderId: "529992415768",
  appId: "1:529992415768:web:d8cb502c370529722be16d",
  measurementId: "G-9SX7KRWJDH"
};
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

// Initialize Firebase
const db = getFirestore(app);

export { auth, provider, db };
