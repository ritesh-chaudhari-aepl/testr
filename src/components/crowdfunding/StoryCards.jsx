import Image from "next/image";
import React from "react";
import fp1 from "../../assets/fp1.webp";
import fp2 from "../../assets/fp2.webp";
import mp1 from "../../assets/mp1.webp";
import mp2 from "../../assets/mp2.webp";
import mp3 from "../../assets/mp3.webp";

const StoryCards = () => {
  return (
    <div className="grid grid-cols-1 gap-6">
      <div className="bg-white flex flex-col h-full shadow shadow-gray-8 rounded-2xl w-full overflow-hidden sm:flex-row">
        <div className="sm:p-6 sm:pr-3 sm:flex-[0_0_50%]">
          <Image
            src={mp1}
            alt="featured post"
            title="featured post"
            name="featured post"
            aria-label="featured post"
            className="w-full sm:rounded-lg aspect-video"
          />
        </div>
        <div className="flex flex-col flex-1 pt-4 pb-5 px-6 text-left sm:p-6 sm:pl-3">
          <h3 className="mb-2 self-start font-WhitneySemibold font-semibold text-xl">
            Radha - The Great Rescue
          </h3>
          <p className="mb-4 font-sans font-light leading-relaxed text-xl">
            upliftingmovie.com
          </p>
          <div className="mb-4">
            {/* <div className="w-full bg-gray-300 rounded-lg h-2 mb-2">
              <div className="h-full bg-brick rounded-lg w-full min-w-[8px]"></div>
            </div> */}
            <p className="text-xl font-WhitneySemibold font-medium">
              Radha & the Great Rescue&apos; unfolds in the serene villages of
              India, where a young girl&apos;s love for her dwarf bull propels
              her into an unexpected journey. Radha, Ayaan, & Jishnu navigate
              through challenges, friendships, & the raw, unexplored terrains of
              the countryside, unraveling a story that will tug at your
              heartstrings.
            </p>
          </div>
          <a href="" className="mt-auto cursor-pointer">
            <p className="text-xl mb-4">
              You will be redirected to <b>upliftingmovie.com</b>
            </p>
            <button
              title="Learn More"
              name="Learn More"
              aria-label="Learn More"
              tabIndex="-1"
              className="capitalize cursor-pointer focus:outline-none focus-visible:ring-1 leading-tight tracking-wide disabled:pointer-events-none transition-all duration-150 h-12 px-6 w-full bg-yellow-dark mt-auto rounded-lg "
            >
              Learn More
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default StoryCards;
