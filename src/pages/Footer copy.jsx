import React from "react";
import Image from "next/image";
import footerbanner from "../assets/footer-bg.png";
import logo from "../assets/logo-white.png";
import "./index.css";

const Footer = () => {
  const banner = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "-webkit-fill-available",
    width: "-webkit-fill-available",
    position: "relative",
    // minInlineSize: "fit-content",
  };
  return (
    <section id="footer" className="flex items-start flex-col relative">
      {/* <div className="bg-image block items-center justify-center h-full min-w-full relative bg-cover bg-center bg-no-repeat"> */}
      <div className="footer-bg py-6">
        <div className=" h-auto w-full flex flex-col">
          <div className="flex flex-col items-start gap-6 mx-auto max-w-screen-2xl px-4 py-2 sm:px-6 md:flex h-auto justify-between lg:px-8">
            {/* 1 */}
            <div className="container mx-auto px-6 md:py-8 flex flex-wrap justify-center">
              <Image src={logo} alt="logo" width={150} />
            </div>
            <div className="flex flex-col items-center gap-4 md:gap-7">
              <h3 className="text-white text-center font-WorkSans text-xl md:text-3xl not-italic font-semibold leading-10 capitalize">
                Legal & Acknowledgments
              </h3>
              <p className="text-white text-center font-WorkSans text-sm md:text-xl not-italic font-medium leading-7">
                A heartfelt thank you to our partners, sponsors, & each one of
                you who have joined us on this beautiful journey. Feel free to
                modify the content as per specific details & updates about the
                film & the crowdfunding campaign. This content is crafted to
                provide a warm, engaging, & immersive experience for the website
                visitors, encouraging them to be a part of Radha&apos;s
                adventurous journey
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="cpyright flex bg-[#737373] items-center justify-center w-full h-auto">
        <p className="text-white text-center text-sm font-normal leading-7 not-italic font-WorkSans">
          © 2023 Radha & the Great Rescue. All Rights Reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
