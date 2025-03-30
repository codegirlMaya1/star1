"use client";
import React, { useState } from "react";
import Header from "./Header";
import MediaGallery from "./MediaGallery";
import UploadSection from "./UploadSection";
import ImagePreview from "./ImagePreview";
import YouTubeLink from "./YouTubeLink";
import DeleteConfirmation from "./DeleteConfirmation";
import Footer from "./Footer";
import { MediaItem } from "./types";

const MediaUpload: React.FC = () => {
  const [mediaItems] = useState<MediaItem[]>(
    Array(15).fill({
      url: "/gray.png", // Updated to use the image path from the public directory
      altText: "Gallery image",
    })
  );

  const handleUpload = (files: FileList) => {
    console.log("Uploading files:", files);
  };

  const handleImageUpload = (description: string) => {
    console.log("Uploading image with description:", description);
  };

  const handleYouTubeLink = (url: string) => {
    console.log("Linking YouTube video:", url);
  };

  const handleDelete = () => {
    console.log("Deleting image");
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap"
        rel="stylesheet"
      />
      <main className="flex flex-col bg-white min-h-[screen]">
        <Header />
        <section className="px-9 py-10">
          <h1 className="mb-3.5 text-2xl font-bold">Upload Media</h1>
          <p className="mb-11 text-lg">
            Upload your media such as images, videos, and audios to showcase it on your profile.
          </p>

          <div className="flex gap-5 max-md:flex-col">
            <MediaGallery items={mediaItems} />
            <UploadSection onUpload={handleUpload} />
          </div>

          <p className="my-10 text-base text-center">
            ***** The below components should be shown after the user uploads the respective file format from above component *****
          </p>

          <ImagePreview
            preview={{
              imageUrl: "/gray.png", // Updated to use the image path from the public directory
              description: "",
            }}
            onUpload={handleImageUpload}
          />

          <YouTubeLink onSubmit={handleYouTubeLink} />

          <DeleteConfirmation
            imageUrl="/gray.png" // Updated to use the image path from the public directory
            onDelete={handleDelete}
            onCancel={() => console.log("Cancelled deletion")}
          />
        </section>
        <Footer />
      </main>
    </>
  );
};

export default MediaUpload;