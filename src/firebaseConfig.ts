// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBgwlLp64LFIWYFj6cA-Cyo3nu6e-iRaDs",
  authDomain: "star-70120.firebaseapp.com",
  projectId: "star-70120",
  storageBucket: "star-70120.appspot.com",
  messagingSenderId: "617275703624",
  appId: "1:617275703624:web:abcd1234efgh5678"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };