import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import useInView from '../hooks/useInView';
import './StatsSection.css';

const StatsSection = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [textRef, textInView] = useInView({ threshold: 0.1 });
  const { isDarkMode } = useTheme();

  return (
    <>
      <motion.section 
        className="stars-section"
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <img 
          src={isDarkMode ? "/stars-dark.svg" : "/stars.svg"} 
          alt="5 stars rating - Igniting 10,000+ Careers" 
          className="stars-image" 
        />
      </motion.section>

      <section className="footer-text" ref={textRef}>
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={textInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ 
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1]
          }}
        >
          Zapply Users
          {" land jobs at "}
          <span className="highlight-text">FAANG+</span>
          {" and "}
          <span className="highlight-text">Fortune 500</span>
          {" Companies"}
        </motion.h2>
      </section>

      <section className="companies-banner">
        <div className="companies-ticker">
          <div className="companies-track">
            {[...Array(10)].map((_, i) => (
              <img key={i} src={isDarkMode ? "/companies-dark.svg" : "/companies-banner.svg"} alt="Companies" className="companies-image" />
            ))}
            {[...Array(10)].map((_, i) => (
              <img key={`dup-${i}`} src={isDarkMode ? "/companies-dark.svg" : "/companies-banner.svg"} alt="Companies" className="companies-image" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default StatsSection;