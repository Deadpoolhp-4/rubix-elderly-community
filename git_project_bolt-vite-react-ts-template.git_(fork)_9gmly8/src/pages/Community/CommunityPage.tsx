import { useState, useEffect } from 'react'
import { getAuth, signInWithEmailAndPassword, signOut, User, createUserWithEmailAndPassword } from 'firebase/auth'
import { collection, query, onSnapshot, addDoc, deleteDoc, doc } from 'firebase/firestore'
import { db, app } from '../../firebase'
import DiscussionCard from './components/DiscussionCard'
import AuthForm from './components/AuthForm'
import NewDiscussionForm from './components/NewDiscussionForm'

const CommunityPage = () => {
  const [discussions, setDiscussions] = useState<{ id: string; title: string; content: string; author: string; timestamp: Date; upvotes: number; comments: any[] }[]>([])
  const [user, setUser] = useState<User | null>(null)
  const [isAdmin, setIsAdmin] = useState(false)
  const auth = getAuth(app)

  // Fetch discussions
  useEffect(() => {
    const q = query(collection(db, 'discussions'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const discussionsData: { id: string; title: string; content: string; author: string; timestamp: Date; upvotes: number; comments: any[] }[] = []
      querySnapshot.forEach((doc) => {
        const data = doc.data() as { title: string; content: string; author: string; timestamp: Date; upvotes: number; comments: any[] }
        discussionsData.push({ id: doc.id, ...data })
      })
      setDiscussions(discussionsData)
    })
    return () => unsubscribe()
  }, [])

  // Handle authentication
  const handleAuth = async (email: string, password: string, isAdmin: boolean, isSignup: boolean) => {
    try {
      if (isSignup) {
        await createUserWithEmailAndPassword(auth, email, password)
        setUser({ email, isAdmin } as unknown as User)
      } else {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        setUser(userCredential.user)
      }
      setIsAdmin(isAdmin)
    } catch (error) {
      console.error('Authentication error:', error)
    }
  }

  // Handle logout
  const handleLogout = async () => {
    try {
      await signOut(auth)
      setUser(null)
      setIsAdmin(false)
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  // Handle new discussion
  const handleNewDiscussion = async (title: string, content: string) => {
    try {
      await addDoc(collection(db, 'discussions'), {
        title,
        content,
        author: user?.email || '',
        timestamp: new Date(),
        upvotes: 0,
        comments: []
      })
    } catch (error) {
      console.error('Error adding discussion:', error)
    }
  }

  // Handle delete discussion (admin only)
  const handleDeleteDiscussion = async (id: string) => {
    if (isAdmin) {
      try {
        await deleteDoc(doc(db, 'discussions', id))
      } catch (error) {
        console.error('Error deleting discussion:', error)
      }
    }
  }

  return (
    <div className={`pt-20 min-h-screen ${isAdmin ? 'admin-animation' : 'user-animation'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-text-primary mb-8">
          Community Support
        </h1>

        {/* Auth Form */}
        <div className="card p-8 mb-8">
          <AuthForm onAuth={handleAuth} />
        </div>

        {/* New Discussion Form */}
        {user && (
          <div className="card p-8 mb-8">
            <NewDiscussionForm onSubmit={handleNewDiscussion} />
          </div>
        )}

        {/* Discussions List */}
        <div className="space-y-4">
          {discussions.map(discussion => (
            <DiscussionCard
              key={discussion.id}
              discussion={discussion}
              isAdmin={isAdmin}
              onDelete={() => handleDeleteDiscussion(discussion.id)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CommunityPage
