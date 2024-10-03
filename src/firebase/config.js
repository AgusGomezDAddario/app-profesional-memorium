import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, query, getDocs } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB7nDoLKJzUAzENGprhRYYjTxe8Giefxcw",
    authDomain: "tpfinal-395c6.firebaseapp.com",
    projectId: "tpfinal-395c6",
    storageBucket: "tpfinal-395c6.appspot.com",
    messagingSenderId: "872329099948",
    appId: "1:872329099948:web:1e7ebf6bc0552e321c3d09",
    measurementId: "G-S83BF28HGX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

export default async function fetchScores() {
    const scoreRef = collection(db, 'score');
    const itemsRef = query(scoreRef);
    const resp = await getDocs(itemsRef);

    const data = resp.docs.map((doc) => doc.data());

    resp.docs.forEach((doc) => {
        console.log(doc.data());
    });
};