// Import Firebase (CDN version)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

// Your config (from Firebase)
const firebaseConfig = {
  apiKey: "AIzaSyCMGJv8WLLMU0VOz6V0RwyRbhCZE9Fr7z4",
  authDomain: "gaadiwala-8b317.firebaseapp.com",
  projectId: "gaadiwala-8b317",
  storageBucket: "gaadiwala-8b317.firebasestorage.app",
  messagingSenderId: "467549905486",
  appId: "1:467549905486:web:97190620eacb64e7bd991f",
  measurementId: "G-4BZ0RQ40LD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export
export { app };