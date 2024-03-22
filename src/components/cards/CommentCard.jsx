import Image from "next/image";
import React from "react";

const CommentCard = ({ nameShort, name, time, desc }) => {
  return (
    <div className="flex gap-4 ">
      <div className="rounded-full bg-slate-800 justify-center text-center capitalize items-center flex text-white p-4 h-[60px] w-[60px]">
        {/* <Image src="/images/avatar.jpg" width="50" height="50" alt="image" /> */}
        {nameShort}
      </div>
      <div>
        <div className="flex gap-4 mb-2 last:mb:0">
          <p className="leading-relaxed capitalize text-slate-800 font-semibold text-xl tracking-none ">
            {name}
          </p>
          <span className="text-gray-500 dark:text-neutral-3 leading-6 text-[13px] tracking-wide flex items-center">
            {time} ago
          </span>
        </div>
        <p className="break-words text-left text-sm break-all">{desc} </p>
      </div>
    </div>
  );
};

export default CommentCard;
