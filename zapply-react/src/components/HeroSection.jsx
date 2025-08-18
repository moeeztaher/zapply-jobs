import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css';

const HeroSection = () => {
  const [typewriterText, setTypewriterText] = useState('');
  const [email, setEmail] = useState('');
  const fullText = 'Autopilot.';

  useEffect(() => {
    let currentIndex = 0;
    const startTyping = () => {
      const typeInterval = setInterval(() => {
        if (currentIndex < fullText.length) {
          setTypewriterText(fullText.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typeInterval);
        }
      }, 50);
    };

    const timer = setTimeout(startTyping, 400);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle waitlist submission
    console.log('Email submitted:', email);
  };

  return (
    <section className="hero-section">
      <motion.h1 
        className="hero-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.4,
          ease: [0.25, 0.1, 0.25, 1],
          type: "tween"
        }}
      >
        Job Hunting on<span className="autopilot" id="typewriter-text">{typewriterText}</span>
      </motion.h1>
      
      <motion.p 
        className="hero-subtitle"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.4, 
          delay: 0.2,
          ease: [0.25, 0.1, 0.25, 1]
        }}
      >
        Apply to jobs in seconds — free, effortless, built for you.
      </motion.p>
      
      <div className="hero-content-wrapper">
        <div className="hero-left">
          <motion.div 
            className="hero-waitlist"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.4,
              ease: [0.25, 0.1, 0.25, 1]
            }}
          >
            <h3 className="waitlist-title">Be the First to Know!</h3>
            <p className="waitlist-subtitle">Get early access and exclusive updates</p>
            <form className="hero-waitlist-form" onSubmit={handleSubmit}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="hero-waitlist-input" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
              <button type="submit" className="hero-waitlist-btn">Join Waitlist</button>
            </form>
          </motion.div>
        </div>
        
        <div className="hero-right">
          <motion.div 
            className="main-image-container"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.5,
              ease: [0.25, 0.1, 0.25, 1]
            }}
          >
            <div className="hero-rounded-container">
              <img src="/hero-background.png" alt="" className="hero-layer hero-layer-bg" />
              <img src="/hero-layer-1.png" alt="" className="hero-layer hero-layer-logo" />
              <img src="/hero-box-1.png" alt="" className="hero-layer hero-layer-box" />
              <img src="/hero-foreground.png" alt="" className="hero-layer hero-layer-fg" />
              
              <div className="hero-layer-works-box">
                <div className="works-box-content">
                  <h3 className="works-title">Works on:</h3>
                  <div className="platform-item">
                    <img src="/workday-logo.png" alt="Workday" />
                    <span>Workday</span>
                  </div>
                  <div className="platform-item">
                    <img src="/greenhouse-logo.png" alt="Greenhouse" />
                    <span>Greenhouse</span>
                  </div>
                  <div className="platform-item">
                    <img src="/lever-logo.png" alt="Lever" />
                    <span>Lever</span>
                  </div>
                  <div className="platform-item">
                    <img src="/ashbyhq-logo.png" alt="AshbyHQ" />
                    <span>AshbyHQ</span>
                  </div>
                  <div className="platform-item more">
                    <span>+18 more</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;