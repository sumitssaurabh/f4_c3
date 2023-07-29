import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/actions';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Use the useNavigate hook to navigate

  const handleLogin = () => {
    setLoginError('');

    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'success') {
          dispatch(loginSuccess(data.user));
          navigate('/profile'); // Use navigate to redirect
        } else {
          setLoginError(data.error);
        }
      })
      .catch((error) => {
        setLoginError('An error occurred during login.');
      });
  };

  return (
    <div className='main'>
<h3>Welcome back! 👋</h3>
<h1>Sign in to your account</h1>
<lable>Your email</lable>
      <input
        type="text"
        
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label>Password</label>
      <input
        type="password"
      
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {loginError && <p>{loginError}</p>}
    </div>
  );
};

export default Login;