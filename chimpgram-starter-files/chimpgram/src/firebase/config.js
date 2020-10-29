import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA2M8nEqIRFN-IGiv49BvM6lAy_tvFxmUk",
    authDomain: "chimpgram.firebaseapp.com",
    databaseURL: "https://chimpgram.firebaseio.com",
    projectId: "chimpgram",
    storageBucket: "chimpgram.appspot.com",
    messagingSenderId: "833157145534",
    appId: "1:833157145534:web:b433ba26ca3a402c330fef"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
