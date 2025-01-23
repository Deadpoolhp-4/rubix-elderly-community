import { BookOpen, Shield, CreditCard, Users, Video, Share2 } from 'lucide-react'

const HomePage = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Digital Skills Guides',
      description: 'Step-by-step tutorials for essential digital skills',
      color: 'text-blue-500'
    },
    {
      icon: CreditCard,
      title: 'Safe Online Banking',
      description: 'Master online banking with confidence and security',
      color: 'text-green-500'
    },
    {
      icon: Shield,
      title: 'Online Safety',
      description: 'Learn to protect yourself from online threats',
      color: 'text-yellow-500'
    },
    {
      icon: Video,
      title: 'Video Calls',
      description: 'Connect with loved ones through video calls',
      color: 'text-purple-500'
    },
    {
      icon: Share2,
      title: 'Social Media',
      description: 'Stay connected with family and friends',
      color: 'text-pink-500'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Get help and share experiences with others',
      color: 'text-indigo-500'
    }
  ]

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary/10 to-secondary/10 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-text-primary mb-6">
            Welcome to the Digital Inclusion Hub
          </h1>
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            Your friendly guide to mastering digital technology safely and confidently
          </p>
          <div className="flex justify-center space-x-4">
            <button className="btn-primary">
              Get Started
            </button>
            <button className="btn-primary bg-transparent border border-primary text-primary hover:bg-primary/10">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            What We Offer
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Explore our comprehensive features designed to help you navigate the digital world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card p-8 hover:shadow-lg transition-shadow">
              <div className={`w-16 h-16 ${feature.color} mb-6`}>
                <feature.icon className="w-full h-full" />
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                {feature.title}
              </h3>
              <p className="text-text-secondary">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Hear from seniors who have successfully navigated the digital world with our help
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Mary Johnson',
                testimonial: 'The step-by-step guides made learning email so easy!',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2'
              },
              {
                name: 'Robert Smith',
                testimonial: 'I finally feel confident using online banking safely.',
                image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde'
              },
              {
                name: 'Susan Lee',
                testimonial: 'The community support is wonderful and so helpful!',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
              }
            ].map((testimonial, index) => (
              <div key={index} className="card p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-text-primary">
                      {testimonial.name}
                    </h4>
                    <p className="text-text-secondary">Happy User</p>
                  </div>
                </div>
                <p className="text-text-secondary italic">
                  "{testimonial.testimonial}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
