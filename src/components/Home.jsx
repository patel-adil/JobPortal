import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="search-section">
          <div className="search-content">
            <h1>Find Your Dream Job Today</h1>
            <p className="subtitle">Discover over 10,000+ jobs from top companies worldwide</p>
            
            <div className="search-bars">
              <div className="search-input">
                <input 
                  type="text" 
                  placeholder="Job title or keywords"
                  className="input-field"
                />
              </div>
              <div className="search-input">
                <input 
                  type="text" 
                  placeholder="Location"
                  className="input-field"
                />
              </div>
              <button className="search-button">
                Search Jobs
              </button>
            </div>

            <div className="stats-container">
              <div className="stat-item">
                <span className="stat-number">10k+</span>
                <span className="stat-label">Jobs Posted</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5k+</span>
                <span className="stat-label">Companies</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">8k+</span>
                <span className="stat-label">Job Seekers</span>
              </div>
            </div>
          </div>

          <div className="hero-image-section">
            <div className="image-container">
              <img src="https://img.freepik.com/free-vector/recruitment-agency-searching-job-candidates_1262-19873.jpg" alt="Job Search Illustration" className="main-image" />
            </div>
            <div className="floating-card card-1">
              <div className="card-icon">🎯</div>
              <div className="card-text">
                <span className="card-title">Jobs Matched</span>
                <span className="card-number">95%</span>
              </div>
            </div>
            <div className="floating-card card-2">
              <div className="card-icon">💼</div>
              <div className="card-text">
                <span className="card-title">Job Success</span>
                <span className="card-number">90%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="features-section">
        <div className="features-grid">
          <div className="feature-card">
            <h3>Leading Companies</h3>
            <p>We work with top companies to bring you the best jobs</p>
          </div>
          <div className="feature-card">
            <h3>Verified Jobs</h3>
            <p>All jobs are verified and trusted</p>
          </div>
          <div className="feature-card">
            <h3>Easy Search</h3>
            <p>Smart job search and filtering</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 