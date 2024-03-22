import Image from "next/image";
import React from "react";

const DonorsCard = ({ nameShort, name, amount }) => {
  return (
    <div className="flex gap-4 w-full items-center justify-between">
      <div className="flex gap-4 items-center">
        <div className="rounded-full font-medium capitalize bg-slate-600 justify-center items-center flex text-white p-4 h-[60px] w-[60px]">
          {/*  src="/images/avatar.jpg" width="50" height="50" alt="image" /> */}
          {nameShort}
        </div>
        <p className="leading-relaxed capitalize text-gray-600 font-medium text-base tracking-none ">
          {name}
        </p>
      </div>
      <p className="break-words text-left text-base font-semibold text-green-700 break-all">
        ₹ {amount}{" "}
      </p>
    </div>
  );
};

export default DonorsCard;
