import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAL1XpcUlvxZOTFAEodoXyJhx-qotf-QJw",
  authDomain: "course-management-b0ca6.firebaseapp.com",
  projectId: "course-management-b0ca6",
  storageBucket: "course-management-b0ca6.firebasestorage.app",
  messagingSenderId: "187711269088",
  appId: "1:187711269088:web:860bce1d2686e193d14885",
  measurementId: "G-B3ZPX1HQDP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { app, db };
