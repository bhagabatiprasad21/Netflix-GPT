// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcJGZh88XzYpvBOTQuaFzF2daT_Sv2llY",
  authDomain: "netflix-gpt-389b6.firebaseapp.com",
  projectId: "netflix-gpt-389b6",
  storageBucket: "netflix-gpt-389b6.appspot.com",
  messagingSenderId: "227282215092",
  appId: "1:227282215092:web:449cefd3a3206f0173f7e1",
  measurementId: "G-FGEE596KF5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
