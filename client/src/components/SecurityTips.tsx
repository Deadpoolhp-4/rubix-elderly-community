import { Shield, Lock, AlertCircle, CheckCircle } from 'lucide-react'

const SecurityTips = () => {
  const tips = [
    {
      icon: Lock,
      title: 'Secure Websites',
      description: 'Always check for "https://" and lock icon in the address bar',
      type: 'info'
    },
    {
      icon: Shield,
      title: 'Strong Passwords',
      description: 'Use a mix of letters, numbers, and special characters',
      type: 'info'
    },
    {
      icon: AlertCircle,
      title: 'Phishing Warning',
      description: 'Never click on suspicious links or share OTPs',
      type: 'warning'
    },
    {
      icon: CheckCircle,
      title: '2FA Protection',
      description: 'Enable two-factor authentication for extra security',
      type: 'success'
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {tips.map((tip, index) => (
        <div key={index} className="card p-6">
          <div className="flex items-center space-x-4">
            <tip.icon className={`w-8 h-8 ${
              tip.type === 'warning' ? 'text-yellow-500' :
              tip.type === 'success' ? 'text-green-500' :
              'text-primary'
            }`} />
            <div>
              <h3 className="text-xl font-semibold mb-1">{tip.title}</h3>
              <p className="text-text-secondary">{tip.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SecurityTips
