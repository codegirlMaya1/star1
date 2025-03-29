"use client";

import React from 'react';
import './AdditionalContent.css'; // Import the CSS file for styling

const AdditionalContent: React.FC = () => {
  return (
    <div className="additional-content">
      <section className="relative flex flex-col justify-center items-center px-20 py-28 w-full min-h-[530px] max-md:px-5 max-md:pt-24 max-md:max-w-full bg-cover bg-center" style={{ backgroundImage: "url('src/reviews.png')" }}>
        <div className="relative flex flex-col items-center max-w-full w-[919px] z-10 text-white">
          <div className="flex flex-col items-center w-full">
            <h1 className="text-8xl font-bold max-md:max-w-full max-md:text-4xl">
              Additional Content
            </h1>
            <p className="text-lg text-center max-md:max-w-full">
              This section provides additional content related to our services and offerings. Explore more to find out how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdditionalContent;