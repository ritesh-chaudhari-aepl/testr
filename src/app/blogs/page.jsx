import React from "react";
import MainCard from "../../components/cards/MainCard";
import Header from "../../components/header/Header";
import Footer from "../../pages/Footer";
import Image from "next/image";
import fp1 from "../../assets/fp1.webp";
import fp2 from "../../assets/fp2.webp";
import mp1 from "../../assets/mp1.webp";
import mp2 from "../../assets/mp2.webp";
import mp3 from "../../assets/mp3.webp";
import "./style.css";
import BlogCards from "@/components/cards/blogs/BlogCards";

export default function Page() {
  return (
    <>
      <Header headerBg="bg-black" />
      <section id="" className="flex items-start mt-4">
        <div className="blogs-bg xl:min-h-screen min-w-full flex flex-col justify-end relative bg-cover bg-center bg-no-repeat">
          <div className="max-w-screen-2xl px-4 py-2 sm:px-6 md:flex flex-col h-auto justify-between lg:px-8 md:mt-14 xl:mt-0">
            <div className="lg:w-1/2 mt-8 py-6 xl:py-8 flex flex-col items-start gap-8 text-center sm:text-left">
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
                h2first="News"
                h2second="and Updates"
                description="Join our community of filmmakers by supporting uplifting stories that are changing the world."
                // link="/blog-details"
                btnDisplay="hidden"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-screen-xl px-8 lg:px-0 mx-auto py-12">
        <div className="flex flex-col gap-8 justify-center items-center text-2xl font-semibold h-36">
          Coming Soon
        </div>
      </div>
      <Footer />
    </>
  );
}
