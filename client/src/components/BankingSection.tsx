import { useState } from 'react'
import { CreditCard, Shield, FileText, Upload, AlertCircle } from 'lucide-react'
import BankingTutorial from './BankingTutorial'
import FormAssistant from './FormAssistant'
import SecurityTips from './SecurityTips'
import PracticeSimulation from './PracticeSimulation'

const BankingSection = () => {
  const [activeTab, setActiveTab] = useState('tutorials')

  return (
    <section id="banking" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-text-primary mb-8">
          Safe Online Banking & Forms
        </h2>

        {/* Tab Navigation */}
        <div className="flex space-x-4 mb-8 border-b border-surface">
          {[
            { id: 'tutorials', icon: CreditCard, label: 'Tutorials' },
            { id: 'forms', icon: FileText, label: 'Forms Help' },
            { id: 'security', icon: Shield, label: 'Security Tips' },
            { id: 'practice', icon: Upload, label: 'Practice' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 -mb-px flex items-center space-x-2 ${
                activeTab === tab.id
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-text-secondary hover:text-primary'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="card p-6">
          {activeTab === 'tutorials' && <BankingTutorial />}
          {activeTab === 'forms' && <FormAssistant />}
          {activeTab === 'security' && <SecurityTips />}
          {activeTab === 'practice' && <PracticeSimulation />}
        </div>
      </div>
    </section>
  )
}

export default BankingSection
