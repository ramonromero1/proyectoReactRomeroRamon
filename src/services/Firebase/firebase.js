import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBKyMxwWil6gljEaS0GYOyy16JDkE1S9YM",
  authDomain: "indumentaria-lazaro.firebaseapp.com",
  projectId: "indumentaria-lazaro",
  storageBucket: "indumentaria-lazaro.appspot.com",
  messagingSenderId: "303460578526",
  appId: "1:303460578526:web:164777083ab6b02679fe4f",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
