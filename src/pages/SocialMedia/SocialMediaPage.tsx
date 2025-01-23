import { useState } from 'react'
import SocialMediaCard from './components/SocialMediaCard'
import SocialMediaContent from './components/SocialMediaContent'

const SocialMediaPage = () => {
  const [selectedPlatform, setSelectedPlatform] = useState(null)

  const platforms = [
    {
      id: 'facebook',
      title: 'Facebook Basics',
      icon: '📘',
      steps: [
        'Create a Facebook account',
        'Set up your profile with a photo',
        'Add friends and family',
        'Post updates and photos',
        'Use privacy settings to control who sees your content'
      ],
      videoUrl: 'https://www.youtube.com/embed/mrPJ3V5jv4M'
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp Basics',
      icon: '💬',
      steps: [
        'Download and install WhatsApp',
        'Verify your phone number',
        'Add contacts from your phone',
        'Send messages and make calls',
        'Create and join group chats'
      ],
      videoUrl: 'https://www.youtube.com/embed/fV6UxFV2aWM'
    },
    {
      id: 'instagram',
      title: 'Instagram Basics',
      icon: '📸',
      steps: [
        'Create an Instagram account',
        'Set up your profile',
        'Follow friends and family',
        'Post photos and stories',
        'Explore content through the feed'
      ],
      videoUrl: 'https://www.youtube.com/embed/CK1nZ8fV4wU'
    }
  ]

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-text-primary mb-8">
          Social Media
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Platform List */}
          <div className="lg:col-span-1 space-y-4">
            {platforms.map(platform => (
              <SocialMediaCard
                key={platform.id}
                platform={platform}
                isSelected={selectedPlatform?.id === platform.id}
                onClick={() => setSelectedPlatform(platform)}
              />
            ))}
          </div>

          {/* Platform Content */}
          <div className="lg:col-span-3">
            {selectedPlatform ? (
              <SocialMediaContent platform={selectedPlatform} />
            ) : (
              <div className="card p-8">
                <p className="text-text-secondary">
                  Please select a social media platform from the list to view its content
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SocialMediaPage
