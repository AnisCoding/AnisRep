import React, { useState } from 'react';
import './Projects.css';
import foodie1 from './assets/foodie1.png';
import foodie2 from './assets/foodie2.png';
import foodie3 from './assets/foodie3.png';
import maze from './assets/maze.png';
import maze1 from './assets/maze1.png';
import maze2 from './assets/maze2.png';

function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="projects" className="Projects-section">
      <h2 className="Projects-title">
        <span className="highlight">My</span> Projects
      </h2>
      <h1>Foodie App</h1>
      <div className="Projects-gallery">
        <div className="Projects-image-wrapper" onClick={() => handleImageClick(foodie1)}>
          <img src={foodie1} alt="Foodie Project 1" className="Projects-image" />
        </div>
        <div className="Projects-image-wrapper" onClick={() => handleImageClick(foodie2)}>
          <img src={foodie2} alt="Foodie Project 2" className="Projects-image" />
        </div>
        <div className="Projects-image-wrapper" onClick={() => handleImageClick(foodie3)}>
          <img src={foodie3} alt="Foodie Project 3" className="Projects-image" />
        </div>
      </div>

      <h1>Maze Survival</h1>
      <div className="Projects-gallery">
        <div className="Projects-image-wrapper" onClick={() => handleImageClick(maze)}>
          <img src={maze} alt="Maze Project 1" className="Projects-image" />
        </div>
        <div className="Projects-image-wrapper" onClick={() => handleImageClick(maze1)}>
          <img src={maze1} alt="Maze Project 2" className="Projects-image" />
        </div>
        <div className="Projects-image-wrapper" onClick={() => handleImageClick(maze2)}>
          <img src={maze2} alt="Maze Project 3" className="Projects-image" />
        </div>
      </div>

      {selectedImage && (
        <div className="Projects-modal" onClick={handleCloseModal}>
          <img src={selectedImage} alt="Selected Project" className="Projects-modal-image" />
        </div>
      )}
    </section>
  );
}

export default Projects;
