import React from "react";
import { MediaItem } from "./types";

interface MediaGalleryProps {
  items: MediaItem[];
}

const MediaGallery: React.FC<MediaGalleryProps> = ({ items }) => {
  return (
    <section className="flex-1 p-5 border border-neutral-300 border-opacity-80">
      <h2 className="mb-5 text-xl font-bold">
        Media Gallery ({items.length} items)
      </h2>
      <div className="gallery-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {items.map((item, index) => (
          <img
            key={index}
            src={item.url}
            alt={item.altText}
            className="gallery-image"
          />
        ))}
      </div>
    </section>
  );
};

export default MediaGallery;