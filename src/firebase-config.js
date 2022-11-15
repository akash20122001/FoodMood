import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "@firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDJ_XrJxWZQCrv1cD-a6zXVjp2Kkpsbt8c",
  authDomain: "foodmood-cced8.firebaseapp.com",
  projectId: "foodmood-cced8",
  storageBucket: "foodmood-cced8.appspot.com",
  messagingSenderId: "9087574495",
  appId: "1:9087574495:web:a189b178ec815534fd246a",
  measurementId: "G-WBWS91G75V"
};


const app = initializeApp(firebaseConfig)

export const db = getFirestore(app);
export const auth = getAuth(app)