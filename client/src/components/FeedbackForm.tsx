import { useState } from 'react'

const FeedbackForm = ({ guideId }) => {
  const [feedback, setFeedback] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the feedback to your backend
    console.log('Feedback submitted:', { guideId, feedback })
    setSubmitted(true)
  }

  return (
    <div className="card mt-8">
      <h3 className="text-xl font-semibold mb-4">Was this guide helpful?</h3>
      {submitted ? (
        <p className="text-green-600">Thank you for your feedback!</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="w-full p-3 rounded-lg bg-surface border border-surface focus:border-primary focus:ring-2 focus:ring-primary"
            placeholder="Your feedback..."
            rows="3"
          />
          <div className="flex justify-end">
            <button type="submit" className="btn-primary">
              Submit Feedback
            </button>
          </div>
        </form>
      )}
    </div>
  )
}

export default FeedbackForm
