import { useState } from 'react'

const VideoCallContent = ({ topic }) => {
  const [playbackSpeed, setPlaybackSpeed] = useState(1)

  return (
    <div className="space-y-8">
      {/* Video Tutorial */}
      <div className="card p-8">
        <div className="aspect-video bg-black rounded-lg overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src={`${topic.videoUrl}?autoplay=1&controls=1&modestbranding=1&rel=0&start=0`}
            title={topic.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Video Controls */}
        <div className="mt-4 flex items-center justify-between">
          <div className="space-x-2">
            {[0.5, 1, 1.5, 2].map(speed => (
              <button
                key={speed}
                onClick={() => setPlaybackSpeed(speed)}
                className={`px-3 py-1 rounded ${
                  playbackSpeed === speed
                    ? 'bg-primary text-white'
                    : 'bg-surface hover:bg-surface/50'
                }`}
              >
                {speed}x
              </button>
            ))}
          </div>
          <button
            onClick={() => document.querySelector('iframe')?.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')}
            className="btn-primary"
          >
            Pause
          </button>
        </div>
      </div>

      {/* Step-by-Step Instructions */}
      <div className="card p-8">
        <h2 className="text-2xl font-bold text-text-primary mb-6">
          Step-by-Step Instructions
        </h2>
        
        <div className="space-y-6">
          {topic.steps.map((step, index) => (
            <div key={index} className="flex items-start space-x-4">
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
          ))}
        </div>
      </div>

      {/* Tips Section */}
      <div className="card p-8 bg-blue-50">
        <h2 className="text-xl font-bold text-blue-800 mb-4">
          Pro Tips
        </h2>
        <ul className="text-blue-700 space-y-2">
          <li>• Use headphones for better audio quality</li>
          <li>• Position your camera at eye level</li>
          <li>• Ensure good lighting on your face</li>
          <li>• Mute your microphone when not speaking</li>
          <li>• Test your setup before important meetings</li>
        </ul>
      </div>
    </div>
  )
}

export default VideoCallContent
