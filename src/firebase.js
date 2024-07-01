// src/firebase.js
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA8cUgdZ1aEKFWd3I4Hd0McMIZgNpFNt8s",
    authDomain: "mdev1005assignment2.firebaseapp.com",
    projectId: "mdev1005assignment2",
    storageBucket: "mdev1005assignment2.appspot.com",
    messagingSenderId: "240428229071",
    appId: "1:240428229071:web:6a3bc2d56e2471245772ba",
    measurementId: "G-5GT8Z1DD2J"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase;