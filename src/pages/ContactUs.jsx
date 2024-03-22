import React from "react";
// import ContactUsbanner from "../assets/ContactUs-bg.png";
import InquiryCard from "../components/cards/contactSection/InquiryCard";
import SocialMediaCard from "../components/cards/contactSection/SocialMediaCard";

const ContactUs = () => {
  const banner = {
    // backgroundImage: "url(" + `${herobanner}` + ")",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "-webkit-fill-available",
    width: "-webkit-fill-available",
    position: "relative",
    // minInlineSize: "fit-content",
  };

  return (
    <section id="ContactUs" className="flex items-start">
      <div className="footer-bg flex items-center justify-center min-h-screen h-screen min-w-full relative ">
        <div className="mx-auto max-w-screen-2xl px-4 py-14 sm:px-6 md:flex flex-col h-auto justify-between lg:px-8">
          {/* 1 */}
          <div className="container mx-auto px-6 py-8 md:py-12 flex flex-wrap justify-center">
            <h2 className="font-bold text-yellow-dark text-5xl md:text-6xl font-WhitneySemibold not-italic capitalize leading-[76.8px]">
              Contact <span className="text-white">Us</span>
            </h2>
          </div>
          {/* </div> */}
          <div className="grid grid-cols-1 mt-8 py-6 items-start gap-8 text-center sm:text-left">
            {/* by using MainCard Component */}
            <InquiryCard />
            {/* <SocialMediaCard /> */}

            {/* by manual code */}
            {/* inquiry form */}
            {/* <div className="flex flex-col p-24 justify-center items-start rounded-xl bg-[#fffcf4]">
              <div className="flex flex-col items-center gap-11">
                <div className="flex flex-col items-center gap-4">
                  <h3 className="text-textDark font-WorkSans text-2xl not-italic font-semibold capitalize leading-9">
                    Inquiry Form
                  </h3>
                  <p className="text-[#686868] text-center font-WorkSans text-lg not-italic font-normal leading-7">
                    Your thoughts, suggestions, & inquiries are invaluable to
                    us. Reach out & become a part of Radha&apos;s adventurous
                    world!
                  </p>
                </div>
                <button className="capitalize px-6 py-3 items-center rounded-full bg-yellow-dark text-textDark font-WorkSans text-lg not-italic font-medium leading-7">
                  connect with us
                </button>
              </div>
            </div> */}
            {/* social media */}
            {/* <div className="flex flex-col p-24 justify-center items-start rounded-xl bg-[#f0fff8]">
              <div className="flex flex-col items-center gap-11">
                <div className="flex flex-col items-center gap-4">
                  <h3 className="text-textDark font-WorkSans text-2xl not-italic font-semibold capitalize leading-9">
                    Social Media
                  </h3>
                  <p className="text-[#686868] text-center font-WorkSans text-lg not-italic font-normal leading-7">
                    Follow us on{" "}
                    <a className="text-green-themegreen underline">facebook</a>,{" "}
                    <a className="text-green-themegreen underline">Linkedin</a>,{" "}
                    <a className="text-green-themegreen underline">Pinterest</a>{" "}
                    & immerse yourself in exclusive content, updates, & a
                    space to share your thoughts & experiences with Radha’s
                    story
                  </p>
                </div>
                <button className="capitalize px-6 py-3 items-center rounded-full bg-green-themegreen text-white font-WorkSans text-lg not-italic font-medium leading-7">
                  join our community
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
