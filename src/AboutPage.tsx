"use client";

import * as React from "react";

interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  image,
  title,
  description,
}) => (
  <article className="flex flex-col items-center min-w-60 w-[334px]">
    <img
      src={image}
      alt={title}
      className="object-contain max-w-full aspect-[1.1] w-[109px]"
    />
    <div className="flex flex-col items-center mt-6 max-w-full w-[334px]">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="mt-2.5 text-lg text-center">{description}</p>
    </div>
  </article>
);

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <section className="relative flex flex-col justify-center items-center px-20 py-28 w-full min-h-[530px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
        <img
          src="src/hands.png"
          alt="About Us Background"
          className="object-cover absolute inset-0 w-full h-full"
        />
        <div className="relative flex flex-col items-center max-w-full w-[919px] z-10">
          <div className="flex flex-col items-center w-full text-white">
            <h1 className="text-8xl font-bold max-md:max-w-full max-md:text-4xl">
              About Us
            </h1>
            <p className="text-lg text-center max-md:max-w-full">
              Welcome to StarGigs, your ultimate destination for discovering and
              booking exceptional talent! Whether you're planning a private event,
              corporate function, or a public concert, StarGigs connects you with
              the finest musicians, entertainers, and performers from around the
              globe. Our platform makes it easy to find and hire top-rated artists
              that suit your specific needs and budget. At StarGigs, we are
              passionate about bringing extraordinary performances to life,
              ensuring your event is memorable and spectacular. Explore our
              diverse roster of talent and let us help you create an unforgettable
              experience.
            </p>
          </div>
          <button className="gap-2.5 self-stretch px-2.5 py-2.5 mt-9 max-w-full text-lg font-semibold text-center text-black bg-orange-600 rounded-xl min-h-10 w-[135px]">
            See More
          </button>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center self-center mt-32 text-black max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col items-center text-5xl font-semibold max-md:text-4xl">
          <h2 className="max-md:text-4xl">Why it works</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-10 items-start mt-5 max-md:max-w-full">
          <FeatureCard
            image="src/ab.png"
            title="Personalized bookings"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          />
          <FeatureCard
            image="src/ab.png"
            title="Trusted creators"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          />
          <FeatureCard
            image="src/ab1.png"
            title="To empower creators"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          />
        </div>
      </section>
    </div>
  );
};

export default AboutPage;