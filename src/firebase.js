import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/analytics'

let firebaseConfig = {
    apiKey: "AIzaSyAL3oTOf2kvy8d2zyFTaEgtbv6dk20NFzI",
    authDomain: "proyectredux0923.firebaseapp.com",
    databaseURL: "https://proyectredux0923.firebaseio.com",
    projectId: "proyectredux0923",
    storageBucket: "proyectredux0923.appspot.com",
    messagingSenderId: "464637919384",
    appId: "1:464637919384:web:04ca0211508b9ae7c290ed",
    measurementId: "G-51CF8MF2MF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  let db=firebase.firestore().collection('favs')

  export function updateDB(array,uid){
    console.log("esto en firebase")
      return db.doc(uid).set({favorites:[...array]})//siemptre se manda un objeto a firebase7
    

  }

  export function getFavorites(uid){
    return db.doc(uid).get()
    .then(snap=>{
        return snap.data().favorites
    })
  }

  export function loginWithGoogle(){
      let provider=new firebase.auth.GoogleAuthProvider()
      return firebase.auth().signInWithPopup(provider)
      .then(snap=>snap.user)
  }

  export function signOutGoogle(){
      firebase.auth().signOut()
  }