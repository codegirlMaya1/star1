import React from "react";
import { TestimonialCard } from "./TestimonialCard";

const testimonials = [
  {
    username: "monashethi",
    content:
      '"A true artist! The dance performance was mesmerizing, and the choreography was flawless. Highly recommend!"',
    rating: 4,
    userImage: "https://placehold.co/28x28/gray/gray",
    testimonialText: "A true artist! The dance performance was mesmerizing, and the choreography was flawless. Highly recommend!",
    author: "Monashethi",
  },
  {
    username: "MayaChind",
    content:
      '"Beyond expectations! The creativity and passion were evident in every moment. Made our event truly special!"',
    rating: 4,
    userImage: "https://placehold.co/28x28/gray/gray",
    testimonialText: "Beyond expectations! The creativity and passion were evident in every moment. Made our event truly special!",
    author: "MayaChind",
  },
  {
    username: "sophietrend",
    content:
      '"Incredible talent! The vocals were stunning, and the professionalism was top-notch. Would definitely book again!"',
    rating: 4,
    userImage: "https://placehold.co/28x28/gray/gray",
    testimonialText: "Incredible talent! The vocals were stunning, and the professionalism was top-notch. Would definitely book again!",
    author: "SophieTrend",
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="mb-16">
      <h2 className="py-16 text-5xl font-semibold text-center">
        Hear it from customers
      </h2>
      <div className="grid grid-cols-3 gap-8 px-20 max-md:grid-cols-2 max-md:px-10 max-sm:grid-cols-1 max-sm:px-5">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;