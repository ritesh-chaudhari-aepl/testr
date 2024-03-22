import React from "react";

const Heading = ({ heading }) => {
  return (
    <div className="flex flex-col px-2 pt-4 gap-3 ">
      <h2 className="font-bold font-WhitneySemibold capitalize text-4xl tracking-wider">
        {heading}
      </h2>
      <span className="h-[3px] bg-gradient-to-r from-textDark via-brick to-yellow-dark w-20 mb-4" />
    </div>
  );
};

export default Heading;
