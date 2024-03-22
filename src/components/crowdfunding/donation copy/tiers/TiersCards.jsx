"use client";
import React, { useState } from "react";
import Modals from "./Modals";
import Link from "next/link";
import Image from "next/image";

const TiersCards = ({
  imagesrc,
  tierNo,
  Inr,
  redLine,
  offpercent,
  CadAmount,
  Cad,
  desc,
  includedItems,
  estshipping,
  claim,
  href,
  onClick,
}) => {
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

  return (
    <>
      <div className="border border-gray-8 hover:border-gray-500 cursor-pointer rounded hover:shadow-lg">
        {imagesrc && <Image src={imagesrc} alt="image" />}
        <div
          className="p-6 flex flex-col gap-3"
          onClick={() => setShowItems(true)}
          // onMouseLeave={() => setShowItems(false)}
        >
          <div>
            <h2 className="text-xl font-medium uppercase tracking-tight">
              {tierNo}
            </h2>
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold font-WhitneySemibold">
              ₹{Inr} INR
            </h3>
            <p className="text-xl font-light font-sans text-red-600">
              <span className="line-through">{redLine}</span> {offpercent}
            </p>
            <p className="font-light font-WorkSans text-gray-500">
              ${CadAmount} {Cad}
            </p>
          </div>
          {showItems && (
            <div className="flex flex-col gap-2 text-black">
              <div className="p">
                <p className="text-sm font-WorkSans font-light">{desc}</p>
              </div>
              {includedItems &&
                Array.isArray(includedItems) &&
                includedItems.length > 0 && (
                  <div className="ul">
                    <ul className="font-semibold text-xl capitalize list-disc">
                      Included Items
                      {includedItems.map((item, index) => (
                        <li key={index} className="ml-8 font-normal font-sans">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
            </div>
          )}
          <div className="ul">
            <ul className="font-semibold text-lg capitalize">
              estimated shipping
              <li className="font-normal text-xl font-sans">{estshipping}</li>
            </ul>
          </div>
          <div className="text-black">
            <p className="text-xl leading-relaxed font-Whitney font-medium capitalize">
              <span className="font-bold lowercase">{claim}</span> claimed
            </p>
          </div>
          {showItems && (
            <div>
              <Link
                href={href}
                passHref
                className="uppercase cursor-pointer items-center justify-center focus:outline-none focus-visible:ring-1 leading-tight tracking-wide disabled:pointer-events-none transition-all duration-150 h-12 px-6 rounded flex w-full mt-2 mx-auto bg-yellow-dark hover:bg-green-dark focus-visible:ring-yellow-dark active:bg-green-dark disabled:bg-copper-disabled text-white disabled:text-gray-500"
              >
                Get This Perk
              </Link>
              {/* <Link
              href={{
                // pathname: { href },
                // pathname: `/donation/perks?tierNo=${tierNo}&Inr=${Inr}`,
                pathname: "donation/perks",
                query: { tierNo, Inr },
                // query: [((tierNo = { tierNo }), (Inr = { Inr }))],
              }}
              passHref
              tierNo={tierNo}
              Inr={Inr}
              className="uppercase items-center justify-center focus:outline-none focus-visible:ring-1 leading-tight tracking-wide disabled:pointer-events-none transition-all duration-150 h-12 px-6 rounded flex w-full mt-2 mx-auto bg-yellow-dark hover:bg-green-dark focus-visible:ring-yellow-dark active:bg-green-dark disabled:bg-copper-disabled text-white disabled:text-gray-500"
            >
              Get This Perk
            </Link> */}
              {/* <button
              onClick={handleClick([tierNo, Inr, Cad])}
              className="uppercase items-center justify-center focus:outline-none focus-visible:ring-1 leading-tight tracking-wide disabled:pointer-events-none transition-all duration-150 h-12 px-6 rounded flex w-full mt-2 mx-auto bg-yellow-dark hover:bg-green-dark focus-visible:ring-yellow-dark active:bg-green-dark disabled:bg-copper-disabled text-white disabled:text-gray-500"
            >
              Get This Perk
            </button> */}
              {/* <a
              // href={`/donation/perks-contribution?tierNo=${tierNo}&Inr=${Inr}`}
              href="/donation/perks-contribution"
              // onClick={handleBackToProject}
              data-cy="project-cta-button"
              className="uppercase items-center justify-center focus:outline-none focus-visible:ring-1 leading-tight tracking-wide disabled:pointer-events-none transition-all duration-150 h-12 px-6 rounded flex w-full mt-2 mx-auto bg-yellow-dark hover:bg-green-dark focus-visible:ring-yellow-dark active:bg-green-dark disabled:bg-copper-disabled text-white disabled:text-gray-500"
            >
              Get This Perk
            </a> */}
            </div>
          )}
        </div>
      </div>

      {showPopup && <Modals btnCloseClick={closePopup} />}
    </>
  );
};

export default TiersCards;
