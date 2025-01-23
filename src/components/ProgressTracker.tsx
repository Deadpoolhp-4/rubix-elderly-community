const ProgressTracker = ({ currentStep, totalSteps }) => {
  const percentage = Math.round((currentStep / totalSteps) * 100)

  return (
    <div className="mb-8">
      <div className="flex justify-between mb-2">
        <span>Progress</span>
        <span>{percentage}%</span>
      </div>
      <div className="w-full bg-surface h-2 rounded-full">
        <div
          className="h-full bg-primary rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}

export default ProgressTracker
