import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login </h2>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="login-button">
            Sign In
          </button>
          
          <p>Don't have an account? <a href="/signup">Sign up</a></p>
        </form>
      </div>

      <div className="login-footer">
<div className="login-footer-content">



    <h2> Find Jobs, Create Your Future</h2>
    <p>Join the millions of people who have already found their dream jobs</p>
   
      </div>
      </div>
    </div>
  );
};

export default Login; 