import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Login from './Login';
import Recruiter from './Recruiter';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <a href="/" className="logo">
          <span className="logo-icon">⚡</span>
          <span className="logo-text">JobPortal</span>
        </a>

        <div className="nav-center">
          <ul className="nav-links">
            <li><a href="/" className="active">Home</a></li>
            <li className="dropdown">
              <a href="/jobs">Find Jobs <span className="dropdown-arrow">▾</span></a>
              <div className="dropdown-content">
                <a href="/jobs/remote">Remote Jobs</a>
                <a href="/jobs/full-time">Full Time</a>
                <a href="/jobs/part-time">Part Time</a>
                <a href="/jobs/freelance">Freelance</a>
              </div>
            </li>
            <li><a href="/companies">Companies</a></li>
            <li><a href="/salary">Salary Guide</a></li>
          </ul>
        </div>

        <div className="nav-right">
          <a href="/login" className="login-btn" onClick={Login}>Sign In</a>
          <a href="recruiter" className="post-job-btn" onClick={Recruiter}>Post a Job</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 