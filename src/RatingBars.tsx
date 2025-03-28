import React from 'react';
import './RatingBars.css'; // Import the custom CSS file

const RatingBars: React.FC = () => {
  return (
    <div className="rating-bars">
      <span className="heading">User Rating</span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star"></span>
      <p>4.1 average based on 254 reviews.</p>
      <hr className="divider" />

      <div className="row">
        <div className="side">
          <div>5 star</div>
        </div>
        <div className="middle">
          <div className="bar-container">
            <div className="bar-5"></div>
          </div>
        </div>
        <div className="side right">
         150
        </div>
        <div className="side">
          <div>4 star</div>
        </div>
        <div className="middle">
          <div className="bar-container">
            <div className="bar-4"></div>
          </div>
        </div>
        <div className="side right">
          63
        </div>
        <div className="side">
          <div>3 star</div>
        </div>
        <div className="middle">
          <div className="bar-container">
            <div className="bar-3"></div>
          </div>
        </div>
        <div className="side right">
          15
        </div>
        <div className="side">
          <div>2 star</div>
        </div>
        <div className="middle">
          <div className="bar-container">
            <div className="bar-2"></div>
          </div>
        </div>
        <div className="side right">
          6
        </div>
        <div className="side">
          <div>1 star</div>
        </div>
        <div className="middle">
          <div className="bar-container">
            <div className="bar-1"></div>
          </div>
        </div>
        <div className="side right">
          20
        </div>
      </div>
    </div>
  );
};

export default RatingBars;