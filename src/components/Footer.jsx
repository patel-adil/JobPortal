import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section company-info">
          <h3 className="footer-logo">JobPortal</h3>
          <p className="company-description">
            Connecting talented individuals with their dream careers. Join thousands of satisfied job seekers and employers.
          </p>
          <div className="social-links">
            <a href="#" className="social-link">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>For Job Seekers</h4>
          <ul>
            <li><a href="/browse-jobs">Browse Jobs</a></li>
            <li><a href="/companies">Browse Companies</a></li>
            <li><a href="/salary">Salary Calculator</a></li>
            <li><a href="/resume">Resume Builder</a></li>
            <li><a href="/career-advice">Career Advice</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>For Employers</h4>
          <ul>
            <li><a href="/post-job">Post a Job</a></li>
            <li><a href="/pricing">Pricing Plans</a></li>
            <li><a href="/talent-search">Talent Search</a></li>
            <li><a href="/recruiting">Recruiting Solutions</a></li>
            <li><a href="/resources">Resources</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/help">Help Center</a></li>
          </ul>
        </div>

        <div className="footer-section newsletter">
          <h4>Get Job Updates</h4>
          <p>Subscribe to our newsletter for weekly job updates</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; 2024 JobPortal. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
            <a href="/sitemap">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;