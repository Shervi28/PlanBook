import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyBlsSNHy0Uh1DyMKyMr7TeEJeoBTqBxCt0",
  authDomain: "playbook-ab5a6.firebaseapp.com",
  projectId: "playbook-ab5a6",
  storageBucket: "playbook-ab5a6.appspot.com",
  messagingSenderId: "12793282680",
  appId: "1:12793282680:web:26d8030e3fc08eb31fad8d",
  measurementId: "G-RSPM8PFKWF"
})

export const auth = app.auth()
export default app
