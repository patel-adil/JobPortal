import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'jobseeker'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here
    console.log(formData);
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
        <div className="signup-left">
          <div className="signup-header">
            <h1>Create Account</h1>
            <p>Join thousands of job seekers and employers</p>
          </div>

          <form onSubmit={handleSubmit} className="signup-form">
            <div className="user-type-toggle">
              <button
                type="button"
                className={`toggle-btn ${formData.userType === 'jobseeker' ? 'active' : ''}`}
                onClick={() => setFormData({ ...formData, userType: 'jobseeker' })}
              >
                Job Seeker
              </button>
              <button
                type="button"
                className={`toggle-btn ${formData.userType === 'employer' ? 'active' : ''}`}
                onClick={() => setFormData({ ...formData, userType: 'employer' })}
              >
                Employer
              </button>
            </div>

            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
                required
              />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                required
              />
            </div>

            <div className="form-group terms">
              <label className="checkbox-label">
                <input type="checkbox" required />
                <span>I agree to the <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a></span>
              </label>
            </div>

            <button type="submit" className="signup-button">
              Create Account
            </button>
          </form>

          <div className="social-signup">
            <p>Or sign up with</p>
            <div className="social-buttons">
              <button className="social-btn google">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" />
                Google
              </button>
              <button className="social-btn linkedin">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" />
                LinkedIn
              </button>
            </div>
          </div>

          <p className="login-link">
            Already have an account? <a href="/login">Sign in</a>
          </p>
        </div>

        <div className="signup-right">
          <div className="features-list">
            <h3>Why Choose JobPortal?</h3>
            <ul>
              <li>
                <span className="feature-icon">✨</span>
                <div>
                  <h4>Access to Top Companies</h4>
                  <p>Connect with leading employers worldwide</p>
                </div>
              </li>
              <li>
                <span className="feature-icon">🚀</span>
                <div>
                  <h4>Smart Job Matching</h4>
                  <p>AI-powered job recommendations</p>
                </div>
              </li>
              <li>
                <span className="feature-icon">💼</span>
                <div>
                  <h4>Career Resources</h4>
                  <p>Expert tips and career guidance</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup; 