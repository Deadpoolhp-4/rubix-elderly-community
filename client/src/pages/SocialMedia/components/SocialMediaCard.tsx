const SocialMediaCard = ({ platform, isSelected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-6 rounded-lg ${
        isSelected
          ? 'bg-primary text-white'
          : 'bg-surface hover:bg-surface/50'
      } transition-colors`}
    >
      <div className="flex items-center space-x-4">
        <span className="text-2xl">{platform.icon}</span>
        <div>
          <h3 className="text-xl font-semibold">{platform.title}</h3>
        </div>
      </div>
    </button>
  )
}

export default SocialMediaCard
