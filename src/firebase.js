// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, getDocs, collection } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvKNBDu2QYpfSqtzPHi8_5kpCL1NpTheI",
  authDomain: "proyecto-final-leyes.firebaseapp.com",
  projectId: "proyecto-final-leyes",
  storageBucket: "proyecto-final-leyes.firebasestorage.app",
  messagingSenderId: "563779025739",
  appId: "1:563779025739:web:78745473bf9af36fae86ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export async function getItems(){
  const querysnapshot = await getDocs(collection(db, "Items"));
  querysnapshot.forEach(doc => console.log(doc.id, " => ", doc.data()));
}