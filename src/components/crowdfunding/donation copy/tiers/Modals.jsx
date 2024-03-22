"use client";
import React, { useState } from "react";
import TiersCards from "./TiersCards";
import { cardData } from "@/data/nav2";

const Modals = ({ btnCloseClick, btnopen }) => {
  const [scrollBehavior, setScrollBehavior] = useState("inside");
  const [amount, setAmount] = useState(10);
  return (
    <>
      <div className="fixed top-2 mb-5 left-0 z-40 w-full h-screen overflow-y-auto bg-black bg-opacity-75 flex items-top justify-center">
        <div
          className="fixed top-0 left-0 w-full h-full"
          onClick={btnCloseClick}
        />
        <div
          className="mx-auto md:w-1/3 w-full z-20 px-4 py-12 sm:px-6 lg:px-8 bg-white overflow-y-auto"
          scrollBehavior={scrollBehavior}
        >
          <div className="mx-auto max-w-lg">
            <div className="w-full flex items-center justify-between">
              <h1 className="text-center text-2xl font-bold text-yellow-dark sm:text-3xl">
                Back This Project
              </h1>
              <button
                title="Close Button"
                name="Close Button"
                aria-label="Close Button"
                className="rounded bg-white/20 p-1 hover:bg-white/10 border cursor-pointer"
                onClick={btnCloseClick}
              >
                <span className="sr-only">Close</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <p className="mt-6 max-w-md">Make a contribution</p>

            <form
              action=""
              className="mb-3 mt-1 flex items-center justify-between space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:py-4 lg:px-4"
            >
              <div>
                <label htmlFor="amount" className="sr-only">
                  Amount
                </label>

                <div className="relative flex items-center">
                  <span className="absolute inset-y-0 start-0 grid place-content-center px-1">
                    <p className="font-medium font-sans">$</p>
                  </span>
                  <input
                    type="number"
                    defaultValue={10}
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    min={0}
                    className="w-full rounded-lg border-gray-200 p-4 pe-16 text-xl shadow-sm"
                    placeholder="10"
                  />
                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <p className="text-gray-400 font-medium font-sans">CAD</p>
                  </span>
                </div>
              </div>

              <a
                title="Continue to Payment Method"
                name="Continue to Payment "
                aria-label="Continue to Payment "
                href={`/donation/contribution?value=${amount}`}
                className="flex cursor-pointer items-center justify-center w-full rounded-lg bg-yellow-dark px-5 py-3 text-sm font-medium text-white"
              >
                Continue
              </a>
            </form>
            <div className="flex flex-col gap-6 overflow-y-auto">
              {cardData.map((d) => (
                <TiersCards
                  key={d.id}
                  imagesrc={d.imagesrc}
                  tierNo={d.tierNo}
                  Inr={d.Inr}
                  redLine={d.redLine}
                  offpercent={d.offpercent}
                  CadAmount={d.CadAmount}
                  Cad={d.Cad}
                  desc={d.desc}
                  includedItems={d.includedItems}
                  claim={d.claim}
                  href={`/donation/perks?tierNo=${d.tierNo}&Inr=${d.Inr}`}
                  onClick={() => handleButtonClick(d)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modals;
