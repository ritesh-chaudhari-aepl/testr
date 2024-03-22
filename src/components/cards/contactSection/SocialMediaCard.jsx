import React from "react";

const SocialMediaCard = () => {
  return (
    <div className="flex flex-col p-12 xl:p-24 justify-center items-start rounded-xl bg-[#f0fff8]">
      <div className="flex flex-col items-center gap-11">
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-textDark font-WorkSans text-2xl not-italic font-semibold capitalize leading-9">
            Social Media
          </h3>
          <p className="text-[#686868] text-center font-WorkSans text-lg not-italic font-normal leading-7">
            Follow us on{" "}
            <a
              title="Connect us through Facebook"
              name="Connect us through Facebook"
              aria-label="Connect us through Facebook"
              className="text-green-themegreen underline cursor-pointer"
            >
              Facebook
            </a>
            ,{" "}
            <a
              title="Connect us through Linkedin"
              name="Connect us through Linkedin"
              aria-label="Connect us through Linkedin"
              className="text-green-themegreen underline cursor-pointer"
            >
              Linkedin
            </a>
            ,{" "}
            <a className="text-green-themegreen underline cursor-pointer">
              Pinterest
            </a>{" "}
            & immerse yourself in exclusive content, updates, & a space to share
            your thoughts & experiences with Radha’s story
          </p>
        </div>
        <button
          title="FAQ"
          name="FAQ"
          aria-label="FAQ"
          className="capitalize cursor-pointer px-6 py-3 items-center rounded-full bg-green-themegreen text-white font-WorkSans text-lg not-italic font-medium leading-7"
        >
          Frequently Asked Questions
        </button>
      </div>
    </div>
  );
};

export default SocialMediaCard;
