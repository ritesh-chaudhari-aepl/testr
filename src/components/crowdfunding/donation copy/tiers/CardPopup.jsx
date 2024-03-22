import Image from "next/image";
import React from "react";

const CardPopup = ({
  btnCloseClick,
  imagesrc,
  tierNo,
  CadAmount,
  Cad,
  Inr,
  redLine,
  offpercent,
  desc,
  includedItems,
  estshipping,
  claim,
}) => {
  return (
    <div className="fixed top-0 left-0 z-30 w-full h-full bg-black bg-opacity-75 flex items-center justify-center">
      <div
        className="fixed top-0 left-0 w-full h-full"
        onClick={btnCloseClick}
      />
      <div className="mx-auto z-20 max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 bg-white mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
        <div className="mx-auto max-w-2xl flex flex-col gap-5">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            Your Perk
          </h1>
          <div className="flex">
            <div className="border w-1/2 border-gray-8 hover:border-gray-500 cursor-pointer rounded hover:shadow-lg">
              {imagesrc && <Image src={imagesrc} alt="image" />}
              <div className="p-6 flex flex-col gap-3">
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
                <div className="flex flex-col gap-2 text-black">
                  <div className="p">
                    <p className="text-sm font-WorkSans font-light">{desc}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 py-6 px-4 md:p-6 flex flex-col gap-3">
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
              <div className="ul">
                <ul className="font-semibold text-lg capitalize">
                  estimated shipping
                  <li className="font-normal text-xl font-sans">
                    {estshipping}
                  </li>
                </ul>
              </div>
              <div className="text-black">
                <p className="text-xl leading-relaxed font-Whitney font-medium capitalize">
                  <span className="font-bold">{claim}</span> claimed
                </p>
              </div>
            </div>
          </div>
          <button
            title="Back to Project"
            name="Back to Project"
            aria-label="Back to Project"
            onClick={btnCloseClick}
            type="submit"
            className="uppercase cursor-pointer items-center justify-center focus:outline-none focus-visible:ring-1 leading-tight tracking-wide disabled:pointer-events-none transition-all duration-150 h-12 px-6 rounded flex w-full mt-2 mx-auto bg-yellow-dark hover:bg-green-dark focus-visible:ring-yellow-dark active:bg-green-dark disabled:bg-copper-disabled text-white disabled:text-gray-500"
          >
            Back To Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPopup;
