import React from "react";
// import aboutbanner from "../assets/about-film-bg.png";
import MainCard from "../components/cards/MainCard";
import "./index.css";

const AboutFilm = () => {
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
    <section id="about" className="flex items-start">
      <div id="overlay"></div>
      <div
        loading="eager"
        className="about-bg-image md:min-h-screen h-screen min-w-full flex justify-end items-end pb-2 relative bg-cover bg-center bg-no-repeat"
      >
        <div className="mx-auto max-w-screen-2xl px-4 py-2 sm:px-6 md:flex flex-col h-auto justify-between lg:px-8">
          <div className="lg:w-2/3 mt-24 md:mt-8 py-6 flex flex-col items-start gap-8 text-center sm:text-left">
            {/* by using MainCard Component */}
            <MainCard
              cardN="about-card"
              section="about"
              v1="36"
              v2="40"
              v3="50"
              v4="0.40"
              v5="33"
              v6="35"
              v7="73"
              v8="0.04"
              h2first="about"
              h2second="the film"
              description="When Radha's affectionate her dwarf bull and cow are stolen by cow lifters, twelve-year-old Radha runs away from home on an audacious adventure to rescue them. Along with her only human friend and a suspended cop looking for redemption, they discover & defeat a larger-scale cattle-rustling ring."
              link="/about"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFilm;
