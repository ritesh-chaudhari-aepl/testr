import Image from "next/image";
import React from "react";

const ContainCard = ({ headline, subHeading, imageSrc, desc }) => {
  return (
    <div className="grid gap-2 border">
      <Image
        alt={headline}
        title={headline}
        src={imageSrc}
        // className="h-64 w-full object-cover object-top"
        className="h-64 w-full object-fill object-top"
      />

      <h3 className="text-lg px-4 font-bold flex gap-2 items-center text-gray-900 sm:text-xl">
        {headline}

        <span className="text-lg font-medium">{subHeading}</span>
      </h3>

      <p className="px-4 pb-3 max-w-sm lg:text-xl text-gray-700">{desc}</p>
    </div>
  );
};

export default ContainCard;
