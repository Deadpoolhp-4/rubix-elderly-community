const TestimonialCard = ({ name, testimonial, image }: { name: string, testimonial: string, image: string }) => {
  return (
    <div className="card p-8 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center space-x-4 mb-6">
        <img 
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h4 className="text-xl font-bold text-text-primary">
            {name}
          </h4>
          <p className="text-text-secondary">Happy User</p>
        </div>
      </div>
      <p className="text-text-secondary italic">
        "{testimonial}"
      </p>
    </div>
  )
}

export default TestimonialCard
