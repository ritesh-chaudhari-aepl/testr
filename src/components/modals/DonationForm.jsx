import React, { useState } from "react";

const DonationForm = ({onClose}) => {
  const [paymentMethod, setPaymentMethod] = useState("paytm");
  const [isAnonymous, setIsAnonymous] = useState(false);

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleAnonymousChange = () => {
    setIsAnonymous((prev) => !prev);
  };

  const renderDynamicText = () => {
    switch (paymentMethod) {
      case "paytm":
        return "Wallet Order ID*";
      case "upi":
        return "UPI ID*";
      case "bankTransfer":
        return "Bank Transaction ID*";
      default:
        return "Transaction ID*";
    }
  };

  return (
    <div className="flex flex-col gap-4 justify-between">
      <div className="">
        <h2 className="text-xl text-center font-semibold">
          Claim your donation acknowledgement now!
        </h2>
        <button
          class="absolute -end-1 -top-1 rounded-full border border-gray-500 bg-gray-200 p-1"
          onClick={onClose}
        >
          <span class="sr-only">Close</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>

      <p className="text-[13px] text-center">
        (For payment done via PayTM, UPI & Bank Transfers)
      </p>
      <div className="space-y-4">
        <label>Select Payment Mode</label>
        <fieldset className="flex gap-4 justify-between">
          {/* Paytm Option */}
          <div className="flex items-center gap-4 w-full">
            <label
              htmlFor="Paytm"
              className="cursor-pointer flex items-center gap-2 w-full rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200"
            >
              <input
                type="radio"
                name="PaymentMethod"
                value="paytm"
                id="Paytm"
                className=""
                checked={paymentMethod === "paytm"}
                onChange={() => handlePaymentMethodChange("paytm")}
              />
              <div className="flex items-center gap-2">
                <p className="text-gray-700">Paytm</p>
              </div>
            </label>
          </div>

          {/* UPI Option */}
          <div className="flex items-center gap-4 w-full">
            <label
              htmlFor="UPI"
              className="cursor-pointer flex items-center gap-2 w-full rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200"
            >
              <input
                type="radio"
                name="PaymentMethod"
                value="upi"
                id="UPI"
                className=""
                checked={paymentMethod === "upi"}
                onChange={() => handlePaymentMethodChange("upi")}
              />
              <div className="flex items-center gap-2">
                <p className="text-gray-700">UPI</p>
              </div>
            </label>
          </div>

          {/* Bank Transfer Option */}
          <div className="flex items-center gap-4 w-full">
            <label
              htmlFor="BankTransfer"
              className="cursor-pointer flex items-center gap-2 w-full rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200"
            >
              <input
                type="radio"
                name="PaymentMethod"
                value="bankTransfer"
                id="BankTransfer"
                className=""
                checked={paymentMethod === "bankTransfer"}
                onChange={() => handlePaymentMethodChange("bankTransfer")}
              />
              <div className="flex items-center gap-2">
                <p className="text-gray-700">Bank Transfer</p>
              </div>
            </label>
          </div>
        </fieldset>
      </div>
      <form action="#" className="grid gap-4">
        <div className="mt-4 grid grid-cols-2 gap-6">
          {/* Dynamic Text Field */}
          <div className="">
            <label
              htmlFor="dynamicText"
              className="block text-sm changing-text font-medium text-gray-700"
            >
              {renderDynamicText()}
            </label>
            <input
              type="text"
              id="dynamicText"
              name="dynamic_text"
              required
              className="mt-1 w-full rounded-md border-gray-5 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>
          {/* Amount Donated */}
          <div className="">
            <label
              htmlFor="amountDonated"
              className="block text-sm font-medium text-gray-700"
            >
              Amount Donated*
            </label>
            <input
              type="text"
              id="amountDonated"
              required
              name="amount_donated"
              className="mt-1 w-full rounded-md border-gray-5 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>
          {/* Name */}
          <div className="">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name*
            </label>
            <input
              type="text"
              id="name"
              required
              name="name"
              className="mt-1 w-full rounded-md border-gray-5 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>
          {/* Make Donation Anonymous */}
          <div className="">
            <label className="flex gap-4 items-center">
              <input
                type="checkbox"
                id="MarketingAccept"
                name="marketing_accept"
                className="h-5 w-5 rounded-md border-gray-5 bg-white shadow-sm"
                checked={isAnonymous}
                onChange={handleAnonymousChange}
              />
              <span className="text-sm text-gray-700">
                Make my donation anonymous
              </span>
            </label>
          </div>
          {/* Email */}
          <div className="">
            <label
              htmlFor="Email"
              className="block text-sm font-medium text-gray-700"
            >
              Email*
            </label>
            <input
              type="email"
              id="Email"
              name="email"
              className="mt-1 w-full rounded-md border-gray-5 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>
          {/* Mobile Number */}
          <div className="">
            <label
              htmlFor="MobileNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Your Mobile Number*
            </label>
            <input
              type="tel"
              id="MobileNumber"
              name="mobile_number"
              className="mt-1 w-full rounded-md border-gray-5 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>
        </div>
        {/* Submit Button */}
        <div className="flex items-center justify-center w-full">
          <button
            title="submit btn"
            name="Submit btn"
            aria-label="Submit btn"
            type="submit"
            className="flex-shrink-0 rounded-md border border-yellow-dark bg-yellow-dark px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-yellow-dark focus:outline-none focus:ring active:text-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default DonationForm;
