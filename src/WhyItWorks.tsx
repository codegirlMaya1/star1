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

const WhyItWorks: React.FC = () => {
  return (
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
  );
};

export default WhyItWorks;