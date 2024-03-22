// import React, { useState } from "react";

// const DonateBox = () => {
//   const [amount, setAmount] = useState(1000);

//   const handleInputChange = (e) => {
//     const inputValue = parseInt(e.target.value);
//     if (inputValue >= 1000) {
//       setAmount(inputValue);
//     }
//   };

//   const handleButtonClick = (clickedAmount) => {
//     setAmount(clickedAmount);
//   };

//   return (
//     <div className="border-gray-8 grid gap-4 rounded bg-gradient-to-br from-[#f4f4f4] to-[#f1f1f1] p-6 mt-4">
//       <div className="top-container flex justify-between">
//         <div className="flex-start basis-2/3 flex flex-col gap-2">
//           <h3 className="text-2xl font-semibold text-gray-800">Donate</h3>
//           <p className="text-sm font-WorkSans">
//             Donate to support our mission.
//           </p>
//         </div>
//         <div className="relative flex basis-1/3 items-center">
//           <span className="absolute inset-y-0 start-0 grid place-content-center px-1 ml-2">
//             <p className="font-semibold font-sans text-lg text-black">₹</p>
//           </span>
//           <input
//             type="number"
//             value={amount}
//             onChange={handleInputChange}
//             min={1000}
//             className="w-full rounded-lg border-[3px] bg-slate-100 border-yellow-600 text-black p-4 px-6 pe-6 ps-6 text-xl shadow-sm"
//             placeholder="₹ 1000"
//           />
//         </div>
//       </div>
//       <div className="bottom-container flex flex-wrap gap-2">
//         {[
//           1000, 2000, 5000, 7000, 10000, 20000, 30000, 40000, 50000, 60000,
//           70000, 80000, 90000, 100000, 200000, 300000, 400000, 500000,
//         ].map((btnAmount, index) => (
//           <button
//             key={index}
//             className="rounded-md bg-yellow-600 hover:bg-green-dark text-white px-3 py-2 border border-yellow-800"
//             onClick={() => handleButtonClick(btnAmount)}
//           >
//             ₹ {btnAmount}
//           </button>
//         ))}
//       </div>
//       <div>
//         <a
//           title="Donate Now"
//           name="Donate Now"
//           aria-label="Donate Now"
//           href={`/donation/contribution?amount=${amount}`}
//           data-cy="donation-btn"
//           className="cursor-pointer flex items-center justify-center leading-tight tracking-wide transition-all duration-150 h-12 px-6 rounded w-full mt-2 bg-yellow-dark hover:bg-green-dark active:bg-green-dark disabled:bg-copper-disabled text-white disabled:text-gray-500"
//         >
//           Donate
//         </a>
//       </div>
//     </div>
//   );
// };

// export default DonateBox;

import React, { useState } from "react";

const DonateBox = () => {
  const [amount, setAmount] = useState('');

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    // Allow only numeric input
    const numericInput = inputValue.replace(/\D/, '');
    // Update the state only if the input is empty or numeric
    if (numericInput === '' || (numericInput >= 1000 && numericInput <= 500000)) {
      setAmount(numericInput);
    }
  };

  const handleButtonClick = (clickedAmount) => {
    setAmount(clickedAmount.toString());
  };

  return (
    <div className="border-gray-8 grid gap-4 rounded bg-gradient-to-br from-[#f4f4f4] to-[#f1f1f1] p-6 mt-4">
      <div className="top-container flex justify-between">
        <div className="flex-start basis-2/3 flex flex-col gap-2">
          <h3 className="text-2xl font-semibold text-gray-800">Donate</h3>
          <p className="text-sm font-WorkSans">
            Donate to support our mission.
          </p>
        </div>
        <div className="relative flex basis-1/3 items-center">
          <span className="absolute inset-y-0 start-0 grid place-content-center px-1 ml-2">
            <p className="font-semibold font-sans text-lg text-black">₹</p>
          </span>
          <input
            type="text" // Change type to text
            value={amount}
            onChange={handleInputChange}
            className="w-full rounded-lg border-[3px] bg-slate-100 border-yellow-600 text-black p-4 px-6 pe-6 ps-6 text-xl shadow-sm"
            placeholder="₹ 1000"
          />
        </div>
      </div>
      <div className="bottom-container flex flex-wrap gap-2">
        {[
          1000, 2000, 5000, 7000, 10000, 20000, 30000, 40000, 50000, 60000,
          70000, 80000, 90000, 100000, 200000, 300000, 400000, 500000,
        ].map((btnAmount, index) => (
          <button
            key={index}
            className="rounded-md bg-yellow-600 hover:bg-green-dark text-white px-3 py-2 border border-yellow-800"
            onClick={() => handleButtonClick(btnAmount)}
          >
            ₹ {btnAmount}
          </button>
        ))}
      </div>
      <div>
        <a
          title="Donate Now"
          name="Donate Now"
          aria-label="Donate Now"
          href={`/donation/contribution?amount=${amount}`}
          data-cy="donation-btn"
          className="cursor-pointer flex items-center justify-center leading-tight tracking-wide transition-all duration-150 h-12 px-6 rounded w-full mt-2 bg-yellow-dark hover:bg-green-dark active:bg-green-dark disabled:bg-copper-disabled text-white disabled:text-gray-500"
        >
          Donate
        </a>
      </div>
    </div>
  );
};

export default DonateBox;


// import React, { useState } from "react";

// const DonateBox = () => {
//   const [amount, setAmount] = useState(1000);

//   const handleInputChange = (e) => {
//     const inputValue = parseInt(e.target.value);
//     if (inputValue >= 1000) {
//       setAmount(inputValue);
//     }
//   };

//   const handleButtonClick = (clickedAmount) => {
//     setAmount(clickedAmount);
//   };

//   return (
//     <div className="border-gray-7 border grid gap-4 rounded bg-gradient-to-br from-[#f4f4f4] to-[#f1f1f1] p-6 mt-4">
//       <div className="top-container flex justify-between">
//         <div className="flex-start basis-1/2 flex flex-col gap-2">
//           <h3 className="text-2xl font-semibold text-gray-800">Donate</h3>
//           <p className="text-sm font-WorkSans">Support our mission.</p>
//         </div>
//         <div className="relative flex basis-1/2 items-center">
//           <span className="absolute inset-y-0 start-0 grid place-content-center px-1 ml-2">
//             <p className="font-semibold font-sans text-lg text-black">₹</p>
//           </span>
//           <input
//             type="number"
//             value={amount}
//             // value={`${amount.toLocaleString('en-IN')}`}
//             onChange={handleInputChange}
//             min={1000}
//             className="w-full rounded-lg border-[3px] bg-slate-100 border-yellow-600 text-black p-4 px-6 pe-2 ps-6 text-xl shadow-sm"
//             placeholder="1000"
//           />
//         </div>
//       </div>
//       <hr />
//       <div className="bottom-container flex flex-wrap gap-2">
//         {[
//           1000, 2000, 5000, 7000, 10000, 20000, 30000, 40000, 50000, 60000,
//           70000, 80000, 90000, 100000, 200000, 300000, 400000, 500000,
//         ].map((btnAmount, index) => (
//           <button
//             key={index}
//             className="rounded-md w-[106px] bg-yellow-600 hover:bg-green-dark text-white px-3 py-2 border border-yellow-800"
//             onClick={() => handleButtonClick(btnAmount)}
//           >
//             ₹ {btnAmount.toLocaleString("en-IN")}
//           </button>
//         ))}
//       </div>
//       <div>
//         <a
//           title="Donate Now"
//           name="Donate Now"
//           aria-label="Donate Now"
//           href={`/donation/contribution?amount=${amount}`}
//           data-cy="donation-btn"
//           className="cursor-pointer flex items-center justify-center leading-tight tracking-wide transition-all duration-150 h-12 px-6 rounded w-full mt-2 bg-yellow-dark hover:bg-green-dark active:bg-green-dark disabled:bg-copper-disabled text-white disabled:text-gray-500"
//         >
//           Donate
//         </a>
//       </div>
//     </div>
//   );
// };

// export default DonateBox;
