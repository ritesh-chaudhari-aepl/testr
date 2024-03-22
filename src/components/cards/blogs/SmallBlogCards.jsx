import Image from "next/image";
import React from "react";

const SmallBlogCards = ({ image, h3headline }) => {
  return (
    <a
      title={h3headline}
      name={h3headline}
      aria-label={h3headline}
      href="/blog-details"
      className="flex w-full cursor-pointer gap-2 pt-6"
    >
      <div className="flex w-1/3">
        <Image
          src={image}
          alt={h3headline}
          title={h3headline}
          name={h3headline}
          aria-label={h3headline}
          className="h-16 w-full"
        />
      </div>
      <div className="flex w-2/3">
        <h3 className="text-xl font-semibold font-WhitneySemibold">
          {h3headline}
        </h3>
      </div>
    </a>
  );
};

export default SmallBlogCards;
