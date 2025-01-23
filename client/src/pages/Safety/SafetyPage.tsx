import { useState } from 'react'
import SafetyCard from './components/SafetyCard'
import SafetyContent from './components/SafetyContent'

// Define the Topic type
type Topic = {
  id: string;
  title: string;
  icon: string;
  content: string[];
}

const SafetyPage = () => {
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null)

  const topics = [
    {
      id: 'passwords',
      title: 'Creating Strong Passwords',
      icon: '🔐',
      content: [
        'Use at least 12 characters',
        'Mix uppercase and lowercase letters',
        'Include numbers and special characters',
        'Avoid using personal information',
        'Use a unique password for each account'
      ]
    },
    {
      id: 'phishing',
      title: 'Recognizing Phishing',
      icon: '🎣',
      content: [
        'Be cautious of unsolicited emails',
        'Check sender email addresses carefully',
        'Look for spelling and grammar mistakes',
        'Hover over links to see actual URLs',
        'Never share sensitive information via email'
      ]
    },
    {
      id: '2fa',
      title: 'Two-Factor Authentication',
      icon: '🔒',
      content: [
        'Enable 2FA on all important accounts',
        'Use authenticator apps instead of SMS',
        'Keep backup codes in a safe place',
        'Set up recovery options',
        'Understand how 2FA protects your accounts'
      ]
    },
    {
      id: 'secure-browsing',
      title: 'Secure Browsing',
      icon: '🌐',
      content: [
        'Always look for HTTPS in URLs',
        'Check for the padlock icon in the address bar',
        'Avoid using public Wi-Fi for sensitive transactions',
        'Keep your browser updated',
        'Use a reputable antivirus software'
      ]
    }
  ]

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-text-primary mb-8">
          Online Safety
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Topic List */}
          <div className="lg:col-span-1 space-y-4">
            {topics.map(topic => (
              <SafetyCard
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
              <SafetyContent topic={selectedTopic} />
            ) : (
              <div className="card p-8">
                <p className="text-text-secondary">
                  Please select a safety topic from the list to view its content
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SafetyPage
