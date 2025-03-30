import React from "react";

interface DeleteConfirmationProps {
  imageUrl: string;
  onDelete: () => void;
  onCancel: () => void;
}

const DeleteConfirmation: React.FC<DeleteConfirmationProps> = ({
  imageUrl,
  onDelete,
  onCancel,
}) => {
  return (
    <section className="flex gap-5 max-md:flex-col">
      <div className="flex-1 p-5 border border-neutral-300 border-opacity-80">
        <h2 className="mb-5 text-xl font-bold">Delete 1 image</h2>
        <img
          src={imageUrl}
          alt="Delete preview"
          className="w-full h-[417px] object-cover"
        />
      </div>
      <div className="flex flex-col justify-center items-center p-3.5 bg-stone-500 bg-opacity-10 w-[332px] max-md:w-full">
        <p className="mb-28 text-xl font-bold text-center">
          Are you sure you wanted to delete this media?
        </p>
        <button
          onClick={onDelete}
          className="mb-8 w-full text-base font-black text-white bg-red-600 rounded-lg h-[51px]"
        >
          Delete
        </button>
        <button
          onClick={onCancel}
          className="w-full text-base font-black text-white rounded-lg bg-neutral-500 h-[51px]"
        >
          Cancel
        </button>
      </div>
    </section>
  );
};

export default DeleteConfirmation;
