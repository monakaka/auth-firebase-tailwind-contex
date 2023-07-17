// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDwVoubITt8WuGK_PmDdT4o_kVTBSCwcKY",
    authDomain: "auth-firebase-tailwind-c-58c46.firebaseapp.com",
    projectId: "auth-firebase-tailwind-c-58c46",
    storageBucket: "auth-firebase-tailwind-c-58c46.appspot.com",
    messagingSenderId: "982324183808",
    appId: "1:982324183808:web:4f86b1329c142e995d29e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;