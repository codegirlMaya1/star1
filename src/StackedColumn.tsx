import React from 'react';
import HeroSection from './HeroSection'; // Import the HeroSection component
import WhyItWorks from './WhyItWorks'; // Import the WhyItWorks component
import './StackedColumn.css'; // Import the CSS file for styling

const StackedColumn: React.FC = () => {
  return (
    <div className="container">
      <div className="section hero">
        <HeroSection /> {/* Add the HeroSection component */}
      </div>
      <div className="section features">
        <WhyItWorks /> {/* Add the WhyItWorks component */}
      </div>
    </div>
  );
};

export default StackedColumn;