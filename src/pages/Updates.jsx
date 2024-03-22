import Image from "next/image";
import React, { useState } from "react";
import Updatesbanner from "../assets/updates-bg.svg";
import MainCard from "../components/cards/MainCard";
import peoples from "../assets/people-pics.png";
import image1 from "@/assets/bg.png";
import "./index.css";
import VideoPopup from "@/components/updates-video/VideoPopup";

const Updates = () => {
  const banner = {
    // backgroundImage: "url(" + `${herobanner}` + ")",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "-webkit-fill-available",
    width: "-webkit-fill-available",
    position: "relative",
    // minInlineSize: "fit-content",
  };

  const [showPopup, setShowPopup] = useState(false);

  const handleVideoPopup = () => {
    // Show the popup
    setShowPopup(true);
  };

  const closePopup = () => {
    // Close the popup
    setShowPopup(false);
  };

  return (
    <section id="updates" className="flex items-start">
      <div className="news-blogs-cover-image min-h-screen md:min-h-full xl:min-h-screen h-screen min-w-full flex md:block justify-end pb-2 relative ">
        <div className="mx-auto max-w-screen-2xl px-4 py-2 sm:px-6 md:flex h-auto justify-between lg:px-8">
          <div className="md:w-1/2 mt-5 py-6 items-end xl:min-h-screen justify-end flex flex-col gap-8 text-left">
            {/* by using MainCard Component */}
            <MainCard
              section="forDarkbg"
              v1="26"
              v2="26"
              v3="26"
              v4="0.40"
              v5="78"
              v6="68"
              v7="58"
              v8="0.07"
              h2first="News"
              h2second="and Updates"
              description="
              Receive updates on the campaign here - events, publicity, celebrities, and cooperating organizations."
              //   "Cows, revered & cherished, have always been symbolic of
              // prosperity & life in Indian culture. Their gentle demeanor
              // & significant role in sustaining agricultural life make
              // them indispensable to our society"
              link="/blogs"
            />
            {/* by doing manual code */}
            {/* <div className="Updates-box bg-gradient-radial-Updates from-rgba(58, 51, 43, 0.40) via-rgba(180, 151, 120, 0.07) to-transparent px-24 py-12">
              <div className="flex flex-col items-start gap-12">
                <div className="flex flex-col items-start gap-6">
                  <h2 className="font-bold text-yellow-dark text-5xl md:text-6xl font-WhitneySemibold not-italic capitalize leading-[76.8px]">
                    Campaign <span className="text-white"> Updates</span>
                  </h2>
                  <p className="text-white font-WhitneySemibold text-2xl not-italic font-medium leading-9">
                    Receive updates on the campaign here - events, publicity, celebrities, and cooperating organizations.
                  </p>
                </div>
                <button className="capitalize flex justify-center font-WhitneySemibold font-bold items-center px-[62px] h-20 border-4 rounded-xl border-white gap-3">
                  Know More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="12"
                    viewBox="0 0 10 12"
                    fill="none"
                  >
                    <path
                      d="M9.63078 7.131C9.57428 7.189 9.36094 7.437 9.1622 7.641C7.99708 8.924 4.95762 11.024 3.36678 11.665C3.12518 11.768 2.51437 11.986 2.18802 12C1.8753 12 1.5772 11.928 1.29274 11.782C0.938139 11.578 0.653678 11.257 0.497808 10.878C0.397467 10.615 0.241598 9.828 0.241598 9.814C0.0857282 8.953 0 7.554 0 6.008C0 4.535 0.0857282 3.193 0.213346 2.319C0.227959 2.305 0.383829 1.327 0.554311 0.992C0.867024 0.38 1.47784 0 2.13151 0H2.18802C2.61374 0.015 3.50901 0.395 3.50901 0.409C5.01413 1.051 7.98344 3.048 9.17681 4.375C9.17681 4.375 9.51291 4.716 9.65904 4.929C9.88699 5.235 10 5.614 10 5.993C10 6.416 9.87238 6.81 9.63078 7.131Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div> */}
          </div>
          <div className="md:w-1/2 flex flex-col justify-center items-center">
            {/* <div className=""> */}
            <div className="relative w-full h-1/2 my-3 m-640 flex justify-center items-center">
              <p className="text-3xl font-semibold text-white">Coming Soon</p>
              {/* <a
                onClick={handleVideoPopup}
                className="w-full flex relative cursor-pointer"
              >
                <Image
                  src={image1}
                  className="inset-0 image-1 w-[28%] h-[6.9rem] left-[24%] top-[2.3rem] md:w-[98px] md:h-[6.1rem] md:left-[24%] md:top-[2.3rem] lg:w-[8.4rem] lg:h-[8.2rem] lg:left-[24%] lg:top-12 xl:w-48 xl:h-[11.8rem] xl:top-[70px] xl:left-[164px] rounded-lg absolute"
                  alt="image 1"
                />
              </a>
              <a
                onClick={handleVideoPopup}
                className="w-full flex relative cursor-pointer"
              >
                <Image
                  src={image1}
                  className="inset-0 image-2 w-[34%] h-[7.6rem] left-[54.3%] top-[0.3rem] md:w-[7.5rem] md:h-[7.2rem] md:left-[54%] md:top-[0rem] lg:w-40 lg:h-[9.5rem] lg:left-[54.2%] lg:top-[0.3rem] xl:w-[14.5rem] xl:h-[13.5rem] xl:top-[8px] xl:left-[372px] rounded-lg absolute"
                  alt="image 2"
                />
              </a>
              <a
                onClick={handleVideoPopup}
                className="w-full flex relative cursor-pointer"
              >
                <Image
                  src={image1}
                  className="inset-0 image-3 w-[50%] h-[7.4rem] top-[9.7rem] left-[0.4rem] md:w-[11.4rem] md:h-[6.4rem] md:top-[8.9rem] md:left-[0.3rem] lg:w-60 lg:h-36 lg:left-[1.5%] lg:top-[11.8rem] xl:w-[21.6rem] xl:h-[12.5rem] xl:top-[270px] xl:left-[10px] rounded-lg absolute"
                  alt="image 3"
                />
              </a>
              <a
                onClick={handleVideoPopup}
                className="w-full flex relative cursor-pointer"
              >
                <Image
                  src={image1}
                  className="inset-0 image-4 w-[29%] h-[7.4rem] left-[54%] top-[8.5rem] md:w-[6.5rem] md:h-[6.8rem] md:left-[54%] md:top-[7.8rem] lg:w-[8.5rem] lg:h-36 lg:left-[54.2%] lg:top-[10.4rem] xl:w-[12.4rem] xl:h-[12.6rem] xl:top-[238px] xl:left-[372px] rounded-lg absolute"
                  alt="image 4"
                />
              </a>
              <a
                onClick={handleVideoPopup}
                className="w-full flex relative cursor-pointer"
              >
                <Image
                  src={image1}
                  className="inset-0 image-5 w-[15%] h-[4.9rem] left-[85%] top-[8.5rem] md:w-[3.3rem] md:h-[4.4rem] md:left-[85%] md:top-[7.8rem] lg:w-[4.5rem] lg:h-28 lg:left-[85%] lg:top-[10.4rem] xl:w-[6.5rem] xl:h-[8.5rem] xl:top-[238px] xl:left-[585px] rounded-lg absolute"
                  alt="image 5"
                />
              </a> */}
            </div>
            {/* </div> */}
            {/* <Image src={peoples} alt="image" /> */}
          </div>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <VideoPopup btnCloseClick={closePopup} btnopen={showPopup} />
      )}
    </section>
  );
};

export default Updates;
