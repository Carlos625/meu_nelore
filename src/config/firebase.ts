import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: "AIzaSyB-Zbn4ykz7V7J31jBaPjBgh6I0h3Vz7q8",
  authDomain: "meu-nelore-web.firebaseapp.com",
  projectId: "meu-nelore-web",
  storageBucket: "meu-nelore-web.firebasestorage.app",
  messagingSenderId: "1071334977700",
  appId: "1:1071334977700:web:7454ebd7f1c9eb7e283631",
  measurementId: "G-RTQ9LDZK0D"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app)
const auth = getAuth(app)
const analytics = getAnalytics(app)

export { db, storage, auth, analytics } 