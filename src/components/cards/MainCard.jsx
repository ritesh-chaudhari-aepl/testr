import React from "react";

const MainCard = ({
  cardN,
  section,
  v1,
  v2,
  // v3,
  // v4,
  // v5,
  // v6,
  // v7,
  // v8,
  h2first,
  h2second,
  subhead,
  description,
  link,
  btnDisplay,
}) => {
  return (
    <div
      // className={`${section}-box bg-gradient-radial-${section} from-rgba(${v1}, ${v2}, ${v3}, ${v4}) via-rgba(${v5}, ${v6}, ${v7}, ${v8}) to-transparent px-3 py-6 md:px-11 md:py-8 xl:px-24 xl:py-12`}
      // className={`${section}-box bg-gradient-to-r from-[${v1}] from-0% via-[${v2}] via-30% to-transparent to-100% px-3 py-6 md:px-11 md:py-8 xl:px-24 xl:py-12`}
      className={`${section}-box bg-gradient-to-r from-[#50494166] via-[#b4977811] to-transparent px-3 py-6 md:px-11 md:py-8 xl:px-24 xl:py-12`}
    >
      <div className="flex flex-col items-start gap-5 md:gap-8">
        <div className="flex flex-col items-start gap-3 md:gap-4">
          <h2 className="font-bold text-yellow-dark text-left text-4xl md:text-5xl xl:text-6xl font-WhitneySemibold not-italic capitalize md:leading-[64.8px] lg:leading-[64px] xl:leading-[70px]">
            {h2first} <span className="text-white">{h2second}</span>
          </h2>
          {subhead && (
            <div className="flex px-10 py-2 justify-center items-center rounded-full border border-yellow-dark text-center text-white text-lg not-italic font-WhitneySemibold font-medium leading-7 capitalize">
              {subhead}
            </div>
          )}
          <p className="text-justify text-white font-Whitney leading-6 md:font-WhitneySemibold text-sm xl:text-lg not-italic font-medium md:leading-9">
            {description}
          </p>
        </div>
        <a
          title="Know More"
          name="Know More"
          aria-label="Know More"
          href={link}
          className={`${btnDisplay} cursor-pointer capitalize text-white flex justify-center font-WhitneySemibold font-bold items-center px-[50px] h-16 md:px-[62px] md:h-20 border-4 rounded-xl border-white gap-3`}
        >
          Know More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="12"
            viewBox="0 0 10 12"
            fill="none"
          >
            <path
              d="M9.63078 7.131C9.57428 7.189 9.36094 7.437 9.1622 7.641C7.99708 8.924 4.95762 11.024 3.36678 11.665C3.12518 11.768 2.51437 11.986 2.18802 12C1.8753 12 1.5772 11.928 1.29274 11.782C0.938139 11.578 0.653678 11.257 0.497808 10.878C0.397467 10.615 0.241598 9.828 0.241598 9.814C0.0857282 8.953 0 7.554 0 6.008C0 4.535 0.0857282 3.193 0.213346 2.319C0.227959 2.305 0.383829 1.327 0.554311 0.992C0.867024 0.38 1.47784 0 2.13151 0H2.18802C2.61374 0.015 3.50901 0.395 3.50901 0.409C5.01413 1.051 7.98344 3.048 9.17681 4.375C9.17681 4.375 9.51291 4.716 9.65904 4.929C9.88699 5.235 10 5.614 10 5.993C10 6.416 9.87238 6.81 9.63078 7.131Z"
              fill="white"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default MainCard;
