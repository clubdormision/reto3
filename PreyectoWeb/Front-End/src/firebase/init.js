import firebase from 'firebase'
import firestore from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDUSx5rkAiILVGDJgsBrKvA6FxQPvmGHTo",
    authDomain: "reto3-51c42.firebaseapp.com",
    projectId: "reto3-51c42",
    storageBucket: "reto3-51c42.appspot.com",
    messagingSenderId: "48162698874",
    appId: "1:48162698874:web:fb33067d056bd0fcb96dc3",
    measurementId: "G-DW5D7M44LW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots: true});

export default firebaseApp.firestore();
