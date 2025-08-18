import React, { useState } from 'react';
import { motion } from 'framer-motion';
import useInView from '../hooks/useInView';
import './Footer.css';

const Footer = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter email:', email);
    setEmail('');
  };

  return (
    <motion.footer 
      className="footer-section"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="footer-container">
        <div className="footer-brand">
          <img src="/logo-white.svg" alt="Zapply Logo" className="footer-logo" />
          <div className="footer-socials">
            <a href="#instagram" aria-label="Instagram">
              <img src="/instagram-footer.svg" alt="Instagram" className="footer-social-icon" />
            </a>
            <a href="#tiktok" aria-label="TikTok">
              <img src="/tiktok-footer.svg" alt="TikTok" className="footer-social-icon" />
            </a>
            <a href="#linkedin" aria-label="LinkedIn">
              <img src="/linkedin-footer.svg" alt="LinkedIn" className="footer-social-icon" />
            </a>
            <a href="https://discord.gg/yKWw28q7Yq" target="_blank" rel="noopener noreferrer" aria-label="Discord">
              <img src="/discord-footer.svg" alt="Discord" className="footer-social-icon" />
            </a>
            <a href="https://www.reddit.com/r/Zapply/" target="_blank" rel="noopener noreferrer" aria-label="Reddit">
              <img src="/reddit-footer.svg" alt="Reddit" className="footer-social-icon" />
            </a>
            <a href="https://github.com/zapplyjobs" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <img src="/github-footer.svg" alt="GitHub" className="footer-social-icon" />
            </a>
          </div>
          <div className="footer-newsletter">
            <h3>Join our newsletter</h3>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="newsletter-input" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
              <button type="submit" className="newsletter-btn">Send</button>
            </form>
          </div>
        </div>
        
        <div className="footer-column">
          <h3>Discover</h3>
          <div className="footer-links">
            <a href="#dashboard">Dashboard</a>
            <a href="#hot-jobs">Hot Jobs</a>
            <a href="#community">Community</a>
            <a href="#career-tips">Career Tips</a>
          </div>
        </div>
        
        <div className="footer-column">
          <h3>Behind the Scenes</h3>
          <div className="footer-links">
            <a href="#our-story">Our Story</a>
            <a href="#join-team">Join Our Team</a>
            <a href="#help">Need Help?</a>
            <a href="#terms">Terms of Use</a>
            <a href="#privacy">Privacy Promise</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p className="footer-copyright">2025 Zapply, all rights reserved</p>
      </div>
    </motion.footer>
  );
};

export default Footer;