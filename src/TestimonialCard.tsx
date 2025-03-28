import React from "react";
import { TestimonialProps } from "./types";
import { StarRating } from "./StarRating";

export const TestimonialCard: React.FC<TestimonialProps> = ({
  username,
  content,
  rating,
  userImage,
}) => {
  return (
    <article className="p-6 bg-white rounded-xl shadow-sm">
      <header className="flex gap-2.5 items-center mb-5">
        <img
          src={userImage}
          alt={`${username}'s profile`}
          className="w-[28px] h-[28px] rounded-full"
        />
        <h3 className="text-lg">{username}</h3>
      </header>
      <p className="mb-5 text-base">{content}</p>
      <StarRating rating={rating} />
    </article>
  );
};
