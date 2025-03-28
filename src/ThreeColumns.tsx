import React from 'react';
import './ThreeColumns.css';
import { ReviewsGrid } from './ReviewsGrid'; // Import the ReviewsGrid component
import HeroSection2 from './HeroSection2'; // Import the HeroSection2 component
import RatingBars from './RatingBars'; // Import the RatingBars component
import Footer from './Footer'; // Import the Footer component

const ThreeColumns: React.FC = () => {
  return (
    <div className="container mb-5"> {/* Add margin to the bottom of the container */}
      <div className="row">
        <div className="col-md-3 py-2"> {/* Adjust column width */}
          <HeroSection2 /> {/* Add the HeroSection2 component here */}
        </div>
        <div className="col-md-3 py-2"> {/* Adjust column width */}
          <RatingBars /> {/* Add the RatingBars component here */}
        </div>
        <div className="col-md-3 pt-2 pb-5 mb-5"> {/* Adjust column width */}
          <ReviewsGrid /> {/* Add the ReviewsGrid component here */}
        </div>
        <div className="col-md-3 py-2"> {/* Add the fourth column */}
          <Footer /> {/* Add the Footer component here */}
        </div>
      </div>
    </div>
  );
};

export default ThreeColumns;