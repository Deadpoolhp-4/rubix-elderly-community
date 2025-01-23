import { useState } from 'react'
import VideoCallCard from './components/VideoCallCard'
import VideoCallContent from './components/VideoCallContent'

const VideoCallsPage = () => {
  const [selectedTopic, setSelectedTopic] = useState(null)

  const topics = [
    {
      id: 'zoom-basics',
      title: 'Zoom Basics',
      icon: '📹',
      steps: [
        'Download and install Zoom',
        'Create a free account',
        'Schedule or start a meeting',
        'Invite participants via email or link',
        'Use the chat and reactions features'
      ],
      videoUrl: 'https://www.youtube.com/embed/hIkCmbvAHQQ'
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      icon: '🔧',
      steps: [
        'Check your internet connection',
        'Test your microphone and camera',
        'Update Zoom to the latest version',
        'Restart your device if issues persist',
        'Contact Zoom support if needed'
      ],
      videoUrl: 'https://www.youtube.com/embed/9guqRELB4dg'
    },
    {
      id: 'advanced-features',
      title: 'Advanced Features',
      icon: '✨',
      steps: [
        'Use virtual backgrounds',
        'Enable waiting rooms for security',
        'Record meetings for later viewing',
        'Share your screen with participants',
        'Use breakout rooms for group discussions'
      ],
      videoUrl: 'https://www.youtube.com/embed/9zqHlgD7m2U'
    }
  ]

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-text-primary mb-8">
          Video Calls
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Topic List */}
          <div className="lg:col-span-1 space-y-4">
            {topics.map(topic => (
              <VideoCallCard
                key={topic.id}
                topic={topic}
                isSelected={selectedTopic?.id === topic.id}
                onClick={() => setSelectedTopic(topic)}
              />
            ))}
          </div>

          {/* Topic Content */}
          <div className="lg:col-span-3">
            {selectedTopic ? (
              <VideoCallContent topic={selectedTopic} />
            ) : (
              <div className="card p-8">
                <p className="text-text-secondary">
                  Please select a video call topic from the list to view its content
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoCallsPage
