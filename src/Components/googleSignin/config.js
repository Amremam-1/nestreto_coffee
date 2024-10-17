import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBZc1buiTpwsJmuL5a7w7rwQoeCex2wk70",
  authDomain: "nestreto.firebaseapp.com",
  projectId: "nestreto",
  storageBucket: "nestreto.appspot.com",
  messagingSenderId: "987847627064",
  appId: "1:987847627064:web:e8a060a2d859b403c831cd",
  measurementId: "G-ME5Q1905EV",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider }
