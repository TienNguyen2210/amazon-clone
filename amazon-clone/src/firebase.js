import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBtjNYIUI0A_CARiajonJxIO9I9eZyjOY8",
    authDomain: "clone-4a2e9.firebaseapp.com",
    projectId: "clone-4a2e9",
    storageBucket: "clone-4a2e9.appspot.com",
    messagingSenderId: "504673308233",
    appId: "1:504673308233:web:c559a82fcdcff442c4f998",
    measurementId: "G-RH3EWJY5SP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};