import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import useInView from '../hooks/useInView';
import './CommunitySection.css';

const CommunitySection = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const { isDarkMode } = useTheme();

  return (
    <section className="community-section" id="community" ref={ref}>
      <div className="community-container">
        <motion.div 
          className="community-image-wrapper"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <img src="/community-image.svg" alt="Community meetup" className="community-image" />
          <div className="community-overlay">
            <a href="https://discord.gg/yKWw28q7Yq" target="_blank" rel="noopener noreferrer" className="social-icon discord-icon">
              <img src="/discord-yellow.svg" alt="Discord" />
            </a>
            <a href="#tiktok" className="social-icon tiktok-icon">
              <img src="/tiktok-yellow.svg" alt="TikTok" />
            </a>
            <a href="https://www.reddit.com/r/Zapply/" target="_blank" rel="noopener noreferrer" className="social-icon reddit-icon">
              <img src="/reddit-yellow.svg" alt="Reddit" />
            </a>
          </div>
        </motion.div>
        <motion.div 
          className="community-content"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="community-title">
            <span className="connect-text">Connect</span> with 1000+ Job Seekers
          </h2>
          <p className="community-description">
            Seek advice from growing network of fellow students and new grads. We will give you the VIP treatment you deserve.
          </p>
          <div className="community-buttons">
            <a href="https://discord.gg/yKWw28q7Yq" target="_blank" rel="noopener noreferrer" className="community-btn">
              <img src={isDarkMode ? "/discord-button-dark.svg" : "/discord-button.svg"} alt="Discord" />
            </a>
            <a href="https://www.reddit.com/r/Zapply/" target="_blank" rel="noopener noreferrer" className="community-btn">
              <img src={isDarkMode ? "/reddit-button-dark.svg" : "/reddit-button.svg"} alt="Reddit" />
            </a>
            <a href="https://github.com/zapplyjobs" target="_blank" rel="noopener noreferrer" className="community-btn">
              <img src={isDarkMode ? "/github-button-dark.svg" : "/github-button.svg"} alt="GitHub" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;