// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase,set,ref} from "firebase/database"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const app = initializeApp({
    apiKey: "AIzaSyA5CHiIjWGoQCHoaH8ozMUvMu3UOSn5l1A",
    authDomain: "reduxtodoapp-a6020.firebaseapp.com",
    databaseURL: "https://reduxtodoapp-a6020-default-rtdb.firebaseio.com",
    projectId: "reduxtodoapp-a6020",
    storageBucket: "reduxtodoapp-a6020.appspot.com",
    messagingSenderId: "307001728167",
    appId: "1:307001728167:web:7a26bdf1346814ac06cf82",
    databaseURL:"https://reduxtodoapp-a6020-default-rtdb.firebaseio.com"
  });
export default app
export const db= getDatabase()
function writeUserData(user,number,surname,gender){
  const reference=ref(db,"user"+1)

  set(reference,{
  name:user,
  surname,
  number,
  gender
  });
}

writeUserData("logo",1233445,"golder","male");
writeUserData("super",143434,"max","male");

