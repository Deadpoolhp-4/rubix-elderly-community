import { useState } from 'react'
import { CreditCard, DollarSign, Clock, History } from 'lucide-react'

const BankingTutorial = () => {
  const tutorials = [
    {
      id: 'check-balance',
      icon: DollarSign,
      title: 'Checking Account Balance',
      steps: [
        'Log in to your online banking',
        'Navigate to "Accounts" section',
        'Select your account',
        'View your current balance'
      ]
    },
    {
      id: 'transfer-money',
      icon: CreditCard,
      title: 'Transferring Money',
      steps: [
        'Go to "Transfers" section',
        'Select "Send Money"',
        'Choose recipient account',
        'Enter amount and confirm'
      ]
    },
    {
      id: 'auto-payments',
      icon: Clock,
      title: 'Automatic Payments',
      steps: [
        'Navigate to "Payments"',
        'Select "Schedule Payment"',
        'Choose payment frequency',
        'Set up payment details'
      ]
    },
    {
      id: 'account-history',
      icon: History,
      title: 'Viewing Account History',
      steps: [
        'Go to "Accounts" section',
        'Select "Transaction History"',
        'Choose date range',
        'View your transactions'
      ]
    }
  ]

  const [activeTutorial, setActiveTutorial] = useState(tutorials[0])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Tutorial List */}
      <div className="lg:col-span-1 space-y-2">
        {tutorials.map(tutorial => (
          <button
            key={tutorial.id}
            onClick={() => setActiveTutorial(tutorial)}
            className={`w-full text-left p-4 rounded-lg ${
              activeTutorial.id === tutorial.id
                ? 'bg-primary text-white'
                : 'bg-surface hover:bg-surface/50'
            }`}
          >
            <div className="flex items-center space-x-2">
              <tutorial.icon className="w-5 h-5" />
              <span>{tutorial.title}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Tutorial Content */}
      <div className="lg:col-span-3">
        <div className="space-y-6">
          {activeTutorial.steps.map((step, index) => (
            <div key={index} className="card p-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Step {index + 1}
                  </h3>
                  <p className="text-text-secondary">{step}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BankingTutorial
