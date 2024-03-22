import React from "react";
import StartingBannerCard from "../../cards/StartingBannerCard";

const BannerImageSection = () => {
  return (
    <section id="" className="flex items-start bg-[#141414]">
      <div className="blogs-bg min-w-full flex flex-col md:mt-14 justify-between relative bg-cover bg-center bg-no-repeat">
        <div className="mx-auto max-w-screen-2xl px-4 py-2 sm:px-6 md:flex flex-col h-auto justify-between lg:px-8">
          <div className="lg:w-2/3 mt-8 py-6 flex flex-col items-start gap-8 text-center sm:text-left">
            {/* by using MainCard Component */}
            <StartingBannerCard
              section="about"
              v1="36"
              v2="40"
              v3="50"
              v4="0.40"
              v5="33"
              v6="35"
              v7="73"
              v8="0.04"
              h2first="Create & Invest "
              h2second="in Stories that Amplify Light"
              description="Stay tuned with our latest updates, behind-the-scenes sneak peeks, & exclusive interviews as we navigate through the making of ‘Radha & the Great Rescue'!"
              link=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerImageSection;
