import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAutrOAfPrhsiZVR_EAiZMoNJYlGmsHmsE",
  authDomain: "expressdotcom-8a08a.firebaseapp.com",
  projectId: "expressdotcom-8a08a",
  storageBucket: "expressdotcom-8a08a.appspot.com",
  messagingSenderId: "50498906195",
  appId: "1:50498906195:web:29a4c3e15dd05a1171bea6",
  measurementId: "G-VKRW6XYHFZ"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }