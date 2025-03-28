import { Review } from "./types";
import { StarRating } from "./StarRating";

export const ReviewCard: React.FC<Review> = ({
  username,
  rating,
  content,
  avatarUrl,
}) => {
  return (
    <article className="p-5 bg-white rounded-xl shadow-sm w-[434px] max-sm:w-full">
      <div className="flex flex-col gap-2.5">
        <div className="flex gap-2.5 items-center">
          <img
            src={avatarUrl}
            alt={`${username}'s avatar`}
            className="w-7 h-7 rounded-full border border-solid border-stone-300"
          />
          <h3 className="text-lg text-black">{username}</h3>
        </div>
        <StarRating rating={rating} />
      </div>
      <blockquote className="mt-5 text-base leading-5 text-black">
        {content}
      </blockquote>
    </article>
  );
};
export default ReviewCard;