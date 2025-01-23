import { useState } from 'react'
import BankingCard from './components/BankingCard'
import BankingContent from './components/BankingContent'

// Define the Topic type
type Topic = {
  id: string;
  title: string;
  icon: string;
  steps: string[];
}

const BankingPage = () => {
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null)

  const topics = [
    {
      id: 'check-balance',
      title: 'Checking Account Balance',
      icon: '💰',
      steps: [
        'Log in to your online banking',
        'Navigate to "Accounts" section',
        'Select your account',
        'View your current balance'
      ]
    },
    {
      id: 'transfer-money',
      title: 'Transferring Money',
      icon: '💸',
      steps: [
        'Go to "Transfers" section',
        'Select "Send Money"',
        'Choose recipient account',
        'Enter amount and confirm'
      ]
    },
    {
      id: 'auto-payments',
      title: 'Automatic Payments',
      icon: '⏰',
      steps: [
        'Navigate to "Payments"',
        'Select "Schedule Payment"',
        'Choose payment frequency',
        'Set up payment details'
      ]
    },
    {
      id: 'account-history',
      title: 'Viewing Account History',
      icon: '📊',
      steps: [
        'Go to "Accounts" section',
        'Select "Transaction History"',
        'Choose date range',
        'View your transactions'
      ]
    }
  ]

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-text-primary mb-8">
          Safe Online Banking
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Topic List */}
          <div className="lg:col-span-1 space-y-4">
            {topics.map(topic => (
              <BankingCard
                key={topic.id}
                topic={topic}
                isSelected={selectedTopic?.id === topic.id}
                onClick={() => setSelectedTopic(topic)}
              />
            ))}
          </div>

          {/* Topic Content */}
          <div className="lg:col-span-3">
            {selectedTopic ? (
              <BankingContent topic={selectedTopic} />
            ) : (
              <div className="card p-8">
                <p className="text-text-secondary">
                  Please select a banking topic from the list to view its content
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BankingPage
