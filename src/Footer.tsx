import React from 'react';
import { FooterLogo } from './FooterLogo'; // Import the FooterLogo component
import './footer.css'; // Import the CSS file

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src="rectangle.png" alt="Footer Background" className="footer-bg" />
        <div className="footer-overlay">
          <FooterLogo /> {/* Use the FooterLogo component */}
          <p className="footer-phone">
            <a href="tel:+1234567890" className="hover:text-yellow-400">+1 (234) 567-890</a>
          </p>
          <p className="footer-address">123 Market Street, City, Country</p>
          <p className="footer-copyright">© 2025 STAR GIGS. All rights reserved.</p>
          <nav className="footer-nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#booking">Booking</a>
            <a href="#contact">Contact</a>
            <a href="#reviews">Reviews</a>
            <a href="#talent-acts">Talent Acts</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;