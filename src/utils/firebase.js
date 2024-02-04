// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwEa0wP2s1Wdo87Tg51rBdWbu84H32KcI",
  authDomain: "netflix-proect.firebaseapp.com",
  projectId: "netflix-proect",
  storageBucket: "netflix-proect.appspot.com",
  messagingSenderId: "665145963154",
  appId: "1:665145963154:web:7189e7b4c8554aec252c4b",
  measurementId: "G-47P2335RBS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);