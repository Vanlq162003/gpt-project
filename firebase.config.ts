// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoigpONs9NMX3w2Tkh9N1qg2OOmbWJT2Y",
  authDomain: "management-user-gpt-chat.firebaseapp.com",
  projectId: "management-user-gpt-chat",
  storageBucket: "management-user-gpt-chat.appspot.com",
  messagingSenderId: "577005295510",
  appId: "1:577005295510:web:3f5c9038d73ab9f336afb7",
  measurementId: "G-6PMR250DST"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);