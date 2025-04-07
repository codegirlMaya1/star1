// LeftSection1.tsx
import React from "react";
import './leftsection1.css'; // Import the CSS file

export const LeftSection1: React.FC = () => {
  return (
    <section className="left-section">
      <div className="overlay">
        <img
          src="/Verify.png"
          className="logo"
          alt="Star Gigs Logo"
        />
        <h1 className="headline">
          Discover & Get Discovered!
        </h1>
        <footer className="footer">
          STAR GIGS © 2025 ALL RIGHTS RESERVED
        </footer>
      </div>
    </section>
  );
};

export default LeftSection1;