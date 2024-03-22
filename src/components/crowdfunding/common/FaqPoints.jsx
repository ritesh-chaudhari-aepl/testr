"use client";
import React, { useState } from "react";

const FaqPoints = () => {
  const [faqItems, setFaqItems] = useState([
    {
      id: 1,
      question: "What is the Brihat Mridanga Trust ?",
      answer:
        " The Brihat Mridanga Trust is a Public Charitable Trust founded for the purpose of educating people about cow protection and animal welfare. You can go through the objects of the Trust to know more.",
      isOpen: false,
    },
    {
      id: 2,
      question:
        "Is the Brihat Mridanga Trust a genuine and trustworthy organisation?",
      answer:
        "The Brihat Mridanga Trust is  registered under the societies registration Act 1860 of Government of India. The members of the trust are well known personalities who have contributed to the society positively. Go to Trust page to find more information and access to the Trust official documents.",
      isOpen: false,
    },
    {
      id: 3,
      question: "How will the donations raised for the film be used?",
      answer:
        "The donations being raised on our website will be used to get the film produced and distributed. Also, the Trust will retain the non-commercial rights of the film and cover all logistics in order to  organise free screenings with cow protection educational Q&A and free distribution of the novel Radha and the Great Rescue (adapted from the screenplay) across Indian villages, schools and universities. In total transparency, the full detailed monthly updated accounts will be available on our website.  An independent published audit will yearly certify the Trust accounts.",
      isOpen: false,
    },
    {
      id: 4,
      question: "What are the non-commercial rights of a film ? ",
      answer:
        "The non-commercial rights of a film allow free screenings in various cultural or educational venues in the frame of a not-for-profit exploitation of the film. By securing those rights the Brihat Mridanga Trust will be entitled to screen the film in villages, schools, colleges, and universities with no admission fee whatsoever.",
      isOpen: false,
    },
    {
      id: 5,
      question: "Can a donor request for a screening?",
      answer:
        "Yes, you can submit your request for a screening in a specific school, village or campus by writing to our screening service : screening_request@brihatmridangatrust.com",
      isOpen: false,
    },
    {
      id: 6,
      question: "Is my donation eligible for 80G tax exemption?",
      answer:
        "Brihat Mridanga Trust is a legally registered non-profit organisation (NGOs) or charities may be considered eligible for donors to claim as a tax deduction. Look for a note '80G tax benefits for INR donations' below the 'Donate Now' button on the fundraiser. You can also filter for fundraisers with tax benefits on the listing page here",
      isOpen: false,
    },
    // Add more FAQ items as needed
  ]);

  const toggleContentVisibility = (id) => {
    setFaqItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  const renderSvgPath = (isOpen) => {
    if (isOpen) {
      return (
        <>
          <path
            d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeMiterlimit="10"
          ></path>
          <path
            d="M8.25 12H15.75"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </>
      );
    }

    return (
      <>
        <path
          d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeMiterlimit="10"
        ></path>
        <path
          d="M8.25 12H15.75"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M12 8.25V15.75"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </>
    );
  };

  return (
    <div className="transition-all ease-in-out duration-300">
      {faqItems.map((item, index) => (
        <div
          key={item.id}
          className={`border border-gray-7 ${
            item.isOpen ? "mb-2" : "" // Apply margin-bottom only when the FAQ is open
          } ${item.isOpen ? "border-yellow-500" : ""}`}
        >
          <button
            className="border-0 outline-none cursor-pointer active:opacity-75 w-full p-4"
            onClick={() => toggleContentVisibility(item.id)}
          >
            <div className="flex items-center">
              <div className="text-left pr-4 font-semibold">
                {item.question}
              </div>
              <svg
                className={`w-4 h-4 sm:w-5 sm:h-5 text-yellow-dark shrink-0 ml-auto ${
                  item.isOpen ? "transform rotate-180" : ""
                }`}
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                fill="none"
              >
                {renderSvgPath(item.isOpen)}
              </svg>
            </div>
          </button>
          <div
            className={`overflow-hidden transition-[height] ease-in-out duration-300 ${
              item.isOpen ? "h-auto opacity-100" : "h-0 opacity-0"
            }`}
          >
            {/* Content goes here */}
            <div>
              <div className="transition-opacity ease-in-out overflow-visible duration-300">
                <div className="px-4 py-4 border-y border-gray-7">
                  {item.isOpen && (
                    <div className="mb-4">
                      <p className="text-xl leading-relaxed tracking-none mb-4 last:mb-0 font-medium">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default FaqPoints;
