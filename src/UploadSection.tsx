"use client";
import React from "react";

interface UploadSectionProps {
  onUpload: (files: FileList) => void;
}

const UploadSection: React.FC<UploadSectionProps> = ({ onUpload }) => {
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    onUpload(e.dataTransfer.files);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      onUpload(e.target.files);
    }
  };

  return (
    <section
      className="flex flex-col justify-center items-center bg-stone-500 bg-opacity-10 w-[214px] max-md:w-full"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <input
        type="file"
        id="file-upload"
        className="hidden"
        onChange={handleFileInput}
        multiple
      />
      <label htmlFor="file-upload" className="cursor-pointer">
        <svg
          width="71"
          height="71"
          viewBox="0 0 71 71"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[71px] h-[71px] mb-[21px]"
        >
          <path
            d="M57.2693 32.2132C57.2792 31.9873 57.303 31.7653 57.303 31.5354C57.303 22.7785 50.2031 15.6787 41.4463 15.6787C35.282 15.6787 29.9502 19.2048 27.3279 24.3424C26.1763 23.8766 24.9256 23.607 23.6075 23.607C18.5929 23.607 14.4919 27.3433 13.8319 32.1776C9.14429 33.7731 5.7688 38.2011 5.7688 43.4279C5.7688 49.9965 11.0927 55.3204 17.6613 55.3204H53.3388C59.9074 55.3204 65.2313 49.9965 65.2313 43.4279C65.2313 38.2388 61.9034 33.8386 57.2693 32.2132ZM28.1525 36.0803L34.0987 30.134C34.4852 29.7475 34.9926 29.5533 35.5 29.5533C36.0075 29.5533 36.5149 29.7475 36.9014 30.134L42.8476 36.0803C43.6226 36.8553 43.6226 38.108 42.8476 38.883C42.0726 39.658 40.82 39.658 40.045 38.883L37.4821 36.3201V47.392C37.4821 48.4862 36.5961 49.3741 35.5 49.3741C34.404 49.3741 33.518 48.4862 33.518 47.392V36.3201L30.9551 38.883C30.1801 39.658 28.9275 39.658 28.1525 38.883C27.3775 38.108 27.3775 36.8553 28.1525 36.0803Z"
            fill="black"
          />
        </svg>
        <h3 className="text-xl font-medium">Upload Files</h3>
      </label>
    </section>
  );
};

export default UploadSection;
