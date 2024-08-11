// AboutMe.jsx
import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import './AboutMe.css';

function AboutMe() {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 1000 },
  });

  return (
    <section id="about" className="AboutMe-section">
      <animated.div style={fadeIn} className="AboutMe-content">
      <h2 className="AboutMe-title">
          About <span className="highlight">Me</span>
        </h2>
        <p className="AboutMe-description">
          Enthusiastic web developer with a passion for quality control and problem-solving using tailored data and
          algorithms.<br></br> Seeking a position in software engineer or IT to develop technical skills in a collaborative environment.
        </p>
      </animated.div>
    </section>
  );
}

export default AboutMe;
