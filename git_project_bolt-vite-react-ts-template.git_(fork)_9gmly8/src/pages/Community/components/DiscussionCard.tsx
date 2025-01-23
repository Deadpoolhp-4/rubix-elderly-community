import { useState } from 'react'
import { doc, updateDoc, arrayUnion } from 'firebase/firestore'
import { db } from '../../../firebase'

const DiscussionCard = ({ discussion, isAdmin, onDelete }: { discussion: any; isAdmin: boolean; onDelete: () => void }) => {
  const [newComment, setNewComment] = useState('')
  const [showComments, setShowComments] = useState(false)

  const handleAddComment = async () => {
    if (newComment.trim()) {
      try {
        const discussionRef = doc(db, 'discussions', discussion.id)
        await updateDoc(discussionRef, {
          comments: arrayUnion({
            content: newComment,
            timestamp: new Date()
          })
        })
        setNewComment('')
      } catch (error) {
        console.error('Error adding comment:', error)
      }
    }
  }

  return (
    <div className="card p-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-bold text-text-primary mb-2">
            {discussion.title}
          </h2>
          <p className="text-text-secondary mb-4">{discussion.content}</p>
          <p className="text-sm text-text-secondary">
            Posted by {discussion.author} on {new Date(discussion.timestamp?.toDate()).toLocaleString()}
          </p>
        </div>
        {isAdmin && (
          <button
            onClick={onDelete}
            className="text-red-500 hover:text-red-700"
          >
            Delete
          </button>
        )}
      </div>

      <div className="mt-4 flex items-center space-x-4">
        <button
          onClick={() => setShowComments(!showComments)}
          className="text-text-secondary hover:text-primary"
        >
          {discussion.comments?.length || 0} Comments
        </button>
      </div>

      {showComments && (
        <div className="mt-4 space-y-4">
          {/* Comments List */}
          {discussion.comments?.map((comment: any, index: number) => (
            <div key={index} className="pl-4 border-l-2 border-surface">
              <p className="text-text-secondary">{comment.content}</p>
              <p className="text-sm text-text-secondary">
                {new Date(comment.timestamp?.toDate()).toLocaleString()}
              </p>
            </div>
          ))}

          {/* Add Comment Form */}
          <div className="flex space-x-2">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="flex-1 p-2 rounded-lg bg-surface border border-surface focus:border-primary focus:ring-2 focus:ring-primary"
              placeholder="Add a comment..."
            />
            <button
              onClick={handleAddComment}
              className="btn-primary"
            >
              Post
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default DiscussionCard
