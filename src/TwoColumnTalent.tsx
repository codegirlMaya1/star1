import React, { useState } from 'react';
import ArtistForm from './ArtistForm';
import ArtistCard from './ArtistCard';

const TwoColumnTalent: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    imageAlt: '',
    distance: '',
    location: '',
    rating: 0,
    reviews: 0,
    pricePerHour: 0,
    description: '',
  });

  return (
    <div className="flex w-full h-screen">
      <div className="w-1/2 flex items-center justify-center bg-gray-100">
        <ArtistForm formData={formData} setFormData={setFormData} />
      </div>
      <div className="w-1/2 flex items-center justify-center bg-gray-200">
        <ArtistCard {...formData} />
      </div>
    </div>
  );
};

export default TwoColumnTalent;