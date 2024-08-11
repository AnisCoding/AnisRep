import React, { useState, useEffect } from 'react';
import Header from './Header';
import Skills from './Skills';
import AboutMe from './AboutMe';
import Experience from './Experience';
import Projects from './Projects';
import ContactMe from './ContactMe';
import Footer from './Footer';
import { Element } from 'react-scroll';
import './App.css';
import ScrollToTop from './ScrollToTop';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  const handleToggleMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.className = isDarkMode ? 'light-mode' : 'dark-mode';
    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
  };

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <Header isDarkMode={isDarkMode} onToggleMode={handleToggleMode} />
      <div className="Divider"></div>
      <main>
        <Element name="aboutMe">
          <AboutMe />
        </Element>
        <div className="Divider"></div>
        <Element name="skills">
          <Skills />
        </Element>
        <div className="Divider"></div>
        <Element name="experience">
          <Experience />
        </Element>
        <div className="Divider"></div>
        <Element name="projects">
          <Projects />
        </Element>
        <div className="Divider"></div>
        <Element name="contactMe">
          <ContactMe />
        </Element>
        <ScrollToTop />
      </main>
      <Footer />
    </div>
  );
}

export default App;
