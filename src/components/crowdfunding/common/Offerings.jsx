import React from "react";

const Offerings = () => {
  return (
    <>
      <div className="bg-gray-100 border border-gray-8 rounded-sm py-1 mb-6">
        <h2 className="text-lg font-semibold leading-normal tracking-tight text-center uppercase">
          Offerings
        </h2>
      </div>
      <div className="flex flex-wrap items-center">
        <a
          href="https://www.sec.gov/Archives/edgar/data/1779469/000177946923000002/Shift_Form_C.pdf"
          target="_blank"
          rel="noreferrer"
          className="text-left cursor-pointer text-green-dark text-lg font-semibold w-full md:w-1/3 px-4 my-2"
        >
          Form C
        </a>
        <a
          href="https://www.sec.gov/Archives/edgar/data/1779469/000177946923000002/Audited_Financials_2021.pdf"
          target="_blank"
          rel="noreferrer"
          className="text-left cursor-pointer text-green-dark text-lg font-semibold w-full md:w-1/3 px-4 my-2"
        >
          2020 & 2021 Audit
        </a>
        <a
          href="https://www.sec.gov/Archives/edgar/data/1779469/000177946923000002/Unaudited_Balance_Sheet.pdf"
          target="_blank"
          rel="noreferrer"
          className="text-left cursor-pointer text-green-dark text-lg font-semibold w-full md:w-1/3 px-4 my-2"
        >
          2022 Unaudited Balance Sheet
        </a>
        <a
          href="https://www.sec.gov/Archives/edgar/data/1779469/000177946923000002/Unaudited_Profit_Loss_State.pdf"
          target="_blank"
          rel="noreferrer"
          className="text-left cursor-pointer text-green-dark text-lg font-semibold w-full md:w-1/3 px-4 my-2"
        >
          2022 Unaudited P&amp;L
        </a>
        <a
          href="https://www.sec.gov/Archives/edgar/data/1779469/000177946923000002/Note_Purchase_Agreement.pdf"
          target="_blank"
          rel="noreferrer"
          className="text-left cursor-pointer text-green-dark text-lg font-semibold w-full md:w-1/3 px-4 my-2"
        >
          Note Purchase Agreement
        </a>
        <a
          href="https://www.sec.gov/Archives/edgar/data/1779469/000177946923000002/Promissory_Note.pdf"
          target="_blank"
          rel="noreferrer"
          className="text-left cursor-pointer text-green-dark text-lg font-semibold w-full md:w-1/3 px-4 my-2"
        >
          Promissory Note
        </a>
      </div>
    </>
  );
};

export default Offerings;
