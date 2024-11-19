import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCd6tzJCSfn58gbMhyOtyI48qAnBQd2GQ8",
  authDomain: "nestrettocoffee-80be4.firebaseapp.com",
  projectId: "nestrettocoffee-80be4",
  storageBucket: "nestrettocoffee-80be4.firebasestorage.app",
  messagingSenderId: "601048872416",
  appId: "1:601048872416:web:cc3581da0fa58bb1c16785",
  measurementId: "G-C1GC9G33SD",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider }
