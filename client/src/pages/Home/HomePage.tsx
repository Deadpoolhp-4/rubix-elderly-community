import React, { useRef } from 'react'
import { BookOpen, Shield, CreditCard, Users, Video, Share2 } from 'lucide-react'
import FeatureCard from './components/FeatureCard'
import TestimonialCard from './components/TestimonialCard'
import { useNavigate, NavLink } from 'react-router-dom'

interface TestimonialType {
  // Define the properties of the testimonial here
  name: string;
  testimonial: string;
  image: string;
  // Add any other properties as needed
}

const HomePage = () => {
  const navigate = useNavigate();
  const whatWeOfferRef = useRef<HTMLDivElement | null>(null);

  const features = [
    {
      icon: BookOpen,
      title: 'Digital Skills Guides',
      description: 'Step-by-step tutorials for essential digital skills',
      color: 'text-blue-500',
      path: '/guides'
    },
    {
      icon: CreditCard,
      title: 'Safe Online Banking',
      description: 'Master online banking with confidence and security',
      color: 'text-green-500',
      path: '/banking'
    },
    {
      icon: Shield,
      title: 'Online Safety',
      description: 'Learn to protect yourself from online threats',
      color: 'text-yellow-500',
      path: '/safety'
    },
    {
      icon: Video,
      title: 'Video Calls',
      description: 'Connect with loved ones through video calls',
      color: 'text-purple-500',
      path: '/video-calls'
    },
    {
      icon: Share2,
      title: 'Social Media',
      description: 'Stay connected with family and friends',
      color: 'text-pink-500',
      path: '/social-media'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Join our community and share your experiences',
      color: 'text-red-500',
      path: '/community'
    }
  ];

  const testimonials: TestimonialType[] = [
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
  ];

  const handleGetStarted = () => {
    if (whatWeOfferRef.current) {
      whatWeOfferRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLearnMore = () => {
    navigate('/about');
  };

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-400 to-blue-600 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Welcome to the Digital Inclusion Hub
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Your friendly guide to mastering digital technology safely and confidently
          </p>
          <div className="flex justify-center space-x-4">
            <button className="btn-primary hover:bg-white/20 transition-colors px-4 py-2 rounded-lg text-white" onClick={handleGetStarted}>
              Get Started
            </button>
            <button className="btn-primary bg-transparent border border-white text-white hover:bg-white/10" onClick={handleLearnMore}>
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div ref={whatWeOfferRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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
            <NavLink to={feature.path} key={index}>
              <FeatureCard {...feature} />
            </NavLink>
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
            {testimonials.map((testimonial: TestimonialType, index: number) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
