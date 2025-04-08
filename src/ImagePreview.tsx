// ImagePreview.tsx

"use client";
import React, { useState } from "react";
import { UploadPreview } from "./types";

interface ImagePreviewProps {
  preview: UploadPreview;
  onUpload: (description: string) => void;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ preview, onUpload }) => {
  const [description, setDescription] = useState(preview.description);

  return (
    <section className="flex gap-5 mb-10 max-md:flex-col">
      <div className="flex-1 p-5 border border-neutral-300 border-opacity-80">
        <img
          src={preview.imageUrl}
          alt="Upload preview"
          className="w-full h-[403px] object-cover"
        />
      </div>
      <div className="p-3.5 bg-stone-500 bg-opacity-10 w-[332px] max-md:w-full">
        <label className="mb-4 text-base">Short description</label>
        <textarea
          className="mb-7 w-full bg-white rounded-sm border border-zinc-800 border-opacity-30 h-[321px]"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          onClick={() => onUpload(description)}
          className="w-full text-base font-black text-white bg-sky-900 rounded-lg h-[51px]"
        >
          UPLOAD NOW
        </button>
      </div>
    </section>
  );
};

export default ImagePreview;