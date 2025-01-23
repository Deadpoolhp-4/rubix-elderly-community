import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const SignupForm: React.FC<{ onSignup: (email: string, username: string, isAdmin: boolean) => void }> = ({ onSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState(''); // New state for username
  const [isAdmin, setIsAdmin] = useState(false); // State to track user type

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password);
      onSignup(email, username, isAdmin); // Pass username to onSignup
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        className="w-full p-2 rounded-lg bg-surface border border-surface focus:border-primary focus:ring-2 focus:ring-primary"
        required
      />
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
        Sign Up
      </button>
    </form>
  );
};

export default SignupForm; 