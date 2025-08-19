import React from 'react';
import { useTheme } from './context/ThemeContext';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import ApplyJobsSection from './components/ApplyJobsSection';
import CommunitySection from './components/CommunitySection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import './App.css';
import './styles/dark-theme.css';

function App() {
  const { isDarkMode } = useTheme();
  
  return (
    <div className={`App ${isDarkMode ? 'dark' : ''}`}>
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
