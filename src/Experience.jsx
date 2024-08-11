import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import './Experience.css';
import cisCertificate from './assets/cis.jpg';  // Replace with actual image path
import unicefCertificate from './assets/unicef.jpg';  // Replace with actual image path

const experiences = [
  {
    role: 'Intern, ISS - Software Hive (ICC Group)',
    duration: 'March 2024 - July 2024',
    details: [
      'Studied Drupal basics and developed PHP plugins.',
      'Enhanced web interactivity using AJAX and jQuery.',
      'Worked on API development and .NET backend.',
    ],
  },
  {
    role: 'BootCamp, CIS Innovation',
    duration: 'June 2023 - August 2023',
    details: [
      'Learned software analysis and UML modeling.',
      'Developed backend systems with PHP.',
      'Created UIs with HTML, CSS, Bootstrap, and jQuery.',
    ],
    certificate: cisCertificate,  // Add certificate image
  },
  {
    role: 'Web Programming Tutor, UNICEF',
    duration: 'Sep 2019 - Dec 2019',
    details: [
      'Organized web development workshops.',
      'Evaluated classroom methods and fostered community relations.',
    ],
    certificate: unicefCertificate,  // Add certificate image
  },
];

function Experience() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 1000 },
  });

  const handleImageClick = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <section id="experience" className="Experience-section">
      <h2 className="Experience-title">
        <span className="highlight">My</span> Experience
      </h2>
      {experiences.map((exp, index) => (
        <animated.div
          key={index}
          style={{ ...fadeIn, transitionDelay: `${index * 200}ms` }}
          className="Experience-entry"
        >
          <h3 className="Experience-role">{exp.role}</h3>
          <p className="Experience-duration">{exp.duration}</p>
          <ul className="Experience-details">
            {exp.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
          {exp.certificate && (
  <div className="Experience-certificate">
    <img
      src={exp.certificate}
      alt={`${exp.role} Certificate`}
      onClick={() => handleImageClick(exp.certificate)}
      className={`certificate-thumbnail ${exp.role.includes('CIS Innovation') ? 'cis-certificate' : ''} ${exp.role.includes('UNICEF') ? 'unicef-certificate' : ''}`}
    />
  </div>
)}

        </animated.div>
      ))}

      {selectedCertificate && (
        <div className="certificate-modal" onClick={closeModal}>
          <div className="certificate-modal-content">
            <img src={selectedCertificate} alt="Certificate" />
          </div>
        </div>
      )}
    </section>
  );
}

export default Experience;
