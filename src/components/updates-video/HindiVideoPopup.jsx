import React from "react";

const HindiVideoPopup = ({ btnCloseClick }) => {
  return (
    <div className="fixed top-2 mb-5 left-0 z-40 w-full h-screen overflow-y-auto bg-black bg-opacity-75 flex  justify-center">
      <div
        className="fixed top-0 left-0 w-full h-full"
        onClick={btnCloseClick}
      />
      <div className="mx-auto max-w-screen-xl z-20 mt-[5%] h-max px-4 py-8 sm:px-6 lg:px-8 bg-white rounded-sm">
        <div className="mx-auto cursor-pointer">
          <iframe
            width="600"
            height="400"
            className="w-auto md:w-[600px]"
            src="https://www.youtube.com/embed/q7PZwYyCApg?si=Ii9oZA86hjcNt9y4&amp"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default HindiVideoPopup;
