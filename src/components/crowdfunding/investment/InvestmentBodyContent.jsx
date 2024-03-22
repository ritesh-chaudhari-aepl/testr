"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import filmImage from "@/assets/hero-bg.webp";
import investmentGraphics from "@/assets/crowdfund/investment_graphic.webp";
import Investors from "../common/Investors";
import user from "@/assets/actor.png";
import FAQ from "../common/FAQ";
import Offerings from "../common/Offerings";

const InvestmentBodyContent = () => {
  const investorsRef = useRef(null);
  const faqRef = useRef(null);
  const offeringsRef = useRef(null);
  const [activeTab, setActiveTab] = useState("investors");
  const [showPopup, setShowPopup] = useState(false);

  const handleTabClick = (ref, tabName) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setActiveTab(tabName);
  };

  const getTabStyles = (tabName) => {
    return `text-xl cursor-pointer uppercase border-b-2 py-3 px-4 transition-colors focus:outline-none ${
      activeTab === tabName
        ? "text-yellow-dark border-yellow-dark"
        : "text-gray-600 border-transparent"
    }`;
  };

  const handleBackToProject = () => {
    // Show the popup
    setShowPopup(true);
  };

  const closePopup = () => {
    // Close the popup
    setShowPopup(false);
  };

  return (
    <>
      <div
        className="scrollbar tab-container sticky top-0 bg-white z-20 pt-4 flex justify-center"
        style={{ boxShadow: "rgba(0, 0, 0, 0.25) 1px 1px 5px" }}
      >
        <div
          className="whitespace-nowrap"
          role="tablist"
          aria-orientation="horizontal"
        >
          <button
            data-cy="page-nav-tabs"
            onClick={() => handleTabClick(investorsRef, "investors")}
            className={getTabStyles("investors")}
            id="headlessui-tabs-tab-:rf:"
            role="tab"
            type="button"
            aria-selected="true"
            tabIndex="0"
            dataheadlessui-state="selected"
          >
            Investors
          </button>
          <button
            data-cy="page-nav-tabs"
            onClick={() => handleTabClick(faqRef, "faq")}
            className={getTabStyles("faq")}
            id="headlessui-tabs-tab-:rf:"
            role="tab"
            type="button"
            aria-selected="false"
            tabIndex="-1"
            dataheadlessui-state
          >
            FAQ
          </button>
          <button
            data-cy="page-nav-tabs"
            onClick={() => handleTabClick(faqRef, "offerings")}
            className={getTabStyles("offerings")}
            id="headlessui-tabs-tab-:rf:"
            role="tab"
            type="button"
            aria-selected="false"
            tabIndex="-1"
            dataheadlessui-state
          >
            Offerings
          </button>
        </div>
      </div>
      <div className="h-full w-full flex flex-col-reverse xl:flex-row lg:mx-auto px-6 xl:px-0 max-w-[960px] xl:max-w-[1264px]">
        <div className="flex flex-col xl:w-2/3">
          <div className="mb-6">
            <div
              ref={investorsRef}
              id="section-investors"
              data-title="investors"
              className="flex flex-col justify-center pt-20 first:pt-0 first:mt-6"
            >
              <Investors usertypes="Investors" />
            </div>
            <div
              ref={faqRef}
              id="section-faq"
              data-title="FAQ"
              className="flex flex-col justify-center pt-20 first:pt-0 first:mt-6"
            >
              <FAQ />
            </div>
            <div
              ref={offeringsRef}
              id="section-offerings"
              data-title="Offerings"
              className="flex flex-col justify-center pt-20 first:pt-0 first:mt-6"
            >
              <Offerings />
            </div>
          </div>
        </div>
        <div className="hidden xl:block w-1/3 pl-8">
          <div className="sticky top-24 mt-6">
            <div className="p-6 border border-gray-8 rounded bg-gradient-to-br from-[#fafafa] to-[#f0f0f0]">
              <div>
                <div className="w-full h-2 relative rounded-lg bg-black bg-opacity-10">
                  <div
                    role="progressbar"
                    className="w-full bg-green-dark rounded-lg bg-opacity-80 h-2 relative"
                  ></div>
                </div>
              </div>
              <div className="mt-2 flex justify-between text-black">
                <div className="w-full flex md:block pr-1">
                  <div>
                    <div className="lg:mt-1">
                      <div className="flex flex-col">
                        <div
                          className="text-2xl font-semibold leading-normal tracking-tighter sm:text-4xl sm:font-medium"
                          data-cy="capital-amount"
                        >
                          $0
                        </div>
                        {/* <div className="text-sm leading-relaxed tracking-none font-medium">
                          of $618,000 max *
                        </div> */}
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="flex flex-row items-center text-sm md:text-md">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 24 24"
                          className="mr-1"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H16C16 18.6863 13.3137 16 10 16C6.68629 16 4 18.6863 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11ZM18.2837 14.7028C21.0644 15.9561 23 18.752 23 22H21C21 19.564 19.5483 17.4671 17.4628 16.5271L18.2837 14.7028ZM17.5962 3.41321C19.5944 4.23703 21 6.20361 21 8.5C21 11.3702 18.8042 13.7252 16 13.9776V11.9646C17.6967 11.7222 19 10.264 19 8.5C19 7.11935 18.2016 5.92603 17.041 5.35635L17.5962 3.41321Z"></path>
                        </svg>
                        <div className="capitalize caption-md sm:caption-lg whitespace-nowrap">
                          448 People*
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:mt-1 w-full pl-1">
                  <div className="flex flex-col items-end">
                    <div className="text--2xl font-semibold leading-normal tracking-tighter md:text-4xl md:font-medium">
                      4
                    </div>
                    <div className="capitalize text-sm leading-relaxed tracking-none whitespace-nowrap text-right">
                      Days Left *
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <button
                  onClick={handleBackToProject}
                  data-cy="project-cta-button"
                  className="focus:outline-none cursor-pointer focus-visible:ring-1 leading-tight tracking-wide disabled:pointer-events-none transition-all duration-150 h-12 px-6 rounded block w-full mt-2 mx-auto bg-yellow-dark hover:bg-green-dark focus-visible:ring-yellow-dark active:bg-green-dark disabled:bg-copper-disabled text-white disabled:text-gray-500"
                >
                  Donation
                </button>
              </div>
              <div className="text-black">
                <p className="text-xl leading-relaxed tracking-none mt-3 text-center font-light capitalize">
                  $25 Minimum Investment
                </p>
              </div>
              <div className="mt-4 mb-2"></div>
              <div className="mt-4 px-1 mx-auto text-[11px] leading-tight tracking-none text-gray-600 font-medium">
                *People includes all persons who have submitted subscription
                materials. Amount raised is an estimate that includes
                subscriptions, however not all such amounts have been accepted
                or closed, & some subscriptions may not be accepted.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-white lg:hidden sticky bottom-0 left-0 px-6 py-4 right-0 text-center z-50"
        style={{ boxShadow: "rgba(106, 115, 129, 0.12) 0px -8px 8px" }}
      >
        <button
          onClick={handleBackToProject}
          data-cy="project-cta-button"
          className="focus:outline-none cursor-pointer focus-visible:ring-1 leading-tight tracking-wide disabled:pointer-events-none transition-all duration-150 h-12 px-6 rounded max-w-[420px] text-sm w-full bg-yellow-dark hover:bg-yellow-dark focus-visible:ring-yellow-dark active:bg-yellow-dark disabled:saturate-50 text-white disabled:text-gray-500"
        >
          Donation
        </button>
      </div>
      {/* Popup */}
      {showPopup && (
        <div className="fixed top-0 left-0 z-30 w-full h-full bg-black bg-opacity-75 flex items-center justify-center">
          <div
            className="fixed top-0 left-0 w-full h-full"
            onClick={closePopup}
          />
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 bg-white">
            <div className="mx-auto max-w-lg">
              <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
                Get started today
              </h1>

              <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Obcaecati sunt dolores deleniti inventore quaerat mollitia?
              </p>

              <form
                action=""
                className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
              >
                <p className="text-center text-lg font-medium">
                  Sign in to your account
                </p>

                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>

                  <div className="relative">
                    <input
                      type="email"
                      className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                      placeholder="Enter email"
                    />

                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>

                  <div className="relative">
                    <input
                      type="password"
                      className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                      placeholder="Enter password"
                    />

                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                <button
                  onClick={closePopup}
                  type="submit"
                  className="block w-full cursor-pointer rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                >
                  Sign in
                </button>

                <p className="text-center text-sm text-gray-500">
                  No account?
                  <a className="underline cursor-pointer" href="">
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InvestmentBodyContent;
