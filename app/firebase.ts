// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDo7VJTDX8n_RGvX2zu8v1DgkS-J1ZcvJM",
  authDomain: "easydesign-e0dd3.firebaseapp.com",
  projectId: "easydesign-e0dd3",
  storageBucket: "gs://easydesign-e0dd3.appspot.com/",
  messagingSenderId: "1008003536258",
  appId: "1:1008003536258:web:b090a4f86c1d4670572b9b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
