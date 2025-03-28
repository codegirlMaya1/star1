import React from "react";
import fullStar from './fullstar.png';
import emptyStar from './emptystar.png';

export const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex gap-1.5">
      {[...Array(5)].map((_, index) => (
        <img
          key={index}
          src={index < rating ? fullStar : emptyStar}
          alt={index < rating ? "Full star" : "Empty star"}
          width="23"
          height="23"
        />
      ))}
    </div>
  );
};

export default StarRating;