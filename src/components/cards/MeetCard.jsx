import React from "react";
import Image from "next/image";

const MeetCard = ({ userImg, profession, Name }) => {
  return (
    <div className="meet-card bg-[#00000024] rounded-md py-5 px-6 flex flex-col items-center gap-1 ">
      <div className="flex flex-col items-center gap-4">
        <Image
          src={userImg}
          className="w-24 xl:w-32"
          title={profession}
          alt={profession}
          name={profession}
          aria-label={profession}
        />
        <h3 className="text-white text-center text-lg xl:text-2xl not-italic font-WhitneySemibold font-medium leading-6 capitalize">
          {Name}
        </h3>
      </div>
      {/* <p className="text-white text-center font-Whitney font-medium not-italic text-xl leading-6 capitalize">
        {profession}
      </p> */}
    </div>
  );
};

export default MeetCard;
