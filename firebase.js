import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC5j9nYTHPCRccEwOkI9PAVd9wem4q_0Vc",
  authDomain: "library-management-syste-5c8d2.firebaseapp.com",
  projectId: "library-management-syste-5c8d2",
  storageBucket: "library-management-syste-5c8d2.firebasestorage.app",
  messagingSenderId: "437172852971",
  appId: "1:437172852971:web:05a78589426bde89fa06ae",
  measurementId: "G-HH07XPK4W9"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export { db };