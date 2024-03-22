import MainCard from "../components/cards/MainCard";
import React from "react";
import "./index.css";

const IssuesImportance = () => {
  const banner = {
    // backgroundImage: "url(" + `${herobanner}` + ")",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "-webkit-fill-available",
    width: "-webkit-fill-available",
    position: "relative",
    // minInlineSize: "fit-content",
  };

  return (
    <section id="cause" className="flex items-start">
      <div className="cause-bg-image md:min-h-screen h-screen min-w-full flex justify-end items-end pb-2 relative bg-cover bg-center bg-no-repeat">
        <div className="mx-auto max-w-screen-2xl px-4 py-2 sm:px-6 md:flex flex-col h-auto justify-between lg:px-8">
          <div className="lg:w-2/3 mt-8 py-6 flex flex-col items-start gap-8 text-center sm:text-left">
            {/* by using MainCard Component */}
            <MainCard
              section="cause"
              v1="36"
              v2="40"
              v3="50"
              v4="0.40"
              v5="33"
              v6="35"
              v7="73"
              v8="0.04"
              h2first="Film Media"
              h2second="supported Causes"
              description="The Mridanga is a percussion instrument traditionally carrying the rythm of devotional songs. Our Trust has imagined a Brihat Mridanga, or Great Mridanga, with far and wide amplifying power, as the symbol of the most impactful media that Cinema is."
              link="/cause"
            />

            {/* by doing manual code */}
            {/* <div className="cause-box bg-gradient-radial-cause from-rgba(36, 40, 50, 0.40) via-rgba(33, 35, 43, 0.04) to-transparent px-24 py-12">
              <div className="flex flex-col items-start gap-12">
                <div className="flex flex-col items-start gap-6">
                  <h2 className="font-bold text-yellow-dark text-5xl md:text-6xl font-WhitneySemibold not-italic capitalize leading-[76.8px]">
                    cause <span className="text-white">the film</span>
                  </h2>
                  <p className="text-white font-WhitneySemibold text-2xl not-italic font-medium leading-9">
                    Cows, revered & cherished, have always been symbolic of
                    prosperity & life in Indian culture. Their gentle demeanor
                    & significant role in sustaining agricultural life make
                    them indispensable to our society
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
        </div>
      </div>
    </section>
  );
};

export default IssuesImportance;
