import React from "react";
import FaqPoints from "./FaqPoints";

const FAQ = () => {
  return (
    <>
      <div className="bg-gray-100 border border-gray-8 rounded-sm py-1 mb-6">
        <h2 className="text-lg font-semibold leading-normal tracking-tight text-center uppercase">
          FAQ
        </h2>
      </div>
      <FaqPoints />
    </>
  );
};

export default FAQ;
