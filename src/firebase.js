import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCx51VZ3klpYXhzNhnzrI1yXD4h7YXl-1U",
    authDomain: "user-auth-redux-live.firebaseapp.com",
    projectId: "user-auth-redux-live",
    storageBucket: "user-auth-redux-live.appspot.com",
    messagingSenderId: "731694220336",
    appId: "1:731694220336:web:7113c1f7733b8342f859f5",
    measurementId: "G-KQ05SRK044"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};