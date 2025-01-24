import { Users } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-400 to-blue-600 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            About Digital Inclusion Hub
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Empowering seniors to thrive in the digital world
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-text-secondary">
              We believe everyone deserves to participate in our digital world. 
              Our mission is to provide seniors with the tools, resources, and 
              confidence needed to navigate technology safely and effectively.
            </p>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {[
                { name: 'Harshil Patel', icon: <Users className="w-16 h-16 text-text-primary" /> },
                { name: 'Jay Patel', icon: <Users className="w-16 h-16 text-text-primary" /> },
                { name: 'Karan Patel', icon: <Users className="w-16 h-16 text-text-primary" /> },
              ].map((member, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  {member.icon}
                  <h3 className="text-xl font-semibold text-text-primary">{member.name}</h3>
                  <p className="text-text-secondary">Team Member</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 