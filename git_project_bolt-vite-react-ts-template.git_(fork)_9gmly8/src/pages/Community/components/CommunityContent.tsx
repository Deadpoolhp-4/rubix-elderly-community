const CommunityContent = ({ topic }) => {
  return (
    <div className="space-y-8">
      {/* Main Content */}
      <div className="card p-8">
        <h2 className="text-3xl font-bold text-text-primary mb-8">
          {topic.title}
        </h2>
        
        <div className="space-y-6">
          {topic.content.map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                {index + 1}
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Step {index + 1}
                </h3>
                <p className="text-text-secondary">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Resources */}
      <div className="card p-8 bg-green-50">
        <h2 className="text-xl font-bold text-green-800 mb-4">
          Additional Resources
        </h2>
        <ul className="text-green-700 space-y-2">
          <li>• Community Guidelines</li>
          <li>• Frequently Asked Questions</li>
          <li>• Contact Support Team</li>
          <li>• Upcoming Events Calendar</li>
          <li>• Volunteer Opportunities</li>
        </ul>
      </div>

      {/* Testimonials */}
      <div className="card p-8 bg-blue-50">
        <h2 className="text-xl font-bold text-blue-800 mb-4">
          What Our Members Say
        </h2>
        <div className="space-y-4">
          <blockquote className="text-blue-700 italic">
            "The community forum helped me solve a technical issue I was struggling with for weeks!"
          </blockquote>
          <blockquote className="text-blue-700 italic">
            "The live help sessions are fantastic - the experts are so patient and knowledgeable."
          </blockquote>
          <blockquote className="text-blue-700 italic">
            "I've learned so much from the community resources and made new friends along the way."
          </blockquote>
        </div>
      </div>
    </div>
  )
}

export default CommunityContent
