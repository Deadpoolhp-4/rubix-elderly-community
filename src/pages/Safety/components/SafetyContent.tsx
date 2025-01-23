const SafetyContent = ({ topic }) => {
  return (
    <div className="card p-8">
      <h2 className="text-3xl font-bold text-text-primary mb-8">
        {topic.title}
      </h2>
      
      <div className="space-y-4">
        {topic.content.map((item, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="w-6 h-6 flex items-center justify-center bg-primary/10 text-primary rounded-full">
              ✓
            </div>
            <p className="text-text-secondary">{item}</p>
          </div>
        ))}
      </div>

      {/* Important Note */}
      <div className="mt-8 p-6 bg-red-50 rounded-lg">
        <h3 className="text-lg font-semibold text-red-800 mb-2">
          Important Note
        </h3>
        <p className="text-red-700">
          If you suspect your account has been compromised, change your passwords immediately
          and contact your bank or service provider.
        </p>
      </div>
    </div>
  )
}

export default SafetyContent
