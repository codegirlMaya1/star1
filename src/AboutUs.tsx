"use client";

import React from 'react';
import Header from './Header'; // Import the Header component
import HeroSection from './HeroSection'; // Import the HeroSection component
import WhyItWorks from './WhyItWorks'; // Import the WhyItWorks component
import Footer from './Footer'; // Import the Footer component
import OneColumnLayout from './OneColumnLayout'; // Import the OneColumnLayout component

const AboutUs: React.FC = () => {
  return (
    <OneColumnLayout>
      <Header /> {/* Add the Header component */}
      <div className="pt-16"> {/* Add padding to prevent overlap */}
        <HeroSection /> {/* Add the HeroSection component */}
      </div>
      <WhyItWorks /> {/* Add the WhyItWorks component */}
      <Footer /> {/* Add the Footer component */}
    </OneColumnLayout>
  );
};

export default AboutUs;