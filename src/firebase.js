// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getFirestore, collection} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyDPQKre-D9pWPtnxUpCZhLM6233aDEBPMg",

    authDomain: "crimedetails-16de8.firebaseapp.com",

    projectId: "crimedetails-16de8",

    storageBucket: "crimedetails-16de8.appspot.com",

    messagingSenderId: "566623595079",

    appId: "1:566623595079:web:0138e54e4e71daf7bb5f62"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const convictColRef = collection(db, 'convict');
export default convictColRef;
