// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOXYq_OATvT329pwom0f-AMfS1LYEcUtA",
  authDomain: "memory-d0cb3.firebaseapp.com",
  projectId: "memory-d0cb3",
  storageBucket: "memory-d0cb3.appspot.com",
  messagingSenderId: "148548407255",
  appId: "1:148548407255:web:83d79a08f6c9fc5d368592",
  measurementId: "G-YT1VSZ6DFW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const  db = getFirestore(app);