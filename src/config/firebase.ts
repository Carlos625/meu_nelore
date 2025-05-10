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

console.log('Inicializando Firebase...')
const app = initializeApp(firebaseConfig)
console.log('Firebase inicializado com sucesso')

const db = getFirestore(app)
console.log('Firestore inicializado')

const storage = getStorage(app)
console.log('Storage inicializado')

const auth = getAuth(app)
console.log('Auth inicializado')

const analytics = getAnalytics(app)
console.log('Analytics inicializado')

export { db, storage, auth, analytics } 