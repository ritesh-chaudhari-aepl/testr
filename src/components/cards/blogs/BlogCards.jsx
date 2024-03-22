import Image from "next/image";
import React from "react";

const BlogCards = ({ image, h3headline, desc, date, isMorePostSection }) => {
  const cardHeight = isMorePostSection ? "md:h-64" : "md:h-96";
  return (
    <a
      title={h3headline}
      name={h3headline}
      aria-label={h3headline}
      href="/blog-details"
      className="cursor-pointer"
    >
      <div className="flex flex-col px-2 pt-2 gap-4">
        <div className="">
          <Image
            src={image}
            alt="featured post"
            title="featured post"
            name="featured post"
            className={`h-56 w-full object-cover sm:h-72 ${cardHeight}`}
          />
        </div>
        <div className="">
          <h3 className="px-2 font-WhitneySemibold font-bold text-3xl">
            {h3headline}
          </h3>
          <p className="p-2 font-sans text-xl">{desc}</p>
          <p className="p-2 font-sans text-xl">By Angel Studios | {date}</p>
        </div>
      </div>
    </a>
  );
};

export default BlogCards;
