import React from "react";
import InquiryForm from "../form/InqiuryForm";

const InquiryPopup = ({ btnCloseClick }) => {
  return (
    <div className="fixed top-2 mb-5 left-0 z-40 w-full h-screen overflow-y-auto bg-black bg-opacity-75 flex  justify-center">
      <div
        className="fixed top-0 left-0 w-full h-full"
        onClick={btnCloseClick}
      />
      <div className="mx-auto lg:w-2/3 z-20 mt-[5%] h-max px-4 py-8 sm:px-6 lg:px-8 bg-white rounded-sm">
        <div className="mx-auto cursor-pointer">
          <InquiryForm />
        </div>
      </div>
    </div>
  );
};

export default InquiryPopup;
