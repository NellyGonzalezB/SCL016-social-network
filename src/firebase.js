/* eslint-disable no-undef */

/* Configuración e inicialización de servicios de Firebase */
const firebaseConfig = {
  apiKey: 'AIzaSyDjR4142j6cUVsRyDqwCtuxD62c5E8tmFc',
  authDomain: 'red-social-e15d9.firebaseapp.com',
  projectId: 'red-social-e15d9',
  storageBucket: 'red-social-e15d9.appspot.com',
  messagingSenderId: '159044500115',
  appId: '1:159044500115:web:4ddcc830cab6450b482b66',
  measurementId: 'G-RKNH8XW2RC'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()
export const auth = firebase.auth()
export const db = firebase.firestore()
