import * as React from "react";
import './HeroSection.css'; // Import the CSS file for styling

const HeroSection2: React.FC = () => {
  return (
    <section className="hero">
      <img
        src="src/review.png"
        alt="About Us Background"
        className="hero-image"
      />
    </section>
  );
};

export default HeroSection2;