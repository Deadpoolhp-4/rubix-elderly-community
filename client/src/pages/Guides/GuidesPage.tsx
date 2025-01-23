import { useState } from 'react'
import GuideCard from './components/GuideCard'
import GuideContent from './components/GuideContent'

const GuidesPage = () => {
  const [selectedGuide, setSelectedGuide] = useState(null)

  const guides = [
    {
      id: 'email',
      title: 'Email Basics',
      icon: '📧',
      steps: [
        'Open your email application',
        'Click "Compose" to start a new email',
        'Enter the recipient\'s email address',
        'Write your message in the body',
        'Click "Send" to deliver your email'
      ]
    },
    {
      id: 'smartphone',
      title: 'Smartphone Usage',
      icon: '📱',
      steps: [
        'Unlock your phone using your passcode or fingerprint',
        'Navigate through apps using touch gestures',
        'Make and receive calls',
        'Send text messages',
        'Install and use new apps'
      ]
    },
    {
      id: 'browsing',
      title: 'Web Browsing',
      icon: '🌐',
      steps: [
        'Open your web browser',
        'Type a website address in the address bar',
        'Use search engines to find information',
        'Bookmark your favorite websites',
        'Clear your browsing history'
      ]
    }
  ]

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-text-primary mb-8">
          Step-by-Step Guides
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Guide List */}
          <div className="lg:col-span-1 space-y-4">
            {guides.map(guide => (
              <GuideCard
                key={guide.id}
                guide={guide}
                isSelected={selectedGuide?.id === guide.id}
                onClick={() => setSelectedGuide(guide)}
              />
            ))}
          </div>

          {/* Guide Content */}
          <div className="lg:col-span-3">
            {selectedGuide ? (
              <GuideContent guide={selectedGuide} />
            ) : (
              <div className="card p-8">
                <p className="text-text-secondary">
                  Please select a guide from the list to view its content
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GuidesPage
