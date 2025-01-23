import { useState } from 'react';

const AuthForm: React.FC<{ onAuth: (email: string, password: string, isAdmin: boolean, isSignup: boolean) => void }> = ({ onAuth }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [isSignup, setIsSignup] = useState(false); // State to toggle between login and signup

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAuth(email, password, isAdmin, isSignup);
  };

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
      <div className="flex items-center">
        <label className="mr-2">User</label>
        <input
          type="checkbox"
          checked={isAdmin}
          onChange={() => setIsAdmin(!isAdmin)}
          className="toggle-switch"
        />
        <label className="ml-2">Admin</label>
      </div>
      <div className="flex space-x-4">
        <button
          type="button"
          onClick={() => setIsSignup(false)}
          className={`btn-primary ${!isSignup ? 'bg-primary text-white' : 'bg-transparent text-primary'}`}
        >
          Login
        </button>
        <button
          type="button"
          onClick={() => setIsSignup(true)}
          className={`btn-primary ${isSignup ? 'bg-primary text-white' : 'bg-transparent text-primary'}`}
        >
          Sign Up
        </button>
      </div>
      <button type="submit" className="btn-primary w-full">
        {isSignup ? 'Create Account' : 'Login'}
      </button>
    </form>
  );
};

export default AuthForm; 