import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBhQtZSGYYkYGmJyycDsBq9Q1r48Zx3umE",
    authDomain: "coffeehouse-f29b9.firebaseapp.com",
    projectId: "coffeehouse-f29b9",
    storageBucket: "coffeehouse-f29b9.appspot.com",
    messagingSenderId: "534288531562",
    appId: "1:534288531562:web:fada61f0f49930f01c8a13"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export {firebase}