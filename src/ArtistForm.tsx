import React, { useState } from 'react';
import './ArtistForm.css'; // Import the custom CSS
import { ArtistFormProps } from './types'; // Import the type

const states = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
  "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
  "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
  "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
  "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming",
  "Washington D.C.", "Puerto Rico"
];

const ArtistForm: React.FC<ArtistFormProps> = ({ formData, setFormData }) => {
  const [isImageConfirmed, setIsImageConfirmed] = useState(false);
  const [randomNumber, setRandomNumber] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'rating' || name === 'reviews' || name === 'pricePerHour' ? parseInt(value) : value,
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({
          ...formData,
          image: reader.result as string,
          imageAlt: file.name,
        });
        const uniqueNumber = Math.floor(Math.random() * 1000) + 1;
        setRandomNumber(uniqueNumber);
        setIsImageConfirmed(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleConfirmImage = () => {
    setIsImageConfirmed(true);
    // Logic to save the image to the public folder can be added here
  };

  return (
    <div className="artist-form-container">
      <h2 className="form-title">Artist Information Form</h2>
      <form className="artist-form">
        <div className="form-group">
          <label htmlFor="id" className="form-label">Artist ID:</label>
          <input type="text" className="form-input" id="id" name="id" value={formData.id} readOnly />
        </div>
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name:</label>
          <input type="text" className="form-input" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="image" className="form-label">Upload Picture:</label>
          <input type="file" className="form-input" id="image" name="image" onChange={handleImageUpload} />
        </div>
        {formData.image && !isImageConfirmed && (
          <div className="form-group">
            <p>Random Number Assigned: {randomNumber}</p>
            <button type="button" className="form-button" onClick={handleConfirmImage}>Confirm Image</button>
          </div>
        )}
        <div className="form-group">
          <label htmlFor="imageAlt" className="form-label">Image Alt Text:</label>
          <input type="text" className="form-input" id="imageAlt" name="imageAlt" value={formData.imageAlt} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="distance" className="form-label">Distance:</label>
          <input type="text" className="form-input" id="distance" name="distance" value={formData.distance} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="location" className="form-label">Location:</label>
          <select className="form-input" id="location" name="location" value={formData.location} onChange={handleChange}>
            <option value="">Select a state</option>
            {states.map((state) => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="rating" className="form-label">Rating:</label>
          <input type="number" className="form-input" id="rating" name="rating" value={formData.rating} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="reviews" className="form-label">Reviews:</label>
          <input type="number" className="form-input" id="reviews" name="reviews" value={formData.reviews} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="pricePerHour" className="form-label">Price Per Hour:</label>
          <input type="number" className="form-input" id="pricePerHour" name="pricePerHour" value={formData.pricePerHour} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="description" className="form-label">Description:</label>
          <textarea className="form-textarea" id="description" name="description" value={formData.description} onChange={handleChange}></textarea>
        </div>
      </form>
    </div>
  );
};

export default ArtistForm;