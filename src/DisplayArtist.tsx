// DisplayArtist.tsx
import React, { useState, useEffect } from 'react';
import MusicianCard from './MusicianCard';

const DisplayArtist: React.FC = () => {
  const [artistCards, setArtistCards] = useState<any[]>([]);
  const [filter, setFilter] = useState('priceHighToLow');

  useEffect(() => {
    const storedArtistInfo = localStorage.getItem('artistInfo');
    if (storedArtistInfo) {
      setArtistCards([JSON.parse(storedArtistInfo)]);
    }
  }, []);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  const sortedArtistCards = [...artistCards].sort((a, b) => {
    if (filter === 'priceHighToLow') {
      return b.pricePerHour - a.pricePerHour;
    } else if (filter === 'priceLowToHigh') {
      return a.pricePerHour - b.pricePerHour;
    } else if (filter === 'location') {
      return a.location.localeCompare(b.location);
    }
    return 0;
  });

  return (
    <div className="display-page">
      <header className="w3-container w3-top w3-white w3-xlarge w3-padding-16">
        <span className="w3-left w3-padding">SOME NAME</span>
        <a href="javascript:void(0)" className="w3-right w3-button w3-white" onClick={() => { /* Open sidebar */ }}>☰</a>
      </header>

      <div className="w3-main w3-content" style={{ maxWidth: '1600px', marginTop: '83px' }}>
        <div className="filter-options">
          <label htmlFor="filter">Sort by: </label>
          <select id="filter" value={filter} onChange={handleFilterChange}>
            <option value="priceHighToLow">Price: High to Low</option>
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="location">Location</option>
          </select>
        </div>

        <div className="w3-row w3-grayscale-min">
          {sortedArtistCards.map((artist, index) => (
            <div key={index} className="w3-quarter">
              <MusicianCard {...artist} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayArtist;