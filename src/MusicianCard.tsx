import * as React from "react";
import CalendarIcon from "../src/CalendarIcon";
import StarIcon from "../src/StarIcon";
import HeartIcon from "../src/HeartIcon";

interface MusicianCardProps {
  name: string;
  image: string;
  imageAlt: string;
  distance: string;
  location: string;
  rating: number;
  reviews: number;
  pricePerHour: number;
  description: string;
  onHire?: () => void;
  onFavorite?: () => void;
}

export const MusicianCard: React.FC<MusicianCardProps> = ({
  name,
  image,
  imageAlt,
  distance,
  location,
  rating,
  reviews,
  pricePerHour,
  description,
  onHire,
  onFavorite,
}) => {
  return (
    <article className="flex overflow-hidden flex-col rounded-3xl shadow-md w-[285px]">
      <header className="relative">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-[227px] object-cover rounded-t-[20px]"
        />
        <div className="absolute left-0 px-2 py-1 text-base leading-7 text-black rounded-none bg-[linear-gradient(90deg,#F6BD97_0%,#F5AA79_15%,#F59050_36%,#F45E00_100%)] top-[183px]">
          {name}
        </div>
      </header>

      <main className="p-4 bg-white rounded-3xl">
        <div className="flex justify-between items-start mb-2.5">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <span className="px-2 py-1 text-sm text-white bg-black rounded-[100px]">
                Music
              </span>
              <CalendarIcon />
            </div>
            <div className="flex gap-0.5 items-center text-xs">
              <span className="text-black">{distance}</span>
              <span className="text-neutral-600">{location}</span>
            </div>
          </div>

          <div className="flex flex-col gap-1 items-end">
            <div className="flex gap-1.5 items-center px-1.5 py-0.5 bg-white bg-opacity-50 rounded-[30px]">
              <StarIcon />
              <span className="text-sm">{rating}</span>
              <span className="text-xs">({reviews})</span>
            </div>
            <div className="text-xs">${pricePerHour}/HR</div>
          </div>
        </div>

        <p className="mb-2.5 text-sm">{description}</p>

        <footer className="flex justify-between items-center">
          <button
            onClick={onHire}
            className="px-11 py-3 mr-2.5 text-base rounded-lg bg-gray-950 flex-[grow] text-stone-50"
          >
            Hire Now
          </button>
          <button
            onClick={onFavorite}
            className="p-0 bg-transparent border-none"
            aria-label="Add to favorites"
          >
            <HeartIcon />
          </button>
        </footer>
      </main>
    </article>
  );
};

export default MusicianCard;