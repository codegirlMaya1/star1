import * as React from "react";
import "./ArtistCard.css";
import CalendarIcon from "../src/CalendarIcon";
import StarIcon from "../src/StarIcon";
import HeartIcon from "../src/HeartIcon";

interface ArtistCardProps {
  name: string;
  image: string;
  imageAlt: string;
  distance: string;
  location: string;
  rating: number;
  reviews: number;
  pricePerHour: number;
  description: string;
  onHire?: () => void;
  onFavorite?: () => void;
}

export const ArtistCard: React.FC<ArtistCardProps> = ({
  name,
  image,
  imageAlt,
  distance,
  location,
  rating,
  reviews,
  pricePerHour,
  description,
  onHire,
  onFavorite,
}) => {
  return (
    <div className="artist-card-container">
      <div className="artist-card">
        <img className="artist-card-image" src={image} alt={imageAlt} />
        <div className="artist-card-body">
          <h4 className="artist-card-title">{name}</h4>
          <div className="calendar-icon">
            <CalendarIcon />
          </div>
          <p className="artist-card-text">{description}</p>
          <div className="details">
            <span>{distance}</span>
            <span>{location}</span>
            <div className="rating-container">
              <div className="rating-row">
                <StarIcon />
                <span className="text-sm text-white">Rating:</span>
                <span className="text-sm text-white">{rating}</span>
              </div>
              <div className="rating-row">
                <span className="text-sm text-white">Review:</span>
                <span className="text-xs text-neutral-400">({reviews})</span>
              </div>
            </div>
            <span>${pricePerHour}/HR</span>
          </div>
          <footer className="artist-card-footer">
            <button onClick={onHire} className="btn-hire">
              Hire Now
              <button
                onClick={onFavorite}
                className="btn-favorite"
                aria-label="Add to favorites"
                style={{ color: "#F45E00" }} // Inline styling for the color
              >
                <HeartIcon />
              </button>
            </button>
            <a href="#" className="btn btn-primary stretched-link">See Profile</a>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;