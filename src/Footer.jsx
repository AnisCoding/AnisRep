import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer-content">
        <p>&copy; {new Date().getFullYear()} Anis Halabi. All rights reserved.</p>
      
      </div>
    </footer>
  );
}

export default Footer;
