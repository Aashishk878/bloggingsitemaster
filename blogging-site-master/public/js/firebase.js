import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyC9bKfnAcpX4PvuOi_4L0CEenkUEqZsjHo",
    authDomain: "blogging-website-ankit.firebaseapp.com",
    projectId: "blogging-website-ankit",
    storageBucket: "blogging-website-ankit.appspot.com",
    messagingSenderId: "23365300631",
    appId: "1:23365300631:web:9ca8d09c22eeb84b2014d2"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log("DB:", db);

export { db };