// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCrq7B7TkKz8Jf8rKMPo3Wo0TsYALlWP6M",
    authDomain: "e-budget-bazar.firebaseapp.com",
    projectId: "e-budget-bazar",
    storageBucket: "e-budget-bazar.appspot.com",
    messagingSenderId: "396560742621",
    appId: "1:396560742621:web:979ca87d2c06b9376f0334",
    measurementId: "G-3MKZ193WQ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);

export default auth;