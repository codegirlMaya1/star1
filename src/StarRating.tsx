import React from 'react';
import './StarRating.css'; // Import any necessary CSS

interface StarRatingProps {
  rating: number;
}

const fullStar = '/public/fullstar.png'; // Correct path to reference the public directory
const emptyStar = '/public/emptystar.png'; // Correct path to reference the public directory

export const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => {
        return (
          <img
            key={index}
            src={index < rating ? fullStar : emptyStar}
            alt={index < rating ? 'Full Star' : 'Empty Star'}
            className="star"
          />
        );
      })}
    </div>
  );
};

export default StarRating;