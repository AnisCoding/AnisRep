import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Link, scroller } from 'react-scroll'; // Import scroller from react-scroll
import './Header.css';
import animationGif from './assets/animation.gif';
import { FaInstagram, FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';

function Header({ isDarkMode, onToggleMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 1000 },
  });

  const menuAnimation = useSpring({
    opacity: isMenuOpen ? 1 : 0,
    transform: isMenuOpen ? 'translateY(0)' : 'translateY(-20px)',
    config: { duration: 300 },
  });

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    scroller.scrollTo(sectionId, {
      duration: 500,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -100, // Adjust this value to control the offset
    });
  };

  return (
    <header className={`Header ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="Header-top">
        <button className="hamburger-menu" onClick={handleMenuToggle}>
          &#9776;
        </button>
        <div className="Header-category">
          <span>My</span> Portfolio
        </div>
        <nav className="Header-nav">
          <animated.ul style={fadeIn} className="Header-nav-list">
            <li className="Header-nav-item">
              <a onClick={() => scrollToSection('about')}>About Me</a>
            </li>
            <li className="Header-nav-item">
              <a onClick={() => scrollToSection('skills')}>Skills</a>
            </li>
            <li className="Header-nav-item">
              <a onClick={() => scrollToSection('experience')}>Experience</a>
            </li>
            <li className="Header-nav-item">
              <a onClick={() => scrollToSection('projects')}>Projects</a>
            </li>
            <li className="Header-nav-item">
              <a onClick={() => scrollToSection('contact')}>Contact Me</a>
            </li>
          </animated.ul>
        </nav>
        <div className="Header-toggle">
          <label className="switch">
            <input type="checkbox" checked={isDarkMode} onChange={onToggleMode} />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
      <div className="Header-content">
        <animated.div style={fadeIn} className="Header-title-container">
          <h1 className="Header-title">
            Hi, I'm Anis Halabi<br />
            <span className="Header-title-highlight">Web Developer</span>
          </h1>
          <img src={animationGif} alt="Animation" className="Header-animation" />
          <div className="Header-social-icons">
            <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQEUQpxjgtG9vwAAAZEosDAoBslc_Wxcqoawzvl80EMvO80OlLFvD-31pxRQbn5yQ9UonnY6ueWxZSohck_zkxpwtDS_GpytLbWkCdQ8VTHp-ejZpvy-Kd0mAQ2gU7Aoohll-aM=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fanis-halabi" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://github.com/AnisCoding" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100086234246958&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQEUQpxjgtG9vwAAAZEosDAoBslc_Wxcqoawzvl80EMvO80OlLFvD-31pxRQbn5yQ9UonnY6ueWxZSohck_zkxpwtDS_GpytLbWkCdQ8VTHp-ejZpvy-Kd0mAQ2gU7Aoohll-aM=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fanis-halabi" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </animated.div>
      </div>
      <animated.div style={menuAnimation} className={`hamburger-list ${isMenuOpen ? 'show' : ''}`}>
        <a className="hamburger-nav-item" onClick={() => scrollToSection('about')}>About Me</a>
        <a className="hamburger-nav-item" onClick={() => scrollToSection('skills')}>Skills</a>
        <a className="hamburger-nav-item" onClick={() => scrollToSection('experience')}>Experience</a>
        <a className="hamburger-nav-item" onClick={() => scrollToSection('projects')}>Projects</a>
        <a className="hamburger-nav-item" onClick={() => scrollToSection('contact')}>Contact Me</a>
      </animated.div>
    </header>
  );
}

export default Header;
