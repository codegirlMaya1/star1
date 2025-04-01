import React, { useState } from 'react';
import ArtistForm from './ArtistForm';
import ArtistCard from './ArtistCard';
import { ArtistFormProps } from './types'; // Import the type 

interface TwoColumnTalentProps {
  formData: ArtistFormProps['formData'];
  setFormData: React.Dispatch<React.SetStateAction<ArtistFormProps['formData']>>;
}

const TwoColumnTalent: React.FC<TwoColumnTalentProps> = ({ formData, setFormData }) => {
  const [image, setImage] = useState<File | null>(null);
  const [showImagePopup, setShowImagePopup] = useState(false);

  const handleFormSubmit = async () => {
    // Send POST request to update the information
    try {
      const response = await fetch('/talent-page', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Success:', result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
      setShowImagePopup(true);
    }
  };

  const handleImageSave = async (save: boolean) => {
    setShowImagePopup(false);
    if (save && image) {
      const formData = new FormData();
      formData.append('image', image);

      try {
        const response = await fetch('/upload-image', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        console.log('Image upload success:', result);

        // Assuming the server returns the path to the uploaded image
        setFormData((prevFormData) => ({
          ...prevFormData,
          profilePicture: result.imagePath,
        }));
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };

  const handleSubmitClick = () => {
    if (image) {
      handleImageSave(true);
    } else {
      handleFormSubmit();
    }
  };

  return (
    <div className="flex w-full h-screen">
      <div className="w-1/2 flex items-center justify-center bg-gray-100">
        <ArtistForm formData={formData} setFormData={setFormData} />
      </div>
      <div className="w-1/2 flex items-center justify-center bg-gray-200">
        <ArtistCard {...formData} />
      </div>
      <input type="file" onChange={handleImageUpload} />
      {showImagePopup && (
        <div className="popup">
          <p>Do you want to save this image?</p>
          <button onClick={() => handleImageSave(true)}>Yes</button>
          <button onClick={() => handleImageSave(false)}>No</button>
        </div>
      )}
      <button onClick={handleSubmitClick} style={{ height: '30px' }}>Submit</button>
    </div>
  );
};

export default TwoColumnTalent;