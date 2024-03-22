import React from "react";
import MainCard from "../components/cards/MainCard";
import MeetCard from "../components/cards/MeetCard";
import actor1 from "../assets/actor.png";
import producer1 from "../assets/producer-1.png";
import producer2 from "../assets/producer-2.png";
import director from "../assets/director.png";
import scriptWriter from "../assets/script-writer.png";
import "./index.css";

const MeetTrustees = () => {
  const banner = {
    // backgroundImage: "url(" + `${herobanner}` + ")",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    height: "-webkit-fill-available",
    width: "-webkit-fill-available",
    position: "relative",
    // minInlineSize: "fit-content",
  };

  return (
    <section id="trustees" className="flex items-start">
      <div
        loading="eager"
        className="trustees-bg-image md:min-h-screen h-screen xl:h-[110vh] min-w-full flex justify-end items-end pb-2 relative bg-cover bg-center bg-no-repeat"
      >
        <div id="overlay"></div>
        <div className="mx-auto max-w-screen-2xl px-4 py-2 sm:px-6 md:flex flex-col h-auto justify-between lg:px-8">
          <div className="lg:w-[60%] mt-32 md:mt-8 pt-6 pb-3 flex flex-col items-start gap-8 text-center sm:text-left">
            {/* by using MainCard Component */}
            {/* <MainCard
              section="forDarkbg"
              v1="#50172bcc"
              v2="#3f2c1911"
              // v3="26"
              // v4="0.80"
              // v5="78"
              // v6="68"
              // v7="58"
              // v8="0.07"
              h2first="About"
              h2second="the Trust"
              // subhead="cast & crew"
              description="Trust Members are animal - welfare advocates dedicated to using media to widely broadcast the message of India’s compassion for all living beings. Their lives are exemplary in their commitment to cow protection and Vedic values."
              link="/trustees"
            /> */}
            <div
              // className={`${section}-box bg-gradient-radial-${section} from-rgba(${v1}, ${v2}, ${v3}, ${v4}) via-rgba(${v5}, ${v6}, ${v7}, ${v8}) to-transparent px-3 py-6 md:px-11 md:py-8 xl:px-24 xl:py-12`}
              // className={`${section}-box bg-gradient-to-r from-[${v1}] from-0% via-[${v2}] via-30% to-transparent to-100% px-3 py-6 md:px-11 md:py-8 xl:px-24 xl:py-12`}
              // className={`trust-box bg-gradient-to-r from-[#131b1d] via-[#b4977811] to-transparent px-3 py-6 md:px-11 md:py-8 xl:px-24 xl:py-12`}
              className={`trust-box px-3 xl:px-12 py-1`}
            >
              <div className="flex flex-col items-start gap-4 xl:gap-4">
                <div className="flex flex-col items-start gap-4">
                  <h2 className="font-bold text-yellow-dark text-left text-4xl md:text-5xl xl:text-6xl font-WhitneySemibold not-italic capitalize md:leading-[30px] lg:leading-[45px] xl:leading-[64px]">
                    About <span className="text-white">the Trust</span>
                  </h2>
                  <div className="flex items-center text-white text-base xl:text-lg not-italic font-WhitneySemibold font-medium leading-5 xl:leading-6 capitalize">
                    Trust Members are animal-welfare advocates dedicated to
                    using media to widely broadcast the message of India’s
                    compassion for all living beings. Their lives are exemplary
                    in their commitment to cow protection and Vedic values.
                  </div>
                </div>
                <a
                  title="Know More"
                  name="Know More"
                  aria-label="Know More"
                  href="/trustees"
                  className="cursor-pointer capitalize text-white flex justify-center font-WhitneySemibold font-bold items-center px-[50px] h-16 md:px-[62px] xl:h-20 border-4 rounded-xl border-white gap-3"
                >
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
                </a>
              </div>
            </div>
            {/* by doing manual code */}
            {/* <div className="Meettrustees-box bg-gradient-radial-Meettrustees from-rgba(58, 51, 43, 0.40) via-rgba(180, 151, 120, 0.07) to-transparent px-24 py-12">
              <div className="flex flex-col items-start gap-12">
                <div className="flex flex-col items-start gap-6">
                  <h2 className="font-bold text-yellow-dark text-5xl md:text-6xl font-WhitneySemibold not-italic capitalize leading-[76.8px]">
                    Crowd <span className="text-white">funding</span>
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

export default MeetTrustees;
