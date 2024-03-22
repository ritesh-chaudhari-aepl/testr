// import React, { useState } from "react";
// import DonorsCard from "../DonorsCard";
// import ShareBtn from "@/components/crowdfunding/common/ShareBtn";
// import { GiTrophyCup } from "react-icons/gi";
// import { totalSupporters } from "@/data/nav2";

// const TotalSupporters = () => {
//   const [activeTab, setActiveTab] = useState("generous");
//   const [showTotalSupporters, setShowTotalSupporters] = useState({
//     totalSupporters: false,
//   });

//   const defaultVisibleCards = 2;

//   // Sort supporters by amount in descending order
//   const sortedTotalSupporters = [...totalSupporters].sort(
//     (a, b) =>
//       parseFloat(b.amount.replace(",", "")) -
//       parseFloat(a.amount.replace(",", ""))
//   );

//   const recentSupporters =
//     activeTab === "generous"
//       ? sortedTotalSupporters.slice(0, defaultVisibleCards)
//       : totalSupporters;

//   const handleReadMore = (section) => {
//     setShowTotalSupporters((prev) => ({
//       ...prev,
//       [section]: !prev[section],
//     }));
//   };

//   return (
//     <div className="grid gap-4">
//       {/* Total Supporters */}
//       <h3 className="text-lg font-semibold mt-4 flex gap-2 items-center">
//         <span className="text-2xl text-gray-800">
//           <GiTrophyCup />
//         </span>
//         Total Supporters (666)
//       </h3>
//       <div className="py-6 total-supporters px-8 border grid gap-4 border-gray-8 rounded bg-gradient-to-br from-[#f4f4f4] to-[#f1f1f1]">
//         <div className="flex bg-[#ffe87f] py-5 px-6">
//           <p className="italic leading-relaxed font-medium text-base tracking-none">
//             Donated VIA BANK / PAYTM / UPI ?{" "}
//             <a className="text-yellow-950 font-semibold underline cursor-pointer">
//               {" "}
//               Click Here{" "}
//             </a>
//             if you can&apos;t find your donation listed below.
//           </p>
//         </div>
//         {/* Tab Buttons */}
//         <div className="flex justify-center">
//           <button
//             onClick={() => setActiveTab("generous")}
//             className={`px-4 py-2 w-full focus:outline-none ${
//               activeTab === "generous"
//                 ? "bg-yellow-dark text-white"
//                 : "bg-gray-200"
//             }`}
//           >
//             Most Generous
//           </button>
//           <button
//             onClick={() => setActiveTab("total")}
//             className={`px-4 py-2 w-full focus:outline-none ${
//               activeTab === "total"
//                 ? "bg-yellow-dark text-white"
//                 : "bg-gray-200"
//             }`}
//           >
//             Recent
//           </button>
//         </div>

//         {/* Supporters List */}
//         <div className="grid gap-3">
//           {recentSupporters.map((supporter) => (
//             <DonorsCard
//               key={supporter.nameShort}
//               nameShort={supporter.nameShort}
//               name={supporter.name}
//               amount={supporter.amount}
//             />
//           ))}
//           {showTotalSupporters.totalSupporters &&
//             totalSupporters
//               .slice(defaultVisibleCards)
//               .map((supporter) => (
//                 <DonorsCard
//                   key={supporter.nameShort}
//                   nameShort={supporter.nameShort}
//                   name={supporter.name}
//                   amount={supporter.amount}
//                 />
//               ))}
//           {!showTotalSupporters.totalSupporters &&
//             totalSupporters.length > defaultVisibleCards && (
//               <button
//                 onClick={() => handleReadMore("totalSupporters")}
//                 className="mt-4 text-blue-500 underline cursor-pointer"
//               >
//                 Read More
//               </button>
//             )}
//           {showTotalSupporters.totalSupporters && (
//             <button
//               onClick={() => handleReadMore("totalSupporters")}
//               className="mt-4 text-blue-500 underline cursor-pointer"
//             >
//               Read Less
//             </button>
//           )}
//         </div>
//         <ShareBtn />
//       </div>
//     </div>
//   );
// };

// export default TotalSupporters;
import React, { useState, useEffect } from "react";
import DonationForm from "@/components/modals/DonationForm";
import DefaultModal from "@/components/modals/DefaultModal";
import DonorsCard from "../DonorsCard";
import ShareBtn from "@/components/crowdfunding/common/ShareBtn";
import { GiTrophyCup } from "react-icons/gi";
import { totalSupporters } from "@/data/nav2";

const TotalSupporters = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [activeTab, setActiveTab] = useState("generous");
  const [currentPage, setCurrentPage] = useState(1);
  const supportersPerPage = 4; // Adjust this based on your desired number of supporters per page
  const [initialPageLoaded, setInitialPageLoaded] = useState(false);

  // Sort supporters by amount in descending order
  const sortedTotalSupporters = [...totalSupporters].sort(
    (a, b) =>
      parseFloat(b.amount.replace(",", "")) -
      parseFloat(a.amount.replace(",", ""))
  );

  const indexOfLastSupporter = currentPage * supportersPerPage;
  const indexOfFirstSupporter = indexOfLastSupporter - supportersPerPage;
  const currentSupporters = sortedTotalSupporters.slice(
    indexOfFirstSupporter,
    indexOfLastSupporter
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleBackToProject = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    if (!initialPageLoaded) {
      // Load additional supporters if needed to ensure at least 4 cards are displayed
      const remainingSupporters = Math.max(4 - currentSupporters.length, 0);
      if (remainingSupporters > 0) {
        setCurrentPage(
          (prevPage) =>
            prevPage + Math.ceil(remainingSupporters / supportersPerPage)
        );
      }
      setInitialPageLoaded(true);
    }
  }, [currentSupporters, initialPageLoaded, supportersPerPage]);

  return (
    <div className="grid gap-4">
      {/* Total Supporters */}
      <h3 className="text-lg font-semibold mt-4 flex gap-2 items-center">
        <span className="text-2xl text-gray-800">
          <GiTrophyCup />
        </span>
        Total Supporters (666)
      </h3>
      <div className="py-6 total-supporters px-8 border grid gap-4 border-gray-8 rounded bg-gradient-to-br from-[#f4f4f4] to-[#f1f1f1]">
        <div className="flex bg-[#ffe87f] py-5 px-6">
          <p className="italic leading-relaxed font-medium text-base tracking-none">
            Donated VIA BANK / PAYTM / UPI ?{" "}
            <a
              title="Donate via Bank / PayTm / UPI"
              name="Donate via Bank / PayTm / UPI"
              aria-label="Donate via Bank / PayTm / UPI"
              className="text-yellow-950 font-semibold underline cursor-pointer"
              onClick={handleBackToProject}
            >
              {" "}
              Click Here{" "}
            </a>
            if you can&apos;t find your donation listed below.
          </p>
        </div>
        {/* Tab Buttons */}
        <div className="flex justify-center">
          <button
            title="Most Generous"
            name="Most Generous"
            aria-label="Most Generous"
            onClick={() => setActiveTab("generous")}
            className={`px-4 py-2 w-full focus:outline-none ${
              activeTab === "generous"
                ? "bg-yellow-dark text-white"
                : "bg-gray-200"
            }`}
          >
            Most Generous
          </button>
          <button
            title="Recent"
            name="Recent"
            aria-label="Recent"
            onClick={() => setActiveTab("total")}
            className={`px-4 py-2 w-full focus:outline-none ${
              activeTab === "total"
                ? "bg-yellow-dark text-white"
                : "bg-gray-200"
            }`}
          >
            Recent
          </button>
        </div>

        {/* Supporters List */}
        <div className="grid gap-3">
          {currentSupporters.map((supporter) => (
            <DonorsCard
              key={supporter.nameShort}
              nameShort={supporter.nameShort}
              name={supporter.name}
              amount={supporter.amount}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-4">
          {Array.from(
            {
              length: Math.ceil(
                sortedTotalSupporters.length / supportersPerPage
              ),
            },
            (_, index) => (
              <button
                title="pagination"
                name="pagination"
                aria-label="pagination"
                key={index + 1}
                onClick={() => paginate(index + 1)}
                className={`mx-1 px-3 py-1 focus:outline-none ${
                  currentPage === index + 1
                    ? "bg-yellow-dark text-white"
                    : "bg-gray-200"
                }`}
              >
                {index + 1}
              </button>
            )
          )}
        </div>

        <ShareBtn />
      </div>
      {showPopup && <DefaultModal btnCloseClick={closePopup} />}
      {/* {showPopup && <DefaultModal btnCloseClick={closePopup} />} */}
    </div>
  );
};

export default TotalSupporters;
