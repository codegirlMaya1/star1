import { VideoReview } from "./types";
import { StarRating } from "./StarRating";

export const VideoReviewCard: React.FC<VideoReview> = ({
  username,
  rating,
  content,
  avatarUrl,
  videoThumbnail,
  videoPlayIcon,
}) => {
  return (
    <article className="p-5 bg-white rounded-xl shadow-sm w-[396px] max-sm:w-full">
      <div className="relative mb-5">
        <img
          src={videoThumbnail}
          alt="Review Video Thumbnail"
          className="w-full rounded-xl"
        />
        <div className="flex absolute top-2/4 left-2/4 justify-center items-center w-16 h-16 bg-sky-500 rounded-full -translate-x-2/4 -translate-y-2/4">
          <img src={videoPlayIcon} alt="Play" className="h-[23px] w-[19px]" />
        </div>
      </div>
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
export default VideoReviewCard;