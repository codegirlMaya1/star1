import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MusicianCard from './MusicianCard';
import './artistprofileform.css'; // Import the new CSS file

const ArtistProfileForm: React.FC = () => {
  const [artistInfo, setArtistInfo] = useState({
    name: '',
    bio: '',
    description: '',
    profileImage: '',
    images: [] as string[],
    distance: '',
    location: '',
    rating: 0,
    reviews: 0,
    pricePerHour: 0,
    image: '',
    imageAlt: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isHorizontal, setIsHorizontal] = useState(true);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setArtistInfo({ ...artistInfo, [name]: value });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files).map(file => URL.createObjectURL(file));
      setArtistInfo({ ...artistInfo, images: files });
    }
  };

  const handleProfileImageSelect = (image: string) => {
    setArtistInfo({ ...artistInfo, profileImage: image, image, imageAlt: 'Profile Image' });
    localStorage.setItem('profileImage', image); // Save profile image to local storage
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('artistInfo', JSON.stringify(artistInfo)); // Save to local storage
    setSubmitted(true);
    navigate('/artist-profile');
  };

  const toggleLayout = () => {
    setIsHorizontal(!isHorizontal);
  };

  return (
    <div className="artist-profile-form-container">
      <button id="toggle" onClick={toggleLayout}>Toggle layout</button>
      <form onSubmit={handleSubmit} className={`artist-profile-form ${isHorizontal ? 'horizontal' : 'vertical'}`}>
        <h4>Create Your Artist Profile</h4>
        <div className="input-container">
          <div className="styled-input">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={artistInfo.name}
              onChange={handleChange}
            />
          </div>
          <div className="styled-input">
            <label htmlFor="bio">Bio</label>
            <textarea
              id="bio"
              name="bio"
              placeholder="Bio"
              value={artistInfo.bio}
              onChange={handleChange}
            />
          </div>
          <div className="styled-input">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              placeholder="Description"
              value={artistInfo.description}
              onChange={handleChange}
            />
          </div>
          <div className="styled-input">
            <label htmlFor="distance">Distance</label>
            <input
              type="text"
              id="distance"
              name="distance"
              placeholder="Distance"
              value={artistInfo.distance}
              onChange={handleChange}
            />
          </div>
          <div className="styled-input">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Location"
              value={artistInfo.location}
              onChange={handleChange}
            />
          </div>
          <div className="styled-input">
            <label htmlFor="rating">Rating</label>
            <input
              type="number"
              id="rating"
              name="rating"
              placeholder="Rating"
              value={artistInfo.rating}
              onChange={handleChange}
            />
          </div>
          <div className="styled-input">
            <label htmlFor="reviews">Reviews</label>
            <input
              type="number"
              id="reviews"
              name="reviews"
              placeholder="Reviews"
              value={artistInfo.reviews}
              onChange={handleChange}
            />
          </div>
          <div className="styled-input">
            <label htmlFor="pricePerHour">Price per Hour</label>
            <input
              type="number"
              id="pricePerHour"
              name="pricePerHour"
              placeholder="Price per Hour"
              value={artistInfo.pricePerHour}
              onChange={handleChange}
            />
          </div>
          <div className="styled-input">
            <label htmlFor="images">Upload Images</label>
            <input
              type="file"
              id="images"
              multiple
              accept="image/*"
              onChange={handleImageUpload}
            />
          </div>
          <div className="image-preview-container">
            {artistInfo.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Upload ${index + 1}`}
                onClick={() => handleProfileImageSelect(image)}
                className={`image-preview ${artistInfo.profileImage === image ? 'selected' : ''}`}
              />
            ))}
          </div>
          <button type="submit" className="btn-lrg">Submit</button>
        </div>
      </form>
      {submitted && <MusicianCard {...artistInfo} />}
    </div>
  );
};

export default ArtistProfileForm;
