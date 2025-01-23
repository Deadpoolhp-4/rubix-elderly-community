import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA-Qp6roKi89ht6i3-eNSs510ZIKjgFQV0",
  authDomain: "rubix-41d7a.firebaseapp.com",
  projectId: "rubix-41d7a",
  storageBucket: "rubix-41d7a.firebasestorage.app",
  messagingSenderId: "119260398652",
  appId: "1:119260398652:web:619c3e703f49b4b180af39",
  measurementId: "G-D7CZ6CLYSK"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db, app }
