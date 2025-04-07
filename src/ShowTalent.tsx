import React from 'react';
import FeaturedTalent from './FeaturedTalent';
import './ShowTalent.css'; // Import the CSS file for styling

const ShowTalent: React.FC = () => {
  return (
    <div className="show-talent-container">
      <FeaturedTalent />
    </div>
  );
};

export default ShowTalent;