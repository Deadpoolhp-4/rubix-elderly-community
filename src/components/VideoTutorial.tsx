import { useState } from 'react'

const VideoTutorial = ({ url, title }) => {
  const [playbackSpeed, setPlaybackSpeed] = useState(1)

  return (
    <div className="card">
      <div className="aspect-video bg-black rounded-lg overflow-hidden">
        <iframe
          width="100%"
          height="100%"
          src={`${url}?autoplay=1&controls=1&modestbranding=1&rel=0&start=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
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
  )
}

export default VideoTutorial
