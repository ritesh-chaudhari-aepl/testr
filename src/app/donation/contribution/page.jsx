"use client";
import React, { useState } from "react";
import Header from "@/components/header/Header";
import CardPopup from "@/components/crowdfunding/donation/tiers/CardPopup";
import Footer from "@/pages/Footer";
import "./tooltip.css";
import { useRouter } from "next/navigation";
import { cardData } from "@/data/nav2";

const Page = ({ searchParams }) => {
  console.log(searchParams, "params");

  // const [amount, setAmount] = useState(searchParams || 500);
  const { amount } = searchParams; // Assuming searchParams is in the format { amount: '5000' }

  console.log(amount, "amount");
  console.log(searchParams.value, "searchParams");

  const qty = searchParams.qty;
  console.log(qty, "qty");

  const tierNo = searchParams.tierNo;
  console.log(tierNo, "tierNo");

  const Inr = parseInt(searchParams.Inr);
  console.log(Inr, "Inr");

  const post = cardData.find((post) => post.tierNo === tierNo);

  const Aepltip = 108;
  const estimatedTotal = () => {
    return Inr + Aepltip;
  };
  console.log(estimatedTotal(), "total");
  console.log(post, "post");

  const [showPopup, setShowPopup] = useState(false);
  const [showItems, setShowItems] = useState(false);

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
  const [count, setCount] = React.useState(0);

  const inc = () => {
    setCount(count + 1);
  };

  const dec = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const [selectedOption, setSelectedOption] = useState("");
  console.log("amount + 7:", parseInt(amount) + 7);

  return (
    <div>
      <Header headerBg="bg-black" />
      <section className="flex flex-col lg:flex-row mt-24 text-black">
        <div className="lg:w-2/3 mb-6 py-6 px-6">
          <div className=" flex flex-col gap-5 max-w-2xl mx-auto lg:mr-0">
            <div>
              <a
                title="Back"
                name="Back"
                aria-label="Back"
                // className="inline-block cursor-pointer rounded-full bg-gradient-to-r from-pink-darkPink to-blue-light px-8 py-4 text-sm font-medium text-white transition hover:bg-indigo-700 capitalize"
                // className="inline-flex gap-3 items-center cursor-pointer rounded-lg border  bg-gray-5 px-8 py-3 mb-2 text-xl font-medium text-yellow-dark transition hover:text-indigo-700 capitalize"
                className="inline-flex gap-3 items-center cursor-pointer mb-2 text-xl font-medium text-yellow-dark transition hover:text-indigo-700 capitalize"
                href="/donation"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="14"
                  viewBox="0 0 10 16"
                  fill="none"
                >
                  <path
                    d="M8.5 15L1.5 8L8.5 1"
                    stroke="#ebae12"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Back
              </a>
            </div>

            <div className="text-black ">
              <p className="text-xs leading-relaxed tracking-none tracking-wide uppercase text-[#707070]">
                you are contributing to
              </p>
              <h2 className="text-2xl font-semibold leading-normal tracking-tighter md:text-4xl md:font-medium md:leading-normal md:tracking-tightest">
                Radha - The Rescue
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <h3 className="text-lg font-semibold capitalize">
                Guest Checkout
              </h3>

              <form action="" className="space-y-2">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="grid grid-cols-1 gap-2">
                    <label className="capitalize" htmlFor="name">
                      Full Name{" "}
                      <span className="text-red-500 font-semibold">*</span>
                    </label>
                    <input
                      className="w-full rounded-lg block border border-gray-200 p-3 text-sm"
                      placeholder="Full Name"
                      type="text"
                      id="name"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    <label className="capitalize" htmlFor="email">
                      Email address{" "}
                      <span className="text-red-500 font-semibold">*</span>
                    </label>
                    <input
                      className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                      placeholder="Email address"
                      type="email"
                      id="email"
                      required
                    />
                  </div>
                </div>
              </form>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <h3 className="text-lg font-semibold capitalize">
                Secure Payment
              </h3>
              <form action="" className="space-y-2">
                <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                  <div className="grid grid-cols-1 gap-2">
                    <label className="capitalize text-left" htmlFor="email">
                      Card Number{" "}
                      <span className="text-red-500 font-semibold">*</span>
                    </label>
                    <input
                      className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                      placeholder="1234 1234 1234 1234"
                      type="text"
                      id="cardnumber"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-2">
                    <label className="capitalize text-left" htmlFor="email">
                      Expiration{" "}
                      <span className="text-red-500 font-semibold">*</span>
                    </label>
                    <input
                      className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                      placeholder="MM/YY"
                      type="date"
                      id="date"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-2">
                    <label className="capitalize text-left" htmlFor="email">
                      CVC <span className="text-red-500 font-semibold">*</span>
                    </label>
                    <input
                      className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                      placeholder="CVC"
                      type="email"
                      id="email"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-2">
                  <label
                    htmlFor="HeadlineAct"
                    className="block text-sm font-medium"
                  >
                    Country
                  </label>

                  <select
                    name="HeadlineAct"
                    id="HeadlineAct"
                    className="mt-1.5 w-full rounded-lg border p-3 border-gray-200 sm:text-sm"
                  >
                    <option value="India">India</option>
                    <option value="Canada">Canada</option>
                    <option value="Bulgaria">Bulgaria</option>
                    <option value="Country 1">Country 1</option>
                    <option value="Country 2">Country 2</option>
                    <option value="Country 3">Country 3</option>
                    <option value="Country 4">Country 4</option>
                    <option value="Country 5">Country 5</option>
                  </select>
                </div>

                {/* <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Send Enquiry
                  </button>
                </div> */}
              </form>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/5 bg-gray-5 py-5 px-6">
          <div className=" flex flex-col gap-5 max-w-xl mx-auto lg:mx-0 lg:max-w-sm my-3">
            <h3 className="font-semibold text-xl capitalize text-black">
              Contribution Summary
            </h3>
            {!tierNo && (
              <div className="grid gap-3">
                <label htmlFor="amount" className="">
                  Your Donation
                </label>

                <div className="relative flex items-center">
                  <span className="absolute inset-y-0 grid place-content-center px-3">
                    <p className="font-medium font-sans">₹</p>
                  </span>
                  <input
                    type="number"
                    // value={amount}
                    value={`₹ ${amount.toLocaleString("en-IN")}`}
                    // defaultValue={1000}
                    min={1000}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full rounded-lg border-gray-200 py-4 px-7 pe-16 text-xl shadow-sm"
                    placeholder="1000"
                  />
                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <p className="text-gray-400 font-medium font-sans">
                      Inr Rupee
                    </p>
                  </span>
                </div>
                {/* <p>
                  This does not include a perk{" "}
                  <a
                    href="/donation"
                    className="ml-2 cursor-pointer border-b-2 border-black capitalize"
                  >
                    Add Perk
                  </a>
                </p> */}
              </div>
            )}
            <hr />
            <div className="grid gap-3">
              <div className="flex justify-between items-center ">
                <div className="font-normal font-sans text-xl capitalize">
                  AEPL Tip
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
                      Help campaigns keep their fees low.
                    </span>
                  </div>
                </div>
                <p className="font-normal font-sans text-xl text-end">
                  ₹{selectedOption || "108"}
                </p>
              </div>
              <div className="flex justify-between items-center ">
                <p className="font-normal font-sans text-xl capitalize">
                  subtotal
                </p>
                <p className="font-normal font-sans text-xl text-end">
                  ₹
                  {tierNo
                    ? Inr
                    : amount === 0 || isNaN(parseInt(amount))
                    ? 108
                    : amount > 0 || isNaN(parseInt(amount))
                    ? `${parseInt(amount) + 108}`
                    : 108}
                </p>
              </div>
              {/* <div>
                <select
                  name="HeadlineAct"
                  id="HeadlineAct"
                  className="mt-1.5 w-full rounded-lg border border-gray-200 p-3 text-gray-700 sm:text-sm"
                  onChange={(e) => setSelectedOption(e.target.value)}
                >
                  <option value="108">₹416</option>
                  <option value="244">₹250</option>
                  <option value="852">₹833</option>
                  <option value="AK">Other Amount</option>
                </select>
              </div> */}
            </div>
            <div className="grid gap-3">
              <div className="flex justify-between items-center ">
                <p className="font-semibold text-lg font-WhitneySemibold capitalize">
                  Estimated total
                </p>
                <p className="font-semibold text-lg text-end">
                  ₹
                  {tierNo
                    ? Inr
                    : amount === 0 || isNaN(parseInt(amount))
                    ? 108
                    : amount > 0 || isNaN(parseInt(amount))
                    ? `${parseInt(amount) + 108}`
                    : 108}
                </p>
              </div>
              {/* <div className="flex justify-between items-center ">
                <div className="font-normal font-sans text-xl capitalize flex items-center">
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
                <p className="font-normal font-sans text-xl text-end">
                  $
                  {tierNo
                    ? post.CadAmount
                    : amount === 0 || isNaN(parseInt(amount))
                    ? 7
                    : `${parseInt(amount) + 7}`}{" "}
                  {tierNo ? post.Cad : "CAD"}
                </p>
              </div> */}
            </div>
            <hr />
            <div className="border border-gray-500 p-3 grid gap-3">
              <h3 className="text-xl font-semibold font-WhitneySemibold">
                Crowdfunding is not shopping.
              </h3>
              <p className="text-xs">
                Your contribution is a way to support an entrepreneur, but does
                not guarantee that you will receive a perk.
              </p>
              <p className="text-xs">
                Any refunds after January 13, 2024 are the responsibility of the
                campaign owner, Sean Kim , at their discretion.
              </p>
            </div>
            <div className="grid gap-2">
              {/* <div className="flex gap-2 ">
                <input
                  className=""
                  id="option1"
                  type="checkbox"
                  name="option"
                  defaultChecked
                />

                <label htmlFor="option1" className="block w-full">
                  <span className="text-xs">
                    {" "}
                    I&apos;d like exclusive perks in my inbox{" "}
                  </span>
                </label>
              </div> */}
              <div className="flex gap-2 ">
                <input
                  className=""
                  id="option2"
                  type="checkbox"
                  name="option"
                />

                <label htmlFor="checkbox" className="block w-full rounded-lg">
                  <span className="text-xs">
                    I agree to the Terms of Use & have read & understand the
                    Privacy Policy
                  </span>
                </label>
              </div>
              {/* <input type="checkbox" />
              I&apos;d like exclusive perks in my inbox
              <input type="checkbox" />I agree to the Terms of Use & have read
              & understand the Privacy Policy */}
            </div>
            <a
              title="Proceed to Checkout"
              name="Proceed to Checkout"
              aria-label="Proceed to Checkout"
              // onClick={handleBackToProject}
              data-cy="project-cta-button"
              className="uppercase cursor-pointer items-center justify-center focus:outline-none focus-visible:ring-1 leading-tight tracking-wide disabled:pointer-events-none transition-all duration-150 h-12 px-6 rounded flex w-full mx-auto bg-yellow-dark hover:bg-green-dark focus-visible:ring-yellow-dark active:bg-green-dark disabled:bg-copper-disabled text-white disabled:text-gray-500"
            >
              Proceed to checkout
            </a>
          </div>
        </div>
      </section>

      {/* Popup */}
      {showPopup && (
        <CardPopup
          tierNo={tierNo}
          Inr={Inr}
          Cad={Cad}
          desc={desc}
          includedItems={includedItems}
          estshipping={estshipping}
          Claim={claim}
          btnCloseClick={closePopup}
        />
      )}
      <Footer />
    </div>
  );
};

export default Page;
