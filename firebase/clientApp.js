// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";

let firebaseConfig = {
  apiKey: "AIzaSyAamm05PDvYaBM8aQqBXyGRZ6UVe2XJcGw",
  authDomain: "ettarra-ff769.firebaseapp.com",
  projectId: "ettarra-ff769",
  storageBucket: "ettarra-ff769.appspot.com",
  messagingSenderId: "305619923143",
  appId: "1:305619923143:web:f10aa73193a60ab2218ee2",
  measurementId: "G-0J2C82XE8F",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export default app;
