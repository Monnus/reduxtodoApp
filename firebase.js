// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5CHiIjWGoQCHoaH8ozMUvMu3UOSn5l1A",
  authDomain: "reduxtodoapp-a6020.firebaseapp.com",
  projectId: "reduxtodoapp-a6020",
  storageBucket: "reduxtodoapp-a6020.appspot.com",
  messagingSenderId: "307001728167",
  appId: "1:307001728167:web:7a26bdf1346814ac06cf82",
  databaseURL:"https://reduxtodoapp-a6020-default-rtdb.firebaseio.com"

};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database=getDatabase(app);