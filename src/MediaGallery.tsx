import React, { useState, useEffect } from "react";
import { MediaItem } from "./types";
import Modal from "./Modal";

interface MediaGalleryProps {
  items: MediaItem[];
  userId: string | null;
}

const MediaGallery: React.FC<MediaGalleryProps> = ({ items, userId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageTags, setImageTags] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (userId) {
      const storedTags = localStorage.getItem(`imageTags_${userId}`);
      if (storedTags) {
        setImageTags(JSON.parse(storedTags));
      }
    }
  }, [userId]);

  useEffect(() => {
    if (userId) {
      localStorage.setItem(`imageTags_${userId}`, JSON.stringify(imageTags));
    }
  }, [imageTags, userId]);

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const handleSaveOption = (selectedOption: string) => {
    if (selectedImage) {
      setImageTags((prevTags) => ({
        ...prevTags,
        [selectedImage]: selectedOption,
      }));
    }
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const handleDeleteImage = (imageUrl: string) => {
    const updatedItems = items.filter(item => item.url !== imageUrl);
    const updatedTags = { ...imageTags };
    delete updatedTags[imageUrl];
    setImageTags(updatedTags);
    if (userId) {
      localStorage.setItem(`mediaGallery_${userId}`, JSON.stringify(updatedItems));
      localStorage.setItem(`imageTags_${userId}`, JSON.stringify(updatedTags));
    }
  };

  return (
    <section className="flex-1 p-5 border border-neutral-300 border-opacity-80">
      <h2 className="mb-5 text-xl font-bold">
        Media Gallery ({items.length} items)
      </h2>
      <div className="gallery-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {items.map((item, index) => (
          <div key={index} className="relative">
            <img
              src={item.url}
              alt={item.altText}
              className="gallery-image w-full h-[150px] object-cover cursor-pointer"
              onClick={() => handleImageClick(item.url)}
            />
            {imageTags[item.url] && (
              <span className="absolute bottom-0 left-0 bg-white text-black text-xs px-2 py-1">
                {imageTags[item.url]}
              </span>
            )}
            <button
              onClick={() => handleDeleteImage(item.url)}
              className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSave={handleSaveOption}
        />
      )}
    </section>
  );
};

export default MediaGallery;