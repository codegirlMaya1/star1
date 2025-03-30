"use client";
import React, { useState } from "react";

interface YouTubeLinkProps {
  onSubmit: (url: string) => void;
}

const YouTubeLink: React.FC<YouTubeLinkProps> = ({ onSubmit }) => {
  const [url, setUrl] = useState("");

  return (
    <section className="p-5 mb-10 border border-neutral-300 border-opacity-80">
      <h2 className="mb-4 text-xl font-bold">Link YouTube video</h2>
      <p className="mb-4 text-base">
        Enter the link of your <strong>YouTube</strong> video to display it in
        your profile.
      </p>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="px-3 mb-9 w-full rounded-sm border border-zinc-800 border-opacity-30 h-[45px]"
        placeholder="Enter YouTube URL"
      />
      <button
        onClick={() => onSubmit(url)}
        className="w-full text-base font-black text-white bg-sky-900 rounded-lg h-[51px]"
      >
        Link Now
      </button>
    </section>
  );
};

export default YouTubeLink;
