"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/header/Header";
import CardPopup from "@/components/crowdfunding/donation/tiers/CardPopup";
import Footer from "@/pages/Footer";
import "./tooltip.css";
import { useRouter } from "next/navigation";
import { cardData } from "@/data/nav2";

const Page = ({ searchParams }) => {
  console.log(searchParams, "params");

  const tierNo = searchParams.tierNo;
  const post = cardData.find((post) => post.tierNo === tierNo);
  console.log(post, "post");

  // const router = useRouter();
  // const tierNo = router.query?.tierNo || "Tier 1"; // Provide a default value if tierNo is undefined
  // const Inr = router.query?.Inr || "2,000 "; // Provide a default value if Inr is undefined
  // const Cad = router.query?.Cad || "50 "; // Provide a default value if Cad is undefined
  // const desc =
  //   router.query?.desc ||
  //   "See your name on the big screen! By opting into this donation tier your name will be included in our movie&apos;s credits as a supporter of the film.  Thank you so much for your contribution!"; // Provide a default value if desc is undefined
  // const includedItems = router.query?.includedItems || [
  //   "Your Name in Radha's Credits",
  //   "Digital Ticket",
  // ]; // Provide a default value if includedItems is undefined
  // const estshipping = router.query?.estshipping || "May 2024"; // Provide a default value if estshipping is undefined
  // const claim = router.query?.claim || "3"; // Provide a default value if claim is undefined
  //check it first & verify if you are getting the requried data or not?

  // console.log(tierNo, Inr, Cad, "default");
  const [showPopup, setShowPopup] = useState(false);
  const [scrollBehavior, setScrollBehavior] = useState("inside");

  const handleBackToProject = () => {
    // Show the popup
    setShowPopup(true);
  };

  const closePopup = () => {
    // Close the popup
    setShowPopup(false);
  };

  // State variable & functions for count
  const [count, setCount] = React.useState(1);

  const inc = () => {
    setCount(count + 1);
  };

  const dec = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <Header headerBg="bg-black" />
      <section className="flex flex-col lg:flex-row mt-24 text-black">
        <div className="lg:w-2/3 py-6 px-6">
          <div className=" flex flex-col gap-5 max-w-2xl mx-auto lg:mr-12">
            <h1 className="text-3xl font-bold mb-5 text-center md:text-left">
              Your Contribution{" "}
              <span className="text-gray-500 font-medium text-lg">
                (1 item)
              </span>
            </h1>
            <div className="flex justify-between ">
              <div className="flex flex-col gap-5">
                <h4 className="uppercase font-light font-WorkSans">
                  {post?.tierNo}
                  {/* Tier 1 */}
                </h4>
                <div className="flex justify-around gap-4 items-center w-40 bg-white border-gray-8 py-1 px-2 border rounded-full">
                  <button
                    title="decrease"
                    name="decrease"
                    aria-label="decrease"
                    onClick={dec}
                    className="py-1 cursor-pointer px-3 rounded-full bg-gray-100 text-yellow-dark text-xl font-bold "
                  >
                    -
                  </button>
                  <p>{count}</p>
                  <button
                    title="increase"
                    name="increase"
                    aria-label="increase"
                    onClick={inc}
                    className="py-1 cursor-pointer px-3 rounded-full bg-gray-100 text-yellow-dark text-xl font-bold "
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <a
                  title="Details"
                  name="Details"
                  aria-label="Details"
                  onClick={handleBackToProject}
                  className="underline cursor-pointer"
                >
                  Details
                </a>
                <h3 className="capitalize text-lg font-medium ">
                  ₹{post.Inr} Inr
                  {/* Inr */}
                </h3>
                <p className="text-xl font-normal font-sans text-red-600">
                  <span className="line-through">{post.redLine}</span>{" "}
                  {post.offpercent}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/5 bg-gray-5 py-6 px-6">
          <div className=" flex flex-col gap-5 max-w-xl mx-auto lg:mx-0 lg:max-w-sm my-5">
            <h3 className="font-semibold text-xl capitalize text-black">
              Contribution Summary
            </h3>
            <div className="flex justify-between items-center ">
              <p className="font-thin font-sans text-lg capitalize">subtotal</p>
              <p className="font-thin font-sans text-lg ">
                ₹{post.Inr * count}
              </p>
            </div>
            <div>
              <div className="flex justify-between items-center ">
                <p className="font-semibold text-xl capitalize">
                  Estimated total
                </p>
                <p className="font-semibold text-xl ">₹{post.Inr * count}</p>
              </div>
              <div className="flex justify-between items-center ">
                <div className="font-thin font-sans text-lg capitalize flex items-center">
                  Charged
                  <div className="tooltip ml-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.00012207 9.9993C0.00012207 4.4803 4.48012 -0.000701904 10.0001 -0.000701904C15.5301 -0.000701904 20.0001 4.4803 20.0001 9.9993C20.0001 15.5203 15.5301 19.9993 10.0001 19.9993C4.48012 19.9993 0.00012207 15.5203 0.00012207 9.9993ZM9.12012 6.2093C9.12012 5.7303 9.52012 5.3293 10.0001 5.3293C10.4801 5.3293 10.8701 5.7303 10.8701 6.2093V10.6293C10.8701 11.1103 10.4801 11.4993 10.0001 11.4993C9.52012 11.4993 9.12012 11.1103 9.12012 10.6293V6.2093ZM10.0101 14.6803C9.52012 14.6803 9.13012 14.2803 9.13012 13.8003C9.13012 13.3203 9.52012 12.9303 10.0001 12.9303C10.4901 12.9303 10.8801 13.3203 10.8801 13.8003C10.8801 14.2803 10.4901 14.6803 10.0101 14.6803Z"
                        fill="#130F26"
                      />
                    </svg>
                    <span className="tooltiptext">
                      The payment will be processed in Canada, in CAD (Canadian
                      Dollar). Converted amounts are estimates & may differ from
                      actual amount charged based on your card issuer&apos;s
                      exchange rate.
                    </span>
                  </div>
                </div>
                <p className="font-thin font-sans text-lg ">
                  ${post.CadAmount * count} {post.Cad}
                </p>
              </div>
            </div>
            <hr />
            <a
              title="Proceed to Checkout"
              name="Proceed to Checkout"
              aria-label="Proceed to Checkout"
              href={`/donation/contribution?qty=${count}&tierNo=${
                post.tierNo
              }&Inr=${post.Inr * count}`}
              // onClick={handleBackToProject}
              data-cy="project-cta-button"
              className="uppercase cursor-pointer mb-5 items-center justify-center focus:outline-none focus-visible:ring-1 leading-tight tracking-wide disabled:pointer-events-none transition-all duration-150 h-12 px-6 rounded flex w-full mt-2 mx-auto bg-yellow-dark hover:bg-green-dark focus-visible:ring-yellow-dark active:bg-green-dark disabled:bg-copper-disabled text-white disabled:text-gray-500"
            >
              Proceed to checkout
            </a>
          </div>
        </div>
      </section>

      {/* Popup */}
      {showPopup && (
        <CardPopup
          imagesrc={post.imagesrc}
          tierNo={post.tierNo}
          Inr={post.Inr}
          redLine={post.redLine}
          offpercent={post.offpercent}
          CadAmount={post.CadAmount}
          Cad={post.Cad}
          desc={post.desc}
          includedItems={post.includedItems}
          estshipping={post.estshipping}
          Claim={post.claim}
          btnCloseClick={closePopup}
        />
      )}
      <Footer />
    </div>
  );
};

export default Page;
