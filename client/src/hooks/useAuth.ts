import { useState, useEffect } from 'react'
import { getAuth, onAuthStateChanged, User } from 'firebase/auth'
import { app } from '../firebase'

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null)
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    const auth = getAuth(app)
    onAuthStateChanged(auth, (user) => {
      setUser(user)
      setIsAdmin(user?.email === 'sa@gmail.com')
    })
  }, [])

  return { user, isAdmin }
} 