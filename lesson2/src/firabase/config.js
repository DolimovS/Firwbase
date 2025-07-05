import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDy7hVBkmPZTzC8b8h8QMeAlZf9gtNiLHw",
  authDomain: "test-app2-7337f.firebaseapp.com",
  projectId: "test-app2-7337f",
  storageBucket: "test-app2-7337f.firebasestorage.app",
  messagingSenderId: "138956403366",
  appId: "1:138956403366:web:ad5c05ac3a5254f627ba67",
  measurementId: "G-SEM72ZG6CB"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 
export const db = getFirestore(app)