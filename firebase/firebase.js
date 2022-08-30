// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBnE2SOGhC1cWbmHF1j8WOa67BOK9HQxe4",
    authDomain: "uploadbase64image.firebaseapp.com",
    projectId: "uploadbase64image",
    storageBucket: "uploadbase64image.appspot.com",
    messagingSenderId: "425369153484",
    appId: "1:425369153484:web:b8293c8442d00ed6047769",
    measurementId: "G-SV6P9XY29R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
