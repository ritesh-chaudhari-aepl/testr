import React from "react";
import "./style.css";

const ImageSlider = ({ t1, t2 }) => {
  return (
    <div className="max-w-screen-xl px-8 mx-auto py-8">
      {/* 5th section - gallery */}
      <div className="flex gap-2 ">
        <div className="gallery w-full flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <h2 className="pt-6 font-bold text-yellow-dark font-WhitneySemibold capitalize text-2xl">
              {t1} <span className="text-black">{t2}</span>
            </h2>
            <span className="h-[3px] bg-gradient-to-r from-textDark via-brick to-yellow-dark w-16" />
          </div>
          <div className="gallery-wrap mt-6 flex w-full h-[540px]">
            {/* <div className="item item-1"></div> */}
            <div className="item item-2"></div>
            <div className="item item-3"></div>
            <div className="item item-4"></div>
            <div className="item item-5"></div>
            <div className="item item-6"></div>
            {/* <div className="item item-7"></div>
            <div className="item item-8"></div>
            <div className="item item-9"></div>
            <div className="item item-10"></div>
            <div className="item item-11"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
