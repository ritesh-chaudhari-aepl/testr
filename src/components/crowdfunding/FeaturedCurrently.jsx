import Image from "next/image";
import React from "react";
import fp1 from "../../assets/fp1.webp";
import fp2 from "../../assets/fp2.webp";
import mp1 from "../../assets/mp1.webp";
import mp2 from "../../assets/mp2.webp";
import mp3 from "../../assets/mp3.webp";
import filmImage from "@/assets/hero-bg.webp";

const FeaturedCurrently = () => {
  return (
    <div className="grid grid-cols-1 gap-6">
      <div className="bg-white bg-opacity-[0.18] flex flex-col h-full shadow shadow-gray-8 rounded-2xl w-full overflow-hidden sm:flex-row">
        <div className="sm:p-6 sm:pr-3 sm:flex-[0_0_50%]">
          <Image
            src={filmImage}
            alt="featured post"
            title="featured post"
            name="featured post"
            aria-label="featured post"
            className="w-full rounded-lg"
            // className="w-full rounded-lg aspect-video"
          />
        </div>
        <div className="flex flex-col flex-1 pt-4 pb-5 px-6 text-left sm:p-6 sm:pl-3">
          <h3 className="mb-2 self-start font-WhitneySemibold font-semibold text-xl md:text-2xl">
            Radha and The Great Rescue
          </h3>
          {/* <p className="mb-4 font-sans font-light leading-relaxed text-xl">
            Movie P&A Loan | Offering: Reg CF
          </p> */}
          <div className="mb-4">
            <div className="w-full bg-gray-300 rounded-lg h-2 mb-2">
              <div className="h-full bg-green-dark rounded-lg w-full min-w-[8px]"></div>
            </div>
            <p className="text-sm md:text-xl">
              <span className="text-xl md:text-xl font-WhitneySemibold font-semibold">
                Rs.0
              </span>{" "}
              {/* of Rs.0 max */}
            </p>
          </div>
          <hr className="border-gray-300 mb-2" />
          <div className="flex justify-between mb-6">
            <span className="text-xl font-medium">
              <svg
                className="inline-block mr-1 -mt-1"
                fill="none"
                height="16"
                viewBox="0 0 16 16"
                width="16"
              >
                <g stroke="#151515" strokeWidth="1.333">
                  <path
                    d="m5.5 10a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5z"
                    strokeMiterlimit="10"
                  ></path>
                  <path
                    d="m9.713 3.62a3.25 3.25 0 1 1 .882 6.38m-9.595 2.337a5.501 5.501 0 0 1 9 0m.595-2.337a5.493 5.493 0 0 1 4.5 2.337"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
              </svg>{" "}
              0 People
            </span>
            {/* <span className="text-xl font-medium">
              15 <span className="font-light lowercase ml-1">days left</span>
            </span> */}
          </div>
          <a
            title="Show more about this project"
            name="Show more about this project"
            aria-label="Show more about this project"
            href="/about"
            className="mt-auto cursor-pointer"
          >
            <button
              title="Show more about this project"
              name="Show more about this project"
              aria-label="Show more about this project"
              tabIndex="-1"
              className="capitalize cursor-pointer focus:outline-none focus-visible:ring-1 leading-tight tracking-wide disabled:pointer-events-none transition-all duration-150 h-12 px-6 w-full bg-yellow-dark mt-auto rounded-lg "
            >
              show more about this project
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCurrently;
