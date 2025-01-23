import { useState } from 'react'
import { ChevronRight, Download, Volume2, PlayCircle, BookOpen } from 'lucide-react'

interface Guide {
  id: string
  title: string
  type: 'text' | 'video'
  steps: string[]
  videoUrl?: string
  completedSteps: number
}

const GuideSection = () => {
  const [guides] = useState<Guide[]>([
    {
      id: 'email-basics',
      title: 'Email Basics',
      type: 'text',
      steps: [
        'Open your email application',
        'Click "Compose" to start a new email',
        'Enter the recipient\'s email address',
        'Write your message in the body',
        'Click "Send" to deliver your email'
      ],
      completedSteps: 0
    },
    {
      id: 'video-calls',
      title: 'Video Calls',
      type: 'video',
      steps: [
        'Open your video call application',
        'Click "New Meeting"',
        'Copy the meeting link',
        'Share the link with your contacts',
        'Start the meeting when ready'
      ],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      completedSteps: 0
    }
  ])

  const [currentGuide, setCurrentGuide] = useState<Guide>(guides[0])
  const [currentStep, setCurrentStep] = useState(0)
  const [fontSize, setFontSize] = useState('medium')
  const [darkMode, setDarkMode] = useState(false)
  const [playbackSpeed, setPlaybackSpeed] = useState(1)

  const fontSizes = {
    small: 'text-base',
    medium: 'text-lg',
    large: 'text-xl',
    xlarge: 'text-2xl'
  }

  const handleNextStep = () => {
    if (currentStep < currentGuide.steps.length - 1) {
      setCurrentStep(prev => prev + 1)
    }
  }

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
    }
  }

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} min-h-screen p-8`}>
      <div className="max-w-7xl mx-auto">
        {/* Controls */}
        <div className="flex justify-end space-x-4 mb-8">
          <button 
            onClick={() => setFontSize(prev => prev === 'xlarge' ? 'small' : 
              prev === 'large' ? 'xlarge' : 
              prev === 'medium' ? 'large' : 'medium')}
            className="p-2 rounded-lg hover:bg-gray-200"
          >
            <Volume2 className="w-6 h-6" />
          </button>
          <button 
            onClick={() => setDarkMode(prev => !prev)}
            className="p-2 rounded-lg hover:bg-gray-200"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>

        {/* Guide Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {guides.map(guide => (
            <div
              key={guide.id}
              onClick={() => {
                setCurrentGuide(guide)
                setCurrentStep(0)
              }}
              className={`p-6 rounded-lg cursor-pointer hover:shadow-lg transition-all ${
                currentGuide.id === guide.id 
                  ? 'bg-blue-600 text-white' 
                  : darkMode 
                    ? 'bg-gray-800' 
                    : 'bg-gray-100'
              }`}
            >
              <div className="flex items-center space-x-4">
                {guide.type === 'video' ? (
                  <PlayCircle className="w-8 h-8" />
                ) : (
                  <BookOpen className="w-8 h-8" />
                )}
                <h3 className="text-xl font-semibold">{guide.title}</h3>
              </div>
              <div className="mt-4">
                <div className="flex items-center space-x-2 text-sm">
                  <span>{guide.completedSteps}/{guide.steps.length} steps completed</span>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full">
                    <div 
                      className="h-full bg-blue-400 rounded-full"
                      style={{ width: `${(guide.completedSteps / guide.steps.length) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Current Guide */}
        <div className={`${fontSizes[fontSize]} space-y-8`}>
          <h2 className="text-3xl font-bold mb-4">{currentGuide.title}</h2>
          
          {/* Progress */}
          <div className="flex items-center space-x-4">
            <span>Step {currentStep + 1} of {currentGuide.steps.length}</span>
            <div className="flex-1 h-2 bg-gray-200 rounded-full">
              <div 
                className="h-full bg-blue-600 rounded-full"
                style={{ width: `${((currentStep + 1) / currentGuide.steps.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Content */}
          {currentGuide.type === 'text' ? (
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">
                  {currentStep + 1}
                </div>
                <p>{currentGuide.steps[currentStep]}</p>
              </div>
              <img 
                src={`https://picsum.photos/800/400?random=${currentStep}`} 
                alt="Step illustration"
                className="rounded-lg shadow-md"
              />
            </div>
          ) : (
            <div className="space-y-4">
              <div className="aspect-video bg-black rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src={`${currentGuide.videoUrl}?autoplay=1&controls=1&modestbranding=1&rel=0&start=0`}
                  title={currentGuide.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setPlaybackSpeed(prev => prev === 2 ? 0.5 : prev + 0.5)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                >
                  Speed: {playbackSpeed}x
                </button>
                <button
                  onClick={() => document.querySelector('iframe')?.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                >
                  Pause
                </button>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between">
            <button
              onClick={handlePreviousStep}
              disabled={currentStep === 0}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={handleNextStep}
              disabled={currentStep === currentGuide.steps.length - 1}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50"
            >
              Next
            </button>
          </div>

          {/* Feedback */}
          <div className="pt-8 border-t">
            <h3 className="text-xl font-bold mb-4">Was this helpful?</h3>
            <div className="flex space-x-4">
              <button className="px-6 py-2 bg-green-500 text-white rounded-lg">Yes</button>
              <button className="px-6 py-2 bg-red-500 text-white rounded-lg">No</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GuideSection
