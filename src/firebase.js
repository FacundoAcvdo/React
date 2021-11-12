import firebase from "firebase/app"

import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBQCAuN25e6OGZ_III7kTxYywVOdztNqLU",
    authDomain: "acvdo-e1f40.firebaseapp.com",
    projectId: "acvdo-e1f40",
    storageBucket: "acvdo-e1f40.appspot.com",
    messagingSenderId: "848944920169",
    appId: "1:848944920169:web:45cde5634446087d3f54f8"
  }

const app = firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore(app)