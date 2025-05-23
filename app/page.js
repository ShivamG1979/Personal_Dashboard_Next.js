'use client'

import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Academics from './components/Academics'
import Skills from './components/Skills'
import Hobbies from './components/Hobbies'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Footer from './components/Footer'

export default function Home() {
  const [activeSection, setActiveSection] = useState('profile'); 
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check for user's preferred theme
    const userPrefersDark = window.matchMedia && 
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (userPrefersDark) {
      setTheme('dark');
    }
    
    // Initial checks
    handleResize();
    
    // Add event listeners
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNavigation = (section) => {
    setActiveSection(section);
    if (isMobile) {
      setShowMobileMenu(false);
    }
    
    // Smooth scroll to section
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`dashboard ${theme}`}>
      <Navbar 
        activeSection={activeSection} 
        handleNavigation={handleNavigation}
        isMobile={isMobile}
        showMobileMenu={showMobileMenu}
        toggleMobileMenu={toggleMobileMenu}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <div className="container main-content">
        <section id="profile" className={activeSection === 'profile' ? 'section' : 'hidden'}>
          <Profile />
        </section>
        <section id="academics" className={activeSection === 'academics' ? 'section' : 'hidden'}>
          <Academics />
        </section>
        <section id="skills" className={activeSection === 'skills' ? 'section' : 'hidden'}>
          <Skills />
        </section>
        <section id="projects" className={activeSection === 'projects' ? 'section' : 'hidden'}>
          <Projects />
        </section>
        <section id="achievements" className={activeSection === 'achievements' ? 'section' : 'hidden'}>
          <Achievements />
        </section>
        <section id="hobbies" className={activeSection === 'hobbies' ? 'section' : 'hidden'}>
          <Hobbies />
        </section>
      </div>
      <Footer />
    </div>
  )
}