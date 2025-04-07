// LeftSection2.tsx
import * as React from "react";
import './leftsection2.css'; // Import the CSS file

export const LeftSection2: React.FC = () => {
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

export default LeftSection2;