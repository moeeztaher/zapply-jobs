import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import ApplyJobsSection from './components/ApplyJobsSection';
import CommunitySection from './components/CommunitySection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <StatsSection />
      <ApplyJobsSection />
      <CommunitySection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App
