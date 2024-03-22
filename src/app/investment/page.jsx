import React from "react";
import StartingBannerCard from "../../components/cards/StartingBannerCard";
import Header from "../../components/header/Header";
import Footer from "../../pages/Footer";
import Image from "next/image";
import fp1 from "../../assets/fp1.webp";
import fp2 from "../../assets/fp2.webp";
import mp1 from "../../assets/mp1.webp";
import mp2 from "../../assets/mp2.webp";
import mp3 from "../../assets/mp3.webp";
import "./style.css";
import Heading from "@/components/crowdfunding/Heading";
import FeaturedCurrently from "@/components/crowdfunding/FeaturedCurrently";
import StoryCards from "@/components/crowdfunding/StoryCards";
import BannerImageSection from "@/components/crowdfunding/common/BannerImageSection";
import InvestmentBannerVideo from "@/components/crowdfunding/investment/InvestmentBannerVideo";

export default function Page() {
  return (
    <>
      <Header headerBg="bg-black" />
      {/* <BannerVideoSection userType="Investors" /> */}
      <InvestmentBannerVideo />

      {/* <div className="max-w-screen-xl px-8 lg:px-0 mx-auto py-12">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <Heading heading="Currently funding" />
            <FeaturedCurrently />
          </div>

          <hr />

          <div className="flex flex-col gap-5">
            <Heading heading="check out what Radha is up to now" />
            <StoryCards />
          </div>
        </div>
      </div> */}
      <Footer />
    </>
  );
}
