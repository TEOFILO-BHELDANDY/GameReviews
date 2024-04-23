import React, { useState } from 'react';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    onLogin(username);
    
  };

  return (
    <div className="login-container">
      <h1 className="gr">Welcome to GameReviews.eo</h1>
      <h2>Login to your Account</h2>
      <form onSubmit={handleSubmit} className="formy">
        <input className="user"
          type="text" placeholder="Username" value={username} 
          onChange={(e) => setUsername(e.target.value)} required
        /> 
        <br/><br/>
        <input className="pass"
          type="password" placeholder="Password" value={password}
          onChange={(e) => setPassword(e.target.value)} required
        />
        <br/>
        <button type='submit' className='login'>Login</button>
      </form>
    </div>
  );
}

export default Login;
