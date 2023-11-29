import {getApp, getApps, initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getFunctions } from "firebase/functions"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDvffy9JDbar6xpFi8w738oLcDI6CVJGEE",
    authDomain: "saas-translator-app-ec76a.firebaseapp.com",
    projectId: "saas-translator-app-ec76a",
    storageBucket: "saas-translator-app-ec76a.appspot.com",
    messagingSenderId: "508319278887",
    appId: "1:508319278887:web:a0d99822abce140ed36b02"
  };

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { db, auth, functions };