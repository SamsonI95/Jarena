import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5_uZqcGwFtfp6p1swNBsCHpJDCx73vuY",
  authDomain: "jarena-backend.firebaseapp.com",
  projectId: "jarena-backend",
  storageBucket: "jarena-backend.appspot.com",
  messagingSenderId: "709959270033",
  appId: "1:709959270033:web:bce468a14c119d860e0930",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);
export const db = getFirestore();
export const storage = getStorage(app);
