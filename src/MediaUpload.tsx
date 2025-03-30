import React from "react";
import MediaGallery from "./MediaGallery";
import UploadSection from "./UploadSection";
import ImagePreview from "./ImagePreview";
import YouTubeLink from "./YouTubeLink";
import DeleteConfirmation from "./DeleteConfirmation";
import './mediaupload.css'; // Import the new CSS file

const demoGalleryItems = Array(5).fill({
  url: "/gray.png", // Updated to use the image path from the public directory
  altText: "Gallery image",
});

export const MediaUpload: React.FC = () => {
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
      <main className="flex flex-col bg-white min-h-[screen] custom-padding"> {/* Added custom-padding class */}
        <section className="media-upload-section px-9 py-10">
          <h1 className="mb-3.5 text-2xl font-bold">Upload Media</h1>
          <p className="mb-11 text-lg">
            Upload your media such as images, videos, and audios to showcase it on your profile.
          </p>

          <div className="media-upload-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div>
              <UploadSection onUpload={handleUpload} />
            </div>
            <div>
              <ImagePreview
                preview={{
                  imageUrl: "/gray.png", // Updated to use the image path from the public directory
                  description: "",
                }}
                onUpload={handleImageUpload}
              />
            </div>
            <div>
              <YouTubeLink onSubmit={handleYouTubeLink} />
            </div>
            <div>
              <DeleteConfirmation
                imageUrl="/gray.png" // Updated to use the image path from the public directory
                onDelete={handleDelete}
                onCancel={() => console.log("Cancelled deletion")}
              />
            </div>
          </div>

          <p className="my-10 text-base text-center">
            ***** The below components should be shown after the user uploads the respective file format from above component *****
          </p>

          <section className="gallery-section px-9 py-10">
            <h2 className="mb-3.5 text-xl font-bold">Gallery</h2>
            <MediaGallery items={demoGalleryItems} /> {/* MediaGallery component called last */}
          </section>
        </section>
      </main>
    </>
  );
};

export default MediaUpload;