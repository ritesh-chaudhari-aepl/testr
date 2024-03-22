import React from "react";
import DonationForm from "./DonationForm"; // Adjust the import path based on your project structure

const DefaultModal = ({ btnCloseClick }) => {
  return (
    <div className="fixed top-0 left-0 z-30 w-full h-full bg-black bg-opacity-75 flex items-center justify-center">
      <div
        className="fixed top-0 left-0 w-full h-full"
        onClick={btnCloseClick}
      />
      <div className="mx-auto relative z-20 max-w-96 md:max-w-screen-xl px-4 py-8 md:py-16 sm:px-6 lg:px-8 bg-white mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
        <div className="mx-auto max-w-lg">
          <DonationForm onClose={btnCloseClick} />
        </div>
      </div>
    </div>
  );
};

export default DefaultModal;
