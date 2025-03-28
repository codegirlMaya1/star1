import React from "react";
import { StarRating } from './StarRating'; // Import the updated StarRating component
import './ReviewsGrid.css'; // Import the ReviewsGrid styles

type Review = {
  username: string;
  rating: number;
  content: string;
  avatarUrl: string;
  videoThumbnail?: string;
  videoPlayIcon?: string;
};

const ReviewCard: React.FC<Review> = ({
  username,
  rating,
  content,
  avatarUrl,
}) => (
  <div className="review-card">
    <div className="card-body">
      <div className="d-flex align-items-center mb-3">
        <img
          src={avatarUrl}
          alt={`${username}'s avatar`}
          className="rounded-circle me-3"
          width="50"
          height="50"
        />
        <h5 className="card-title mb-0">{username}</h5>
      </div>
      <StarRating rating={rating} />
      <p className="card-text mt-3">{content}</p>
    </div>
  </div>
);

const VideoReviewCard: React.FC<Review> = ({
  username,
  rating,
  content,
  avatarUrl,
  videoThumbnail,
  videoPlayIcon,
}) => (
  <div className="review-card">
    {videoThumbnail && videoPlayIcon && (
      <div className="position-relative">
        <img
          src={videoThumbnail}
          alt="Review Video Thumbnail"
          className="card-img-top"
        />
        <div className="position-absolute top-50 start-50 translate-middle">
          <img src={videoPlayIcon} alt="Play" className="play-icon" />
        </div>
      </div>
    )}
    <div className="card-body">
      <div className="d-flex align-items-center mb-3">
        <img
          src={avatarUrl}
          alt={`${username}'s avatar`}
          className="rounded-circle me-3"
          width="50"
          height="50"
        />
        <h5 className="card-title mb-0">{username}</h5>
      </div>
      <StarRating rating={rating} />
      <p className="card-text mt-3">{content}</p>
    </div>
  </div>
);

export const ReviewsGrid: React.FC = () => {
  const reviews = [
    {
      username: "monashethi",
      rating: 4,
      content:
        '"A true artist! The dance performance was mesmerizing, and the choreography was flawless. Highly recommend!"',
      avatarUrl: "Rectangle 89.png",
    },
    {
      username: "sophietrend",
      rating: 4,
      content:
        '"Incredible talent! The vocals were stunning, and the professionalism was top-notch. Would definitely book again!"',
      avatarUrl: "Rectangle 92.png",
      videoThumbnail: "Rectangle 72.png",
      videoPlayIcon: "src/playIcon.png",
    },
    {
      username: "Chiccharles",
      rating: 4,
      content:
        "\"Hiring [Performer's Name] was the best decision for our event! Their performance was absolutely captivating, filled with energy, passion, and pure talent. Not only did they engage the audience effortlessly, but their professionalism and dedication truly set them apart. We received so many compliments from our guests, and we can't wait to work with them again!\"",
      avatarUrl: "Rectangle 72.png",
    },
    {
      username: "johnsmith",
      rating: 5,
      content:
        '"An outstanding performance! The energy and talent were unmatched. Highly recommended!"',
      avatarUrl: "Rectangle 95.png",
    },
  ];

  return (
    <div className="reviews-grid">
      {reviews.map((review, index) =>
        review.videoThumbnail ? (
          <VideoReviewCard key={index} {...review} />
        ) : (
          <ReviewCard key={index} {...review} />
        )
      )}
    </div>
  );
};

export default ReviewsGrid;