const GuideContent = ({ guide }) => {
  return (
    <div className="card p-8">
      <h2 className="text-3xl font-bold text-text-primary mb-8">
        {guide.title}
      </h2>
      
      <div className="space-y-6">
        {guide.steps.map((step, index) => (
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
  )
}

export default GuideContent
