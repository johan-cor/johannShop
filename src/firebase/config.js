// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAaqkkFO-OKhsxFUPxMKMg3pve53bcsEPQ",
    authDomain: "johannshop-98106.firebaseapp.com",
    projectId: "johannshop-98106",
    storageBucket: "johannshop-98106.firebasestorage.app",
    messagingSenderId: "463273344316",
    appId: "1:463273344316:web:bab656273b22e951b5f239"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);;
export const db = getFirestore(app)