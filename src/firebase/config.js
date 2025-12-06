import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDf7qhjQXohrulJyNww3dfsZvhZEwpTBS0",
    authDomain: "react-items-fran.firebaseapp.com",
    projectId: "react-items-fran",
    storageBucket: "react-items-fran.firebasestorage.app",
    messagingSenderId: "368515809058",
    appId: "1:368515809058:web:cd690b659a72ac66256f7b"
};

export const app = initializeApp(firebaseConfig);