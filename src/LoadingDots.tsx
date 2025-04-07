// LoadingDots.tsx
"use client";
import * as React from "react";
import './rightsection1.css'; // Import the CSS file

export const LoadingDots: React.FC = () => {
  return (
    <div className="loading-dots">
      {[...Array(4)].map((_, index) => (
        <div key={index} />
      ))}
    </div>
  );
};

export default LoadingDots;