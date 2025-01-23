import { Users, MessageCircle, Calendar, HelpCircle } from 'lucide-react'

const CommunitySection = () => {
  return (
    <section id="community" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-4 mb-8">
          <Users className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold text-text-primary">Community Support</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Forum Card */}
          <div className="card p-6">
            <div className="flex items-center space-x-4 mb-4">
              <MessageCircle className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-semibold">Discussion Forum</h3>
            </div>
            <p className="text-text-secondary mb-4">
              Connect with other users, ask questions, and share experiences in our friendly community forum.
            </p>
            <button className="btn-primary">
              Join the Discussion
            </button>
          </div>

          {/* Live Help Card */}
          <div className="card p-6">
            <div className="flex items-center space-x-4 mb-4">
              <Calendar className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-semibold">Live Help Sessions</h3>
            </div>
            <p className="text-text-secondary mb-4">
              Participate in our weekly live Q&A sessions with technology experts.
            </p>
            <button className="btn-primary">
              View Schedule
            </button>
          </div>

          {/* FAQ Card */}
          <div className="card p-6">
            <div className="flex items-center space-x-4 mb-4">
              <HelpCircle className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-semibold">Frequently Asked Questions</h3>
            </div>
            <p className="text-text-secondary mb-4">
              Find answers to common questions about digital technology and online safety.
            </p>
            <button className="btn-primary">
              Browse FAQs
            </button>
          </div>

          {/* Volunteer Help Card */}
          <div className="card p-6">
            <div className="flex items-center space-x-4 mb-4">
              <Users className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-semibold">Get Help from Volunteers</h3>
            </div>
            <p className="text-text-secondary mb-4">
              Connect with trained volunteers who can assist you with digital tasks.
            </p>
            <button className="btn-primary">
              Request Assistance
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CommunitySection
