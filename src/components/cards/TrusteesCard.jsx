import Image from "next/image";
import React from "react";

const TrusteesCard = ({ headline, subHeading, imageSrc, desc }) => {
  return (
    <div className="flex flex-col gap-2 border">
      <Image
        alt={headline}
        title={headline}
        src={imageSrc}
        // className="h-64 w-full object-cover object-top"
        className="h-64 w-full bg-gray-800 object-contain object-top"
        // className="h-64 w-full object-fill object-top"
      />

      <h3 className="text-lg inline-block text-center px-4 font-bold justify-center gap-2 items-center text-gray-900 sm:text-xl">
        {headline} <span className="text-lg font-medium">{subHeading}</span>
      </h3>

      <p className="px-4 pb-3 max-w-sm text-center lg:text-xl text-gray-700">
        {desc}
      </p>
    </div>
  );
};

export default TrusteesCard;
