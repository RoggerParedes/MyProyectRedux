import firebase from 'firebase/app'
import 'firebase/auth'

let firebaseConfig = {
    apiKey: "AIzaSyAL3oTOf2kvy8d2zyFTaEgtbv6dk20NFzI",
    authDomain: "proyectredux0923.firebaseapp.com",
    databaseURL: "https://proyectredux0923.firebaseio.com",
    projectId: "proyectredux0923",
    storageBucket: "proyectredux0923.appspot.com",
    messagingSenderId: "464637919384",
    appId: "1:464637919384:web:a2864495d5d69ed4c290ed",
    measurementId: "G-NWKM0G7EL7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();


  export function loginWithGoogle(){
      let provider=new firebase.auth.GoogleAuthProvider()
      return firebase.auth().signInWithPopup(provider)
      .then(snap=>snap.user)
  }

  export function signOutGoogle(){
      firebase.auth().signOut()
  }