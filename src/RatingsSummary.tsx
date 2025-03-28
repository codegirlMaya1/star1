
import StarRating from './StarRating'; // Import the StarRating component

export const RatingsSummary = () => {
  const ratingBars = [
    { rating: 1, width: "w-[90px]" },
    { rating: 2, width: "w-[120px]" },
    { rating: 3, width: "w-20" },
    { rating: 4, width: "w-[200px]" },
    { rating: 5, width: "w-60" },
  ];

  return (
    <section className="px-0 py-12">
      <div className="flex justify-between px-12 py-0 mx-auto my-0 max-w-[1200px] max-md:flex-col max-md:gap-10 max-sm:px-5 max-sm:py-0">
        <div className="text-white">
          <h2 className="mb-2.5 text-xl font-bold">Average rating</h2>
          <p className="mb-2.5 text-4xl font-semibold">4.0</p>
          <div className="flex gap-1.5 mb-2.5">
            <StarRating rating={4} />
          </div>
          <p className="text-sm">over 20,000+ ratings are 4 star plus</p>
        </div>
        <div className="flex flex-col gap-2.5">
          {ratingBars.map(({ rating, width }) => (
            <div key={rating} className="flex gap-5 items-center">
              <span className="w-5 text-lg text-white">{rating}</span>
              <div className={`bg-yellow-400 rounded h-[7px] ${width}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RatingsSummary;