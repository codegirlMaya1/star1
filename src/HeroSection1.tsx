export const HeroSection1 = () => {
    return (
      <section className="flex justify-center items-center px-96 py-28 max-md:px-10 max-md:py-20 max-sm:px-5 max-sm:py-16">
        <div className="flex flex-col gap-6 items-center max-w-[607px]">
          <h1 className="text-4xl font-bold text-center text-white leading-[50px] max-sm:text-3xl max-sm:leading-10">
            Success Stories
          </h1>
          <p className="text-lg leading-5 text-center text-white max-sm:text-base">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
          <button className="px-9 py-4 mt-6 text-sm font-bold border border-solid border-neutral-50 rounded-[37px] text-neutral-50">
            SHARE YOUR STORY
          </button>
        </div>
      </section>
    );
  };
  

export default HeroSection1;