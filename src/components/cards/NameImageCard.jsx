import Image from "next/image";
import React from "react";

const NameImageCard = ({ imgSrc, title, name }) => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="flex px-2 gap-3 ml-5 w-full items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="12"
            viewBox="0 0 10 12"
            fill="none"
          >
            <path
              d="M9.63078 7.131C9.57428 7.189 9.36094 7.437 9.1622 7.641C7.99708 8.924 4.95762 11.024 3.36678 11.665C3.12518 11.768 2.51437 11.986 2.18802 12C1.8753 12 1.5772 11.928 1.29274 11.782C0.938139 11.578 0.653678 11.257 0.497808 10.878C0.397467 10.615 0.241598 9.828 0.241598 9.814C0.0857282 8.953 0 7.554 0 6.008C0 4.535 0.0857282 3.193 0.213346 2.319C0.227959 2.305 0.383829 1.327 0.554311 0.992C0.867024 0.38 1.47784 0 2.13151 0H2.18802C2.61374 0.015 3.50901 0.395 3.50901 0.409C5.01413 1.051 7.98344 3.048 9.17681 4.375C9.17681 4.375 9.51291 4.716 9.65904 4.929C9.88699 5.235 10 5.614 10 5.993C10 6.416 9.87238 6.81 9.63078 7.131Z"
              fill="black"
            />
          </svg>

          <h3 className="items-center grid font-bold font-WhitneySemibold capitalize text-xl">
            {name}
            {/* <span className="text-xl font-medium"> {span}</span> */}
          </h3>
        </div>
        {/* <a className="relative block rounded-md mt-6 w-3/4 bg-white group h-[400px] overflow-y-auto scrollbar"> */}
        <a
          title={name}
          name={name}
          aria-label={name}
          // className={`relative cursor-pointer block rounded-md mt-6 w-3/4 bg-white group h-[${height}px] overflow-y-auto scrollbar`}
          className={`relative cursor-pointer block rounded-md mt-6 w-4/5 bg-white group h-72 overflow-y-auto scrollbar`}
        >
          <Image
            src={imgSrc}
            // className="w-auto h-60 rounded-lg shadow-md"
            alt={title}
            aria-label={title}
            title={title}
            name={title}
            // className="absolute inset-0 object-cover w-full h-auto "
            className="w-auto h-60 rounded-lg shadow-md"
          />
        </a>
      </div>
    </div>
  );
};

export default NameImageCard;
