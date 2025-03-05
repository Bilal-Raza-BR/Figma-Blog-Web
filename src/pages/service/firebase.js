// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_wrYzCZjaawuyXYR4Uat5OXHEhGQeVMg",
  authDomain: "fir-authentication-fe163.firebaseapp.com",
  databaseURL: "https://fir-authentication-fe163-default-rtdb.firebaseio.com/",
  projectId: "fir-authentication-fe163",
  storageBucket: "fir-authentication-fe163.firebasestorage.app",
  messagingSenderId: "61748925996",
  appId: "1:61748925996:web:32b11584234c0600c7a389"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export {app,database}