import Image from "next/image";
import React from "react";

const Certificates = ({ title, demo }) => {
  return (
    <div className="certificates grid gap-4">
      <div className="flex px-2 pt-2 gap-3 w-full items-center">
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
        <h3 className="font-semibold font-WhitneySemibold capitalize text-xl">
          {title}
        </h3>
      </div>
      <ul className="grid grid-cols-4 gap-3 ml-8 mb-4 flex-wrap">
        <li>
          <Image
            src={demo}
            className="certificate-img w-full p-2 border border-red-100 "
            alt="certificate"
            title="certificate"
            width={1440}
            height={720}
          />
        </li>
        <li>
          <Image
            src={demo}
            className="certificate-img w-full p-2 border border-red-100 "
            alt="certificate"
            title="certificate"
            width={1440}
            height={720}
          />
        </li>
        <li>
          <Image
            src={demo}
            className="certificate-img w-full p-2 border border-red-100 "
            alt="certificate"
            title="certificate"
            width={1440}
            height={720}
          />
        </li>
        <li>
          <Image
            src={demo}
            className="certificate-img w-full p-2 border border-red-100 "
            alt="certificate"
            title="certificate"
            width={1440}
            height={720}
          />
        </li>
      </ul>
    </div>
  );
};

export default Certificates;
