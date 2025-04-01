import React, { useState } from 'react';
import ArtistCard from './ArtistCard';
import './TalentPage1.css'; // Import the custom CSS for styling
import { ArtistFormProps } from './types'; // Import the type

const locations = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose"];
const images = ["Rectangle 92.png", "Rectangle 89.png", "Rectangle 88.png", "Rectangle 72.png"];

const initialArtists = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  name: `Artist ${index + 1}`,
  image: images[Math.floor(Math.random() * images.length)],
  imageAlt: `Artist ${index + 1}`,
  distance: `${Math.floor(Math.random() * 100)} miles`,
  location: locations[Math.floor(Math.random() * locations.length)],
  rating: Math.floor(Math.random() * 5) + 1,
  reviews: Math.floor(Math.random() * 100),
  pricePerHour: Math.floor(Math.random() * 100) + 50,
  description: 'This is a sample description.',
}));

const TalentPage1: React.FC = () => {
  const [artists, setArtists] = useState(initialArtists);
  const [hasChanged, setHasChanged] = useState<{ [key: number]: boolean }>({});
  const [usedIds, setUsedIds] = useState(new Set<number>(initialArtists.map(artist => artist.id)));
  const [formData, setFormData] = useState<ArtistFormProps['formData']>({
    id: 0,
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

  const getNextAvailableId = () => {
    let id = 1;
    while (usedIds.has(id)) {
      id++;
    }
    return id;
  };

  const handleFormSubmit = () => {
    const nextId = getNextAvailableId();
    const updatedArtist = { ...formData, id: nextId };

    setArtists((prevArtists) =>
      prevArtists.map((artist) =>
        artist.id === formData.id ? { ...artist, ...updatedArtist } : artist
      )
    );
    setHasChanged((prev) => ({ ...prev, [updatedArtist.id]: true }));
    setUsedIds((prev) => new Set(prev).add(updatedArtist.id));
    localStorage.setItem(`artist-${updatedArtist.id}`, JSON.stringify(updatedArtist));
  };

  const handleSubmitClick = () => {
    setFormData((prevFormData) => ({ ...prevFormData }));
    handleFormSubmit();
  };

  return (
    <div className="talent-page-container">
      {artists.map((artist) => (
        <div key={artist.id} className="artist-card-wrapper">
          <ArtistCard
            id={artist.id}
            name={artist.name}
            image={artist.image}
            imageAlt={artist.imageAlt}
            distance={artist.distance}
            location={artist.location}
            rating={artist.rating}
            reviews={artist.reviews}
            pricePerHour={artist.pricePerHour}
            description={artist.description}
            hasChanged={hasChanged[artist.id]}
          />
        </div>
      ))}
      <button onClick={handleSubmitClick}>Submit</button>
    </div>
  );
};

export default TalentPage1;