import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAoYSrSpP7k0yJORnrc-Kna_PqoV8W7usY",
  authDomain: "whatschat-1b546.firebaseapp.com",
  projectId: "whatschat-1b546",
  storageBucket: "whatschat-1b546.firebasestorage.app",
  messagingSenderId: "212045522859",
  appId: "1:212045522859:web:c74f31876537d3f9f754ee",
  measurementId: "G-31K5K1Y68L"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()
export const db = getFirestore()