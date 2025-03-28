import React from 'react';

interface NavigationLinksProps {
  onReviewsClick: () => void;
}

const NavigationLinks: React.FC<NavigationLinksProps> = ({ onReviewsClick }) => {
  return (
    <div className="flex gap-8 items-center max-md:gap-5 max-sm:hidden">
      <button onClick={onReviewsClick} className="px-0 py-3.5 text-base text-stone-50 bg-black">
        Reviews
      </button>
    </div>
  );
};

export default NavigationLinks;