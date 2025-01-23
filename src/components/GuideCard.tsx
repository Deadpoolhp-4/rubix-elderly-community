const GuideCard = ({ title, description, icon: Icon, progress }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center space-x-4 mb-4">
        <Icon className="w-8 h-8 text-blue-600" />
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex items-center space-x-2 text-sm">
        <span>{progress}% completed</span>
        <div className="flex-1 h-2 bg-gray-200 rounded-full">
          <div 
            className="h-full bg-blue-400 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  )
}

export default GuideCard
