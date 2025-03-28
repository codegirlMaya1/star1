
import { HeroSection1 } from "./HeroSection1";
import { RatingsSummary } from "./RatingsSummary";
import { ReviewsGrid } from "./ReviewsGrid";


export const ReviewsPage = () => {
  return (
    <main className="bg-gray-950">

      <HeroSection1 />
      <RatingsSummary />
      <ReviewsGrid />
   
    </main>
  );
};
export default ReviewsPage; 