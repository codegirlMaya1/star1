"use client";

import React from 'react';
import AboutPage from './AboutPage'; // Import the AboutPage component
import WhyItWorks from './WhyItWorks'; // Import the WhyItWorks component

import StackedColumn from './StackedColumn'; // Import the StackedColumn component
import Footer from './Footer'; // Import the Footer component

const AboutUs: React.FC = () => {
  return (
    <StackedColumn> {/* Use StackedColumn layout */}
      <div className="pt-8"> {/* Reduce padding to prevent overlap */}
        <AboutPage /> {/* Add the AboutPage component */}
      </div>
      <div className="pt-8"> {/* Add another column */}
        <WhyItWorks /> {/* Add the WhyItWorks component */}
      </div>
    
      <div className="pt-8"> {/* Add the footer column */}
        <Footer /> {/* Add the Footer component */}
      </div>
    </StackedColumn>
  );
};

export default AboutUs;