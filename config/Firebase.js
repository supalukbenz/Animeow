import firebase from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyD2nayrWVpXyPyN-EF_ie75nQ36QFczk_I",
  authDomain: "animeow-9c2ab.firebaseapp.com",
  projectId: "animeow-9c2ab",
  storageBucket: "animeow-9c2ab.appspot.com",
  messagingSenderId: "910641703026",
  appId: "1:910641703026:web:0cba11532f390128527aeb",
  measurementId: "G-QRSD1TEF47"
};

const Firebase = firebase.initializeApp(firebaseConfig)

export default Firebase;