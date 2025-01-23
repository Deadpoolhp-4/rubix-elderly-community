import { useState, useEffect } from 'react'
import { getAuth, signInWithEmailAndPassword, signOut, User, createUserWithEmailAndPassword } from 'firebase/auth'
import { collection, query, onSnapshot, addDoc, deleteDoc, doc, updateDoc, increment } from 'firebase/firestore'
import { db, app } from '../../firebase'
import DiscussionCard from './components/DiscussionCard'
import AuthForm from './components/AuthForm'
import NewDiscussionForm from './components/NewDiscussionForm'
import ProfileIcon from './components/ProfileIcon'

const CommunityPage = () => {
  const [discussions, setDiscussions] = useState<{ id: string; title: string; content: string; author: string; timestamp: Date; upvotes: number; comments: any[]; topic: string }[]>([])
  const [user, setUser] = useState<User | null>(null)
  const [isAdmin, setIsAdmin] = useState(false)
  const [selectedTopic, setSelectedTopic] = useState<string>('')
  const auth = getAuth(app)

  // Fetch discussions
  useEffect(() => {
    const q = query(collection(db, 'discussions'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const discussionsData: { id: string; title: string; content: string; author: string; timestamp: Date; upvotes: number; comments: any[]; topic: string }[] = []
      querySnapshot.forEach((doc) => {
        const data = doc.data() as { title: string; content: string; author: string; timestamp: Date; upvotes: number; comments: any[]; topic: string }
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
        comments: [],
        topic: ''
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

  // Handle upvote
  const handleUpvote = async (id: string) => {
    const discussionRef = doc(db, 'discussions', id);
    await updateDoc(discussionRef, { upvotes: increment(1) });
  }

  // Handle downvote
  const handleDownvote = async (id: string) => {
    const discussionRef = doc(db, 'discussions', id);
    await updateDoc(discussionRef, { upvotes: increment(-1) });
  }

  // Sort discussions by topic
  const sortedDiscussions = discussions
    .filter(discussion => discussion.topic === selectedTopic || selectedTopic === '')
    .sort((a, b) => b.upvotes - a.upvotes); // Sort by upvotes

  return (
    <div className={`pt-20 min-h-screen ${isAdmin ? 'admin-animation' : 'user-animation'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-text-primary mb-8">
          Community Support
        </h1>

        {/* Auth Form */}
        {!user ? (
          <div className="card p-8 mb-8">
            <AuthForm onAuth={handleAuth} />
          </div>
        ) : (
          <div className="flex items-center mb-8">
            <ProfileIcon user={{ email: user.email || '' }} onLogout={handleLogout} onRoleChange={setIsAdmin} isAdmin={isAdmin} />
          </div>
        )}

        {/* New Discussion Form */}
        {user && (
          <div className="card p-8 mb-8">
            <NewDiscussionForm onSubmit={handleNewDiscussion} />
          </div>
        )}

        {/* Topic selection dropdown */}
        <select onChange={(e) => setSelectedTopic(e.target.value)} value={selectedTopic}>
          <option value="">All Topics</option>
          {/* Add topic options here */}
        </select>

        {/* Discussions List */}
        <div className="space-y-4">
          {sortedDiscussions.map(discussion => (
            <DiscussionCard
              key={discussion.id}
              discussion={discussion}
              isAdmin={isAdmin}
              onDelete={() => handleDeleteDiscussion(discussion.id)}
              onUpvote={() => handleUpvote(discussion.id)}
              onDownvote={() => handleDownvote(discussion.id)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CommunityPage
