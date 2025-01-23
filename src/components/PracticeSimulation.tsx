import { useState } from 'react'
import { CreditCard, DollarSign, CheckCircle, XCircle } from 'lucide-react'

const PracticeSimulation = () => {
  const [balance, setBalance] = useState(1000)
  const [transferAmount, setTransferAmount] = useState('')
  const [result, setResult] = useState(null)

  const handleTransfer = () => {
    const amount = parseFloat(transferAmount)
    if (amount > balance) {
      setResult({ success: false, message: 'Insufficient funds' })
    } else {
      setBalance(prev => prev - amount)
      setResult({ success: true, message: 'Transfer successful' })
    }
  }

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold mb-4">Practice Banking Simulation</h3>

      <div className="card p-6">
        <div className="flex items-center space-x-4 mb-6">
          <CreditCard className="w-8 h-8 text-primary" />
          <div>
            <h4 className="text-lg font-semibold">Account Balance</h4>
            <p className="text-2xl font-bold">${balance.toFixed(2)}</p>
          </div>
        </div>

        <div className="space-y-4">
          <label className="block">
            <span className="text-text-primary">Transfer Amount</span>
            <input
              type="number"
              value={transferAmount}
              onChange={(e) => setTransferAmount(e.target.value)}
              className="w-full p-2 rounded-lg bg-surface border border-surface focus:border-primary focus:ring-2 focus:ring-primary"
            />
          </label>

          <button
            onClick={handleTransfer}
            className="btn-primary"
          >
            Transfer Money
          </button>

          {result && (
            <div className={`flex items-center space-x-2 ${
              result.success ? 'text-green-500' : 'text-red-500'
            }`}>
              {result.success ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                <XCircle className="w-5 h-5" />
              )}
              <span>{result.message}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PracticeSimulation
