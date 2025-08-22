import React from 'react';
import { motion } from 'framer-motion';
import useInView from '../hooks/useInView';
import './ApplyJobsSection.css';

const ApplyJobsSection = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section className="apply-jobs-section" ref={ref}>
      <div className="apply-jobs-container">
        <motion.div 
          className="apply-jobs-content"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="apply-jobs-title">
            Apply to Jobs in <span className="click-text">1 Click</span>
          </h2>
          <p className="apply-jobs-description">
            10x faster job applications, powered by smart automation.<br />
            Easy as that.
          </p>
        </motion.div>
        <motion.div 
          className="apply-jobs-images"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <img src="/meta-zapply-artifact.svg" alt="Zapply Meta Application" className="meta-zapply-image" />
        </motion.div>
      </div>
    </section>
  );
};

export default ApplyJobsSection;