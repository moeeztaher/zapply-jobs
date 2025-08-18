import React, { useState, useRef, useEffect } from 'react';
import { faqData } from '../data/faqData';
import './FAQSection.css';

const FAQItem = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isExpanded ? contentRef.current.scrollHeight : 0);
    }
  }, [isExpanded]);

  return (
    <div className={`faq-item ${isExpanded ? 'expanded' : ''}`}>
      <button 
        className="faq-question" 
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span>{item.question}</span>
        <svg 
          className="faq-arrow" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none"
        >
          <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      
      <div 
        className="faq-answer"
        style={{ height: `${height}px` }}
        ref={contentRef}
      >
        <p>{item.answer}</p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">
          Frequently Asked Questions
        </h2>
        
        <div className="faq-items">
          {faqData.map((item) => (
            <FAQItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;