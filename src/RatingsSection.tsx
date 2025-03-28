import React from "react";
import { StarRating } from "./StarRating";

export const RatingsSection: React.FC = () => {
  return (
    <section className="px-32 py-10 w-full bg-[linear-gradient(270deg,rgba(86,86,86,0.92)_0%,rgba(0,0,0,0.92)_100%)] max-md:px-16 max-sm:px-5">
      <div className="flex gap-10 max-md:flex-col">
        <div className="flex flex-col">
          <h2 className="mb-2.5 text-xl font-bold text-white">
            Average rating
          </h2>
          <div className="flex gap-3 items-center">
            <span className="text-4xl font-semibold text-white">4.0</span>
            <StarRating rating={4} />
          </div>
          <p className="mt-2.5 text-sm text-white">
            over 20,000+ ratings are 4 star plus
          </p>
        </div>
        <div className="flex-1">
          {[5, 4, 3, 2, 1].map((rating) => (
            <div
              key={rating}
              className="flex gap-2.5 items-center mb-4 last:mb-0"
            >
              <div className="flex gap-1.5 items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.4125 17.8781L17.1375 20.8781C17.7469 21.2625 18.4969 20.6906 18.3187 19.9875L16.95 14.6063C16.913 14.4571 16.9189 14.3005 16.967 14.1546C17.0151 14.0086 17.1034 13.8792 17.2219 13.7813L21.4594 10.2469C22.0125 9.78752 21.7312 8.8594 21.0094 8.81252L15.4781 8.45627C15.3272 8.44749 15.1821 8.39494 15.0606 8.30503C14.939 8.21513 14.8463 8.09177 14.7937 7.95002L12.7312 2.75627C12.6767 2.60618 12.5772 2.47653 12.4464 2.38491C12.3156 2.29329 12.1597 2.24414 12 2.24414C11.8403 2.24414 11.6844 2.29329 11.5536 2.38491C11.4228 2.47653 11.3233 2.60618 11.2687 2.75627L9.20625 7.95002C9.15368 8.09177 9.06096 8.21513 8.93943 8.30503C8.81789 8.39494 8.67279 8.44749 8.52187 8.45627L2.99062 8.81252C2.26875 8.8594 1.9875 9.78752 2.54062 10.2469L6.77812 13.7813C6.89656 13.8792 6.98492 14.0086 7.03302 14.1546C7.08112 14.3005 7.08701 14.4571 7.05 14.6063L5.78437 19.5938C5.56875 20.4375 6.46875 21.1219 7.19062 20.6625L11.5875 17.8781C11.7108 17.7997 11.8539 17.7581 12 17.7581C12.1461 17.7581 12.2892 17.7997 12.4125 17.8781Z"
                    fill="#FA8232"
                  />
                </svg>
                <span className="text-lg text-white">{rating}</span>
              </div>
              <div className="flex-1 bg-yellow-400 rounded-full h-[7px]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default RatingsSection;