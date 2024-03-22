import React, { useState } from "react";
import Image from "next/image";
// import filmImage from "@/assets/hero-bg.webp";
// import filmImage from "@/assets/gallery/donation-about.png";
import filmImage from "@/assets/Trust-Background-in-Home-Page.png";
import ShareBtn from "../../common/ShareBtn";
import { BiSolidBank } from "react-icons/bi";
import qrcode from "@/assets/crowdfund/qrcode.svg";
import DonationForm from "@/components/modals/DonationForm";
import DefaultModal from "@/components/modals/DefaultModal";
import "./aboutStyle.css";

const AboutDonation = () => {
  const [showPopup, setShowPopup] = useState(false);
  const handleBackToProject = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {/* about content */}
      <div className="h-full">
        {/* image */}
        <div className="mb-4 border-b border-gray-8 last:border-none">
          <div className="mb-8 -mx-6 w-screen lg:mx-0 lg:w-full">
            <Image
              alt="banner image"
              title="banner image"
              name="banner image"
              aria-label="banner image"
              loading="eager"
              width="975"
              height="548"
              decoding="async"
              data-nimg="1"
              src={filmImage}
              className="text-transparent"
            />
          </div>
        </div>
        {/* about bar */}
        <div className="bg-gray-100 border border-gray-8 rounded-sm py-1 mb-6">
          <h2 className="text-lg font-semibold leading-normal tracking-tight text-center uppercase">
            Heartfelt Messages from Supporters
          </h2>
        </div>
        <div className="mb-4 border-b border-gray-8 last:border-none">
          {/* <div className="flex items-center justify-start my-5">
            <h3 className="text-xl font-semibold leading-normal tracking-tight ">
              About the fundraiser
            </h3>
            // {/* <ShareBtn /> 
          </div> */}
          {/* mail application type */}
          <div className="px-6 pt-5 border">
            {/* <p className="leading-relaxed font-medium text-xl tracking-none mb-4 last:mb:0">
              Hi,
            </p> */}
            {/* <p className="leading-relaxed font-medium text-xl tracking-none mb-4 last:mb:0">
              We are Here for crowdfunding. Despite some deterrence from these
              measures, cow-lifting is still a major issue.
            </p> */}
            <p className="leading-relaxed font-medium text-xl tracking-none mb-4 last:mb:0">
              Cow-lifting remains a major issue.
            </p>
            <p className="leading-relaxed font-medium text-xl tracking-none mb-4 last:mb:0">
              The animals are cruelly transported tightly packed into closed
              trucks. Even if trucks are apprehended on highways, drivers
              pretend they are taking animals to a cattle market Law enforcement
              agencies aren’t sure how many times the cattle change hands to
              avoid scrutiny. Smugglers are generally comprised of local youth
              enlisted by growing gangs of cow-lifters. However, a sense of
              disenchantment has grown amongst them in some regions.
            </p>
            <p className="leading-relaxed font-medium text-xl tracking-none mb-4 last:mb:0">
              Rising instances of cow vigilantism and the associated lynch-mob
              syndrome have created a fear amongst the transporters of illegal
              cattle.Despite these impediments cattle smuggling has evolved as
              an organised criminal enterprise because the staggering profits
              are too alluring. The gangster kingpins keep adapting their
              methods to the changing situation and cattle lifting continues to
              be big business.
            </p>
            <p className="leading-relaxed font-medium text-xl tracking-none mb-4 last:mb:0">
              Please help us raise this amount by clicking on the donate button
              and sharing this page with your friends and family.
            </p>
            <p className="leading-relaxed font-medium text-xl tracking-none mb-4 last:mb:0">
              We are grateful for your help and wishes.
            </p>
            {/* <p className="leading-relaxed font-medium text-xl tracking-none mb-4 last:mb:0">
              Thank you.
            </p> */}
          </div>
        </div>
        <div className="mb-4 border-b border-gray-8 last:border-none">
          <h3 className="text-lg font-semibold leading-normal tracking-tight my-6">
            Other Donation Methods
          </h3>
          <div className="grid gap-6">
            <div className="bank-div">
              <div className="px-6 py-5 border grid gap-2 bg-slate-100">
                <p className="leading-relaxed font-semibold text-xl tracking-none mb-4 last:mb:0">
                  Transfer directly to the Bank account of this Fundraiser. Only
                  INR transfers are allowed.
                </p>
                <div className="md:flex items-start gap-6">
                  <p className="text-8xl text-gray-7">
                    <BiSolidBank />
                  </p>
                  <table>
                    <tr>
                      <td className="font-medium">Virtual A/C No </td>
                      <td>:</td>
                      <td>00000000000000</td>
                    </tr>
                    <tr>
                      <td className="font-medium">Virtual A/C Name </td>
                      <td>:</td>
                      <td>Radha and The Great Rescue</td>
                    </tr>
                    <tr>
                      <td className="font-medium">A/C Type </td>
                      <td>:</td>
                      <td>Current</td>
                    </tr>
                    <tr>
                      <td className="font-medium">IFSC </td>
                      <td>:</td>
                      <td>RADN0VAAPIS</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="text-sm text-gray-600">
                        (The Digit after N is zero)
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
              <div className="flex bg-[#ffe87f] py-5 px-6">
                <p className="italic leading-relaxed font-medium text-xl tracking-none">
                  Claim your donation acknowledgement now! For payment done via{" "}
                  <a
                    title="Bank Transfer"
                    name="Bank Transfer"
                    aria-label="Bank Transfer"
                    className="text-yellow-950 font-semibold underline cursor-pointer"
                    onClick={handleBackToProject}
                  >
                    {" "}
                    Bank Transfer
                  </a>
                </p>
              </div>
            </div>
            <div className="paytm-qrcode-div">
              <div className="px-6 py-5 border grid gap-2 bg-slate-100">
                <p className="leading-relaxed font-semibold text-xl tracking-none last:mb:0">
                  You can also pay via Paytm/UPI QR code
                </p>
                <p className="leading-relaxed text-sm text-gray-600 tracking-none mb-4 last:mb:0">
                  Scan the QR code from the app and make payment.
                </p>
                <div className="md:flex gap-5 justify-between">
                  <div className="grid items-start gap-1 w-full">
                    <p className="leading-relaxed capitalize font-semibold text-xl tracking-none mb-4 last:mb:0">
                      For Paytm
                    </p>
                    <div className="bg-white w-full justify-center gap-3 flex flex-col h-auto p-6 rounded-sm">
                      <Image
                        src={qrcode}
                        alt="QR Code"
                        title="QR Code"
                        name="QR Code"
                        aria-label="QR Code"
                        className="w-2/3 mx-auto h-auto"
                      />
                      <p className="flex w-full justify-center">
                        Scan here to pay with Paytm Wallet / UPI
                      </p>
                    </div>
                  </div>
                  <div className="grid items-start gap-1 w-full">
                    <p className="leading-relaxed capitalize font-semibold text-xl tracking-none mb-4 last:mb:0">
                      For UPI
                    </p>
                    <div className="bg-white w-full justify-center gap-3 flex flex-col h-auto p-6 rounded-sm">
                      <Image
                        src={qrcode}
                        alt="QR Code"
                        title="QR Code"
                        name="QR Code"
                        aria-label="QR Code"
                        className="w-2/3 mx-auto h-auto"
                      />
                      <p className="flex w-full justify-center text-center">
                        Scan to pay with Gpay, Phonepe, UPI, etc.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex bg-[#ffe87f] py-5 px-6">
                <p className="italic leading-relaxed font-medium text-xl tracking-none">
                  Claim your donation acknowledgement now! For payment done via{" "}
                  <a
                    title="PayTm Donations"
                    name="PayTm Donations"
                    aria-label="PayTm Donations"
                    className="text-yellow-950 font-semibold underline cursor-pointer"
                    onClick={handleBackToProject}
                  >
                    {" "}
                    Paytm
                  </a>{" "}
                  and
                  <a
                    title="UPI Donation"
                    name="UPI Donation"
                    aria-label="UPI Donation"
                    className="text-yellow-950 font-semibold underline cursor-pointer"
                    onClick={handleBackToProject}
                  >
                    {" "}
                    UPI
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showPopup && <DefaultModal btnCloseClick={closePopup} />}
      {/* {showPopup && <DefaultModal btnCloseClick={closePopup} />} */}
    </>
  );
};

export default AboutDonation;
