import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Updated import
import './LoginPage.css';

const LoginPage = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Updated from useHistory

  const handleLogin = () => {
    if (userId === 'user' && password === 'password') {
      navigate('/home'); // Updated from history.push
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <input
        type="text"
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
