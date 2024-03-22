import Image from "next/image";
import React from "react";

const Cards = ({ name, userImage, description }) => {
  return (
    <div className="flex flex-col md:flex-row my-10 md:mb-5">
      <div className="self-center md:self-start mb-4 mr-5 w-[130px] h-[130px] overflow-hidden rounded-full shadow-[0px_7px_8px_#c0c0c0]">
        <Image
          alt={name}
          name={name}
          title={name}
          aria-label={name}
          loading="eager"
          width={130}
          height={130}
          decoding="async"
          data-nimg="1"
          className="object-cover object-center text-transparent"
          src={userImage}
        />
      </div>
      <div className="flex flex-col md:ml-3 md:w-[78%]">
        <p className="capitalize text-2xl font-semibold leading-normal tracking-tighter text-gray-600 mb-2 text-center md:text-left">
          {name}
        </p>
        <div className="mb-4">
          <p className="text-xl leading-relaxed font-medium font-Whitney tracking-none mb-4 last:mb-0">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
