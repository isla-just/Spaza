// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiP5feraBAHWc827sbeCjylRfsp2FVBcc",
  authDomain: "spaza-b63b9.firebaseapp.com",
  projectId: "spaza-b63b9",
  storageBucket: "spaza-b63b9.appspot.com",
  messagingSenderId: "211957192726",
  appId: "1:211957192726:web:10dff32af3c34fcada3d37",
  measurementId: "G-C9QX5RZ5S3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);