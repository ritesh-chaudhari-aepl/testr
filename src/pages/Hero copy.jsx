// "use client";
// import React from "react";
// import Image from "next/image";
// import playIcon from "../assets/play-icon.svg";
// import downIcon from "../assets/Arrow-Down Circle.svg";
// import Header from "../components/header/Header";
// import { useState } from "react";
// import "./index.css";
// // import VideoPopup from "@/components/updates-video/VideoPopup";
// import EnglishVideoPopup from "@/components/updates-video/EnglishVideoPopup";
// import HindiVideoPopup from "@/components/updates-video/HindiVideoPopup";
// import logo from "../assets/logo-white.png";

// const Hero = ({ onScrollToSection }) => {
//   const banner = {
//     // backgroundImage: "url(" + `${herobanner}` + ")",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//     height: "-webkit-fill-available",
//     width: "-webkit-fill-available",
//     // minInlineSize: "fit-content",
//   };

//   const [isClicked, setIsClicked] = useState(false);

//   const handleClick = () => {
//     const sessionsElement = document.getElementById("about");
//     if (sessionsElement) {
//       sessionsElement.scrollIntoView({ behavior: "smooth" });
//     }

//     setIsClicked(true);
//   };

//   // const [showPopup, setShowPopup] = useState(false);
//   // const [selectedLanguage, setSelectedLanguage] = useState(null);

//   // // const handleVideoPopup = () => {
//   // //   // Show the popup
//   // //   setShowPopup(true);
//   // // };

//   // // const closePopup = () => {
//   // //   // Close the popup
//   // //   setShowPopup(false);
//   // // };

//   // const handleVideoPopup = (language) => {
//   //   setSelectedLanguage(language);
//   //   setShowPopup(true);
//   // };

//   // const closePopup = () => {
//   //   setSelectedLanguage(null);
//   //   setShowPopup(false);
//   // };

//   const [showEnglishPopup, setShowEnglishPopup] = useState(false);
//   const [showHindiPopup, setShowHindiPopup] = useState(false);

//   const handlePlayButtonClick = () => {
//     // Show options for English and Hindi videos
//     setShowEnglishPopup(true);
//     setShowHindiPopup(true);
//   };

//   const handleVideoPopupClose = () => {
//     // Close both English and Hindi video popups
//     setShowEnglishPopup(false);
//     setShowHindiPopup(false);
//   };

//   return (
//     <section id="hero" className="flex items-start">
//       <div
//         loading="eager"
//         className="hero-bg xl:min-h-screen flex justify-center items-end overflow-hidden min-w-full relative bg-cover bg-center bg-no-repeat"
//       >
//         <Header headerBg="bg-transparent" />
//         <div className="relative mx-auto max-w-screen-2xl px-4 py-2 sm:px-6 md:flex flex-col h-auto justify-between lg:px-8 pt-12 xl:pt-0">
//           <div className="md:w-1/2 py-4 mt-12 pt-40 md:pt-0 md:mt-16 xl:mt-0 flex flex-col items-start gap-8 text-center sm:text-left">
//             <div className="w-full flex self-start px-8 items-center">
//               <Image
//                 src={logo}
//                 alt="logo"
//                 priority
//                 className="md:w-32 cursor-pointer w-20"
//               />
//             </div>
//             <h1 className="md:text-2xl lg:text-4xl xl:text-[54px] font-WhitneySemibold lg:leading-[60px] xl:leading-[75.4px] text-center tracking-widest not-italic font-bold text-white">
//               Embark on Radha&apos;s quest to save her beloved bull and cow
//               {/* <strong className="mt-2 text-lg block font-QuickSand font-semibold">
//                 Get Instant Help 24x7 Online Tutoring, Live Sessions,
//                 Assignments
//               </strong> */}
//             </h1>
//             <div className="flex justify-between gap-2 md:gap-4 items-center">
//               <div className="flex items-center gap-1 md:gap-3">
//                 <a
//                   href="/donation"
//                   className="flex items-center gap-1 md:gap-3"
//                 >
//                   <span className="px-4 cursor-pointer text-sm text-white md:px-8 py-3 md:py-5 items-center justify-center flex border-4 border-white rounded-xl">
//                     Contribute
//                   </span>
//                   <p className="text-sm text-white text-center md:text-sm xl:text-xl not-italic font-medium font-Whitney lg:leading-8 tracking-[0.2px]">
//                     Support Radha&apos;s Quest
//                   </p>
//                 </a>
//               </div>
//               <div className="flex items-center gap-2">
//                 <a
//                   // onClick={handleVideoPopup}

//                   onClick={handlePlayButtonClick}
//                   className="items-center justify-center cursor-pointer gap-3 flex"
//                 >
//                   <Image
//                     src={playIcon}
//                     width={60}
//                     className="w-10 xl:w-[60px]"
//                     alt="play-btn"
//                   />
//                   <p className="text-sm text-white text-center md:text-sm xl:text-xl not-italic font-medium font-Whitney lg:leading-8 tracking-[0.2px] underline">
//                     Our Video Message
//                   </p>
//                 </a>
//               </div>
//             </div>
//           </div>
//           {/* <div className="flex flex-col lg:mt-16 xl:mt-32 items-center gap-6"> */}
//           <div className="hidden flex-col lg:mt-16 xl:mt-32 items-center gap-6">
//             <div className="flex items-end gap-1">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="9"
//                 height="8"
//                 viewBox="0 0 9 8"
//                 fill="none"
//               >
//                 <circle cx="4.15137" cy="4" r="4" fill="#EBAE12" />
//               </svg>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="9"
//                 height="8"
//                 viewBox="0 0 9 8"
//                 fill="none"
//               >
//                 <circle cx="4.15137" cy="4" r="4" fill="#D9D9D9" />
//               </svg>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="9"
//                 height="8"
//                 viewBox="0 0 9 8"
//                 fill="none"
//               >
//                 <circle cx="4.15137" cy="4" r="4" fill="#D9D9D9" />
//               </svg>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="9"
//                 height="8"
//                 viewBox="0 0 9 8"
//                 fill="none"
//               >
//                 <circle cx="4.15137" cy="4" r="4" fill="#D9D9D9" />
//               </svg>
//             </div>
//             <a
//               href="#about"
//               onClick={() => {
//                 onScrollToSection(); // Call the callback function to scroll to "sessions"
//                 handleClick();
//               }}
//               // className={`flex flex-col items-center gap-1 ${
//               //   isClicked ? "animate-bounce duration-500" : ""
//               // }`}
//               className="flex flex-col items-center gap-1 animate-bounce cursor-pointer"
//             >
//               <Image src={downIcon} alt="down-icon" />
//               <p className="text-white font-WhitneySemibold text-sm not-italic font-medium leading-6 tracking-[0.14px]">
//                 Know More
//               </p>
//             </a>
//           </div>
//         </div>
//       </div>
//       {/* Popup */}

//       {/* English Video Popup */}
//       {showEnglishPopup && (
//         <EnglishVideoPopup
//           btnCloseClick={handleVideoPopupClose}
//           btnopen={handlePlayButtonClick}
//         />
//       )}
//       {/* Hindi Video Popup */}
//       {showHindiPopup && (
//         <HindiVideoPopup
//           btnCloseClick={handleVideoPopupClose}
//           btnopen={handlePlayButtonClick}
//         />
//       )}
//     </section>
//   );
// };
// export default Hero;

import React, { useState } from "react";
import Image from "next/image";
import playIcon from "../assets/play-icon.svg";
import Header from "../components/header/Header";
import EnglishVideoPopup from "@/components/updates-video/EnglishVideoPopup";
import HindiVideoPopup from "@/components/updates-video/HindiVideoPopup";
import logo from "../assets/logo-white.png";

const Hero = ({ onScrollToSection }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const handlePlayButtonClick = () => {
    // console.log("button is clicked");
    setShowAlert(true);
    // console.log(showAlert, "show alert");
  };

  const handleLanguageSelection = (language) => {
    setSelectedLanguage(language);
    setShowAlert(false);
  };

  return (
    <section id="hero" className="flex items-start">
      <div className="hero-bg lg:min-h-screen flex flex-col justify-between items-center overflow-hidden min-w-full relative bg-cover bg-center bg-no-repeat">
        <div className="flex flex-col justify-center items-center overflow-hidden min-w-full">
          <Header headerBg="bg-transparent" />
          <Header headerBg="bg-transparent" position="relative" />
        </div>
        <div className="mx-auto max-w-screen-2xl px-4 py-2 sm:px-6 md:flex flex-col h-auto md:h-full justify-between lg:px-8 pt-12 md:pt-0">
          <div className="md:w-1/2 py-4 mt-6 xl:mt-20 justify-between h-auto md:h-full flex flex-col items-start gap-8 text-center sm:text-left">
            {/* <div className="w-full flex justify-center px-8 items-center">
              <Image
                src={logo}
                alt="logo"
                priority
                className="md:w-36 cursor-pointer w-20"
              />
            </div> */}
            <h1 className="md:text-2xl lg:text-4xl xl:text-[44px] font-WhitneySemibold lg:leading-[60px] xl:leading-[66.4px] text-center tracking-widest not-italic font-bold text-white">
              Embark on Radha&apos;s quest to save her beloved bull and cow
            </h1>
          </div>
        </div>
        <div className="w-full mx-auto px-4 py-2 md:py-6 lg:py-8 sm:px-6 ">
          <div className="md:w-full py-4 mt-6 md:mt-2 justify-between h-full xl:mt-0 grid grid-cols-2 items-center md:gap-8 text-center sm:text-left">
            {/* <div className="flex justify-between gap-2 md:gap-4 items-center"> */}
            <div className="flex items-center justify-center gap-1 md:gap-3">
              <a
                title="Contribute"
                name="Contribute"
                aria-label="Contribute"
                href="/donation"
                className="flex items-center gap-1 md:gap-3"
              >
                <span className="px-4 cursor-pointer text-xl font-medium text-white md:px-8 py-3 md:py-5 items-center justify-center flex border-4 border-white rounded-xl">
                  Donate
                </span>
                {/* <p className="text-sm text-white text-center md:text-sm xl:text-xl not-italic font-medium font-Whitney lg:leading-8 tracking-[0.2px]">
                    Support Radha&apos;s Quest
                  </p> */}
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-end gap-2 md:mr-10 space-x-4 md:space-x-8 ">
              <a
                onClick={handlePlayButtonClick}
                name="video message"
                aria-label="video message"
                title="video message"
                className="items-center justify-center cursor-pointer gap-3 flex"
              >
                <Image
                  src={playIcon}
                  width={80}
                  className="w-10 md:w-[80px]"
                  alt="play-btn"
                />
                <span className="text-sm text-white text-center md:text-sm xl:text-xl not-italic font-medium font-Whitney lg:leading-8 tracking-[0.2px] underline">
                  Our Video Message
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Alert Popup */}
      {showAlert && (
        <div
          role="alert"
          // className="alert-popup rounded-xl border border-gray-100 bg-white p-4">
          // className="alert-popup top-0 bottom-0 left-0 right-0 fixed my-auto mx-auto z-40 w-full px-40 py-40 h-screen overflow-y-auto bg-black bg-opacity-65 flex justify-center"
          className="alert top-0 bottom-0 left-0 right-0 fixed my-auto mx-auto z-40 w-full px-40 py-40 h-screen overflow-y-auto bg-black bg-opacity-65 flex justify-center"
          // className="alert-popup"
          onClick={() => setShowAlert(false)}
        >
          <div
            className="fixed top-0 left-0 w-full h-full"
            // onClick={() => setShowAlert(false)}
          />
          <div className="mx-auto max-w-screen-xl z-20 my-auto h-max px-4 py-8 sm:px-6 lg:px-8 bg-white rounded-md">
            <div className="grid gap-4">
              <h3 className="text-xl font-semibold text-center">
                Select Language
              </h3>
              <div className="flex gap-2 justify-center items-center">
                <button
                  title="English Lanuage"
                  name="English Lanuage"
                  aria-label="English Lanuage"
                  className="bg-black border-white cursor-pointer border-2 rounded-md hover:bg-yellow-dark hover:text-black font-normal font-sans text-white px-4 py-2"
                  onClick={() => handleLanguageSelection("english")}
                >
                  English
                </button>
                <button
                  title="Hindi Language"
                  name="Hindi Language"
                  aria-label="Hindi Language"
                  className="bg-black border-white cursor-pointer border-2 rounded-md hover:bg-yellow-dark hover:text-black font-normal font-sans text-white px-4 py-2"
                  onClick={() => handleLanguageSelection("hindi")}
                >
                  Hindi
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Video Popups */}
      {selectedLanguage === "english" && (
        <EnglishVideoPopup btnCloseClick={() => setSelectedLanguage(null)} />
      )}
      {selectedLanguage === "hindi" && (
        <HindiVideoPopup btnCloseClick={() => setSelectedLanguage(null)} />
      )}
    </section>
  );
};

export default Hero;
