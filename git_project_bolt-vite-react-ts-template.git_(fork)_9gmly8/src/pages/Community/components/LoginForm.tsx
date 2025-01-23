import { useState } from 'react'

const LoginForm = ({ onLogin }: { onLogin: (email: string, password: string, isAdmin: boolean) => void }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isAdmin, setIsAdmin] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onLogin(email, password, isAdmin)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="w-full p-2 rounded-lg bg-surface border border-surface focus:border-primary focus:ring-2 focus:ring-primary"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="w-full p-2 rounded-lg bg-surface border border-surface focus:border-primary focus:ring-2 focus:ring-primary"
        required
      />
      <div>
        <label>
          <input
            type="radio"
            checked={!isAdmin}
            onChange={() => setIsAdmin(false)}
          />
          User
        </label>
        <label>
          <input
            type="radio"
            checked={isAdmin}
            onChange={() => setIsAdmin(true)}
          />
          Admin
        </label>
      </div>
      <button type="submit" className="btn-primary w-full">
        Login
      </button>
    </form>
  )
}

  export default LoginForm
