import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { FaArrowUp } from 'react-icons/fa';
import './ScrollToTop.css';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show the arrow after scrolling down 300px
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Custom scrollToTop function for smooth scrolling
  const scrollToTop = () => {
    const scrollToTopAnimated = () => {
      const c = document.documentElement.scrollTop || document.body.scrollTop;
      if (c > 0) {
        window.requestAnimationFrame(scrollToTopAnimated);
        window.scrollTo(0, c - c / 8);
      }
    };
    scrollToTopAnimated();
  };

  const fadeIn = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    config: { duration: 500 },
  });

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <animated.div style={fadeIn} className="ScrollToTop" onClick={scrollToTop}>
      <FaArrowUp className="ScrollToTop-icon" />
    </animated.div>
  );
}

export default ScrollToTop;
