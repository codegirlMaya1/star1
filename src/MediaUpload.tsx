// MediaUpload.tsx

import React, { useState, useEffect } from "react";
import UploadSection from "./UploadSection";
import ImagePreview from "./ImagePreview";
import MediaGallery from "./MediaGallery";
import { UploadPreview, MediaItem } from "./types";

const MediaUpload: React.FC = () => {
  const userId = localStorage.getItem("userId");
  const [preview, setPreview] = useState<UploadPreview | null>(null);
  const [galleryItems, setGalleryItems] = useState<MediaItem[]>([]);

  useEffect(() => {
    if (userId) {
      const storedItems = localStorage.getItem(`mediaGallery_${userId}`);
      if (storedItems) {
        setGalleryItems(JSON.parse(storedItems));
      }
    }
  }, [userId]);

  useEffect(() => {
    if (userId) {
      localStorage.setItem(`mediaGallery_${userId}`, JSON.stringify(galleryItems));
    }
  }, [galleryItems, userId]);

  const handleUpload = (files: FileList) => {
    const file = files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreview({
        file: file,
        previewUrl: e.target?.result as string,
        imageUrl: e.target?.result as string,
        description: ""
      });
    };
    reader.readAsDataURL(file);
  };

  const handleAddToGallery = (description: string) => {
    if (preview) {
      const newItem = { url: preview.imageUrl, altText: description };
      const updatedItems = [...galleryItems, newItem];
      setGalleryItems(updatedItems);
      setPreview(null);
    }
  };

  return (
    <div className="media-upload">
      <UploadSection onUpload={handleUpload} />
      {preview && <ImagePreview preview={preview} onUpload={handleAddToGallery} />}
      <MediaGallery items={galleryItems} userId={userId} />
    </div>
  );
};

export default MediaUpload;