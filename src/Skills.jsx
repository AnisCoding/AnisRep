import React from 'react';
import './Skills.css';

const skillsData = {
  Technical: [
    'C#', 'JavaScript', 'PHP', 'HTML', 'CSS', 'Bootstrap', 'jQuery', 'Flutter', 'Firebase', 'RESTful APIs', 'mySQL', 'UML modeling'
  ],
  Tools: [
    'Microsoft Office', 'Visual Studio Code', 'Visual Studio', 'SQL Management Studio', 'CMS'
  ],
  Languages: [
    'Arabic (Native)', 'English (Intermediate)', 'French (Intermediate)'
  ]
};

function Skills() {
  return (
    <section className="Skills">
      <h2 className="Skills-title"><span>My</span> Skills</h2>
      {/* Remove the Divider element */}
      {Object.entries(skillsData).map(([category, skills]) => (
        <div key={category} className="Skills-category">
          <h3 className="Skills-category-title">{category}</h3>
          <div className="Skills-list">
            {skills.map((skill, index) => (
              <div key={index} className="Skills-item">
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Skills;
