const BankingContent = ({ topic }) => {
  return (
    <div className="card p-8">
      <h2 className="text-3xl font-bold text-text-primary mb-8">
        {topic.title}
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

      {/* Safety Reminder */}
      <div className="mt-8 p-6 bg-yellow-50 rounded-lg">
        <h3 className="text-lg font-semibold text-yellow-800 mb-2">
          Safety Reminder
        </h3>
        <p className="text-yellow-700">
          Always ensure you're on your bank's official website before entering any sensitive information.
          Look for the lock icon 🔒 and "https://" in the address bar.
        </p>
      </div>
    </div>
  )
}

export default BankingContent
