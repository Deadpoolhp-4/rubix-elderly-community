import { NavLink } from 'react-router-dom';
import { Home, BookOpen, CreditCard, Shield, Video, Share2, Users } from 'lucide-react';

const Footer = () => {
  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/guides', icon: BookOpen, label: 'Guides' },
    { path: '/banking', icon: CreditCard, label: 'Banking' },
    { path: '/safety', icon: Shield, label: 'Safety' },
    { path: '/video-calls', icon: Video, label: 'Video Calls' },
    { path: '/social-media', icon: Share2, label: 'Social Media' },
    { path: '/community', icon: Users, label: 'Community' }
  ];

  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center space-x-8">
          {navItems.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              className="flex items-center space-x-2 hover:text-primary transition-colors"
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </div>
        <div className="text-center mt-6">
          <p className="text-xl">© {new Date().getFullYear()} Stumble Techies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 