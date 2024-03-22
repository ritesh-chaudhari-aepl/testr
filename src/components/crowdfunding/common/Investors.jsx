import React from "react";
import Image from "next/image";
import filmImage from "@/assets/hero-bg.webp";
import investmentGraphics from "@/assets/crowdfund/investment_graphic.webp";
import Cards from "./Cards";
import user from "@/assets/actor.png";

const Investors = ({ usertypes }) => {
  return (
    <>
      <div className="bg-gray-100 border border-gray-8 rounded-sm py-1 mb-6">
        <h2 className="text-lg font-semibold leading-normal tracking-tight text-center uppercase">
          {usertypes}
        </h2>
      </div>
      <div className="h-full">
        {/* <div className="mb-4 last:mb-0 border-b border-gray-8 last:border-none">
          <div className="mb-4">
            <div className="mb-8 -mx-6 w-screen lg:mx-0 lg:w-full">
              <Image
                alt=""
                loading="eager"
                width="975"
                height="548"
                decoding="async"
                data-nimg="1"
                src={filmImage}
                className="text-transparent"
              />
            </div>
            <h3 className="text-lg font-semibold leading-normal tracking-tight mt-10 mb-8">
              What is <i>Radha - The Rescue</i> ?
            </h3>
            <p className="leading-relaxed font-medium text-xl tracking-none mb-4 last:mb:0">
              1. <i>Radha - The Rescue</i> is a feature length sci-fi film
              releasing in theaters December 1st. It follows the journey of a
              man who is banished by a mysterious stranger with otherworldly
              powers to a tyrannical, parallel earth where he must fight to get
              back the woman he loves.
            </p>
            <p className="leading-relaxed font-medium text-xl tracking-none mb-4 last:mb:0">
              2. 2. The film has already been made. This investment opportunity
              is for raising funds for the theatrical distribution costs (P&A).
            </p>
            <p className="leading-relaxed font-medium text-xl tracking-none mb-4 last:mb:0">
              3. <i>Radha - The Rescue</i> stars Kristoffer Polaha (
              <i>Wonder Woman 1984</i>), Neal McDonough (<i>Yellowstone</i>),
              Elizabeth Tabish (<i>The Chosen</i>), John Billingsley (
              <i>Star Trek: Enterprise</i>), Rose Reid (<i>Finding You</i>),
              Paras Patel (<i>The Chosen</i>), & Sean Astin (
              <i>The Lord of the Rings</i>).
            </p>
          </div>
        </div> */}
        {/* <div className="mb-4 last:mb-0 border-b border-gray-8 last:border-none">
          <div className="mb-4">
            <div className="mb-8 -mx-6 w-screen lg:mx-0 lg:w-full">
              <Image
                alt=""
                loading="eager"
                width="975"
                height="548"
                decoding="async"
                data-nimg="1"
                src={filmImage}
                className="text-transparent"
              />
            </div>
            <h3 className="text-lg font-semibold leading-normal tracking-tight mt-10 mb-8">
              What is P&A ?
            </h3>
            <p className="leading-relaxed font-medium text-xl tracking-none mb-4 last:mb:0">
              P&A stands for “Prints & Advertising.” It’s an old theatrical
              industry term from back when movies were printed onto physical
              film. The term is still widely used today to describe the cost of
              taking a finished film like <i>Radha - The Rescue</i> and
              marketing it to moviegoers.
            </p>
            <p className="leading-relaxed font-medium text-xl tracking-none mb-4 last:mb:0">
              P&A is a crucial piece of the marketing budget for a film & may
              be appealing to certain investors. Why? Because with P&A, money is
              only raised after the film is already made & you know the
              quality of the work. Also, any potential return to P&A investors
              is paid directly out of theatrical proceeds–meaning P&A investors
              get paid right after the theater gets paid. So, it’s the last
              money in, & the first money out.
            </p>
            <p className="leading-relaxed font-medium text-xl tracking-none mb-4 last:mb:0">
              <i>Radha - The Rescue</i> ’s P&A will follow the standard film
              industry payout model. What’s more, this P&A investment holds the
              potential for returns far faster than the significantly longer
              timeframe required when investing in a film before the filming
              process even begins.
            </p>
            <p className="leading-relaxed font-medium text-xl tracking-none mb-4 last:mb:0">
              To provide the opportunity to invest to as many people as
              possible, the investment cap is either $20,000 or your legal limit
              under the law.{" "}
            </p>
            <h4 className="text-xl font-bold leading-normal tracking-none mb-4 last:mb:0">
              How much could investors make?
            </h4>
            <p className="leading-relaxed font-medium text-xl tracking-none mb-4 last:mb:0">
              No return is guaranteed, so only invest what you can afford to
              lose. The maximum potential return is 100% repayment of initial
              capital invested plus an additional 20%. This means that if you
              invest $100 you could potentially receive that entire $100 back
              plus an additional $20.
            </p>
            <div className="mb-8 -mx-6 w-screen lg:mx-0 lg:w-full">
              <Image
                alt=""
                loading="eager"
                width="975"
                height="478"
                decoding="async"
                data-nimg="1"
                src={investmentGraphics}
                className="text-transparent"
              />
            </div>
            <p className="leading-relaxed font-medium text-xl tracking-none mb-4 last:mb:0">
              *No return is guaranteed, so only invest what you can afford to
              lose.
            </p>
          </div>
        </div> */}
        <div className="mb-4 last:mb-0 border-b border-gray-8 last:border-none">
          <div>
            <div className="mb-8 -mx-6 w-screen lg:mx-0 lg:w-full">
              <Image
                alt=""
                loading="eager"
                width="975"
                height="548"
                decoding="async"
                data-nimg="1"
                src={filmImage}
                className="text-transparent"
              />
            </div>
            <div className="flex flex-col md:flex-row my-10 md:mb-5">
              <div className="flex flex-col md:ml-3 md:w-[78%]">
                <p className="text-2xl font-semibold leading-normal tracking-tighter text-gray font-normal mb-2 text-center md:text-left">
                  The {usertypes}
                </p>
              </div>
            </div>
            <Cards
              userImage={user}
              name={usertypes}
              description="Kristoffer Polaha, born in Reno, Nevada, USA, is an actor & producer recognized for his work in Jurassic World Dominion, Wonder Woman 1984, & Where Hope Grows. He has been married to Julianne Morris since June 7, 2003, & they have three children. You can also see him as a Hallmark heartthrob in several films."
            />
            <Cards
              userImage={user}
              name={usertypes}
              description="Kristoffer Polaha, born in Reno, Nevada, USA, is an actor & producer recognized for his work in Jurassic World Dominion, Wonder Woman 1984, & Where Hope Grows. He has been married to Julianne Morris since June 7, 2003, & they have three children. You can also see him as a Hallmark heartthrob in several films."
            />
            <Cards
              userImage={user}
              name={usertypes}
              description="Kristoffer Polaha, born in Reno, Nevada, USA, is an actor & producer recognized for his work in Jurassic World Dominion, Wonder Woman 1984, & Where Hope Grows. He has been married to Julianne Morris since June 7, 2003, & they have three children. You can also see him as a Hallmark heartthrob in several films."
            />
            <Cards
              userImage={user}
              name={usertypes}
              description="Kristoffer Polaha, born in Reno, Nevada, USA, is an actor & producer recognized for his work in Jurassic World Dominion, Wonder Woman 1984, & Where Hope Grows. He has been married to Julianne Morris since June 7, 2003, & they have three children. You can also see him as a Hallmark heartthrob in several films."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Investors;
