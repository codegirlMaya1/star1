import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (selectedOption: string) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSave }) => {
  const [selectedOption, setSelectedOption] = React.useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Select Image Usage</h2>
        <div className="mb-4">
          <label className="block mb-2">
            <input
              type="radio"
              name="imageOption"
              value="avatar"
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            Use as Avatar
          </label>
          <label className="block mb-2">
            <input
              type="radio"
              name="imageOption"
              value="profilePicture"
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            Profile Picture
          </label>
          <label className="block mb-2">
            <input
              type="radio"
              name="imageOption"
              value="backgroundImage"
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            Background Image
          </label>
          <label className="block mb-2">
            <input
              type="radio"
              name="imageOption"
              value="image1"
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            Image 1
          </label>
          <label className="block mb-2">
            <input
              type="radio"
              name="imageOption"
              value="image2"
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            Image 2
          </label>
          <label className="block mb-2">
            <input
              type="radio"
              name="imageOption"
              value="image3"
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            Image 3
          </label>
          <label className="block mb-2">
            <input
              type="radio"
              name="imageOption"
              value="carouselImage"
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            Carousel Image
          </label>
        </div>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
          >
            Cancel
          </button>
          <button
            onClick={() => onSave(selectedOption)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;