// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqZ7CzMJeZSHIhAF-Wyk0oi0wHtPYaNHQ",
  authDomain: "react-disney-plus-app-24578.firebaseapp.com",
  projectId: "react-disney-plus-app-24578",
  storageBucket: "react-disney-plus-app-24578.appspot.com",
  messagingSenderId: "840898157682",
  appId: "1:840898157682:web:1f51dedd63023bd26f36eb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// initializeApp으로 firebase 실행시키고 밖에서 사용해야한다.
export default app;
