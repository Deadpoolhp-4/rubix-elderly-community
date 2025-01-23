import { useState } from 'react'
import GuideCard from './GuideCard'
import VideoTutorial from './VideoTutorial'
import QuizComponent from './QuizComponent'
import ProgressTracker from './ProgressTracker'
import FeedbackForm from './FeedbackForm'

const FeatureSection = ({ id, title, icon: Icon, guides, type = 'text' }) => {
  const [currentGuide, setCurrentGuide] = useState(guides[0])
  const [showQuiz, setShowQuiz] = useState(false)

  return (
    <section id={id} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-4 mb-8">
          <Icon className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold text-text-primary">{title}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Guide List */}
          <div className="lg:col-span-1 space-y-4">
            {guides.map((guide, index) => (
              <button
                key={guide.id}
                onClick={() => {
                  setCurrentGuide(guide)
                  setShowQuiz(false)
                }}
                className={`w-full text-left p-4 rounded-lg ${
                  currentGuide.id === guide.id
                    ? 'bg-primary text-white'
                    : 'bg-surface hover:bg-surface/50'
                }`}
              >
                {guide.title}
              </button>
            ))}
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <ProgressTracker 
              currentStep={currentGuide.currentStep} 
              totalSteps={currentGuide.steps.length}
            />

            {type === 'text' ? (
              <div className="space-y-6">
                {currentGuide.steps.map((step, index) => (
                  <div key={index} className="card">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">
                          Step {index + 1}
                        </h3>
                        <p className="text-text-secondary">{step}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <VideoTutorial 
                url={currentGuide.videoUrl}
                title={currentGuide.title}
              />
            )}

            {showQuiz ? (
              <QuizComponent 
                questions={currentGuide.quiz}
                onComplete={() => setShowQuiz(false)}
              />
            ) : (
              <div className="mt-8 space-x-4">
                <button
                  onClick={() => setShowQuiz(true)}
                  className="btn-primary"
                >
                  Take Quiz
                </button>
                <button
                  onClick={() => alert('Practice feature coming soon!')}
                  className="btn-primary bg-transparent border border-primary text-primary hover:bg-primary/10"
                >
                  Try It Yourself
                </button>
              </div>
            )}

            <FeedbackForm guideId={currentGuide.id} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureSection
