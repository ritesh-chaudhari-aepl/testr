"use client";
import footerbanner from "../assets/footer-bg.png";
import logo from "../assets/bmt-logo.png";
import { BsWhatsapp, BsFacebook } from "react-icons/bs";
import "./footer.css";
import payimg from "../assets/payment-img-list.webp";
import Image from "next/image";
import ShortForm from "@/components/form/ShortForm";
import "./index.css";

const Footer = () => {
  return (
    <>
      <footer
        aria-label="Site Footer"
        className="bg-gradient-to-r from-[#3B1B01] to-[#35271A] text-white py-3 footer-bg"
      >
        <div className="mx-auto max-w-screen-2xl px-4 pb-6 pt-12 sm:px-6 lg:px-8 h-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 mb-3">
          <div className="flex sm:items-center sm:text-center md:items-start md:text-left flex-col gap lg:flex-row lg:gap-16 justify-between">
            <div className="flex flex-col basis-1/3 ">
              <div className="flex justify-center text-white sm:justify-start">
                {/* <span className="text-[25px] tracking-[10px] border border-white p-2">
                  Trust
                </span> */}
                <a title="logo" name="logo" aria-label="logo" href="/">
                  <Image
                    loading="eager"
                    src={logo}
                    className="w-36"
                    width={1440}
                    height={720}
                    alt="Trust Logo"
                    title="Trust Logo"
                  />
                </a>
              </div>
              <div className="flex items-center justify-center md:items-start md:justify-start flex-col mt-6 gap-2 leading-[30px] text-white">
                <p className="text-center leading-normal md:text-left">
                  A heartfelt thank you to our donors & each one of you who have
                  joined us on this beautiful journey.
                </p>
                {/* <span className="font-inter text-white">
                  <strong>Phone</strong>:{" "}
                  <a
                    href="tel:918210403033"
                    aria-label="Connect us through Phone Number"
                    title="Connect us through Phone Number"
                    target="_blank"
                    className="text-white transition hover:text-white/75 capitalize cursor-pointer"
                  >
                    +91 8210403033
                  </a>
                </span> */}
                {/* <div>
                  <span className="font-inter text-white">
                    <strong>Contact us at </strong> :{" "}
                    <a
                      href="mailto:info@brihatmridangatrust.org"
                      aria-label="Connect us through Email"
                      title="Connect us through Email"
                      target="_blank"
                      className="text-white transition hover:text-white/75 cursor-pointer"
                    >
                      info@brihatmridangatrust.org
                    </a>
                  </span>
                </div> */}
                <div className="text-center sm:text-left text-white">
                  <span className="font-inter capitalize">
                    <strong>Address</strong>: Office number HD-119, WeWork
                    Vaswani Chambers, 2nd Floor, 264/265 Dr Annie Besant Road,
                    Municipal Colony, Worli Shivali Nagar, Worli, Mumbai,
                    Maharashtra 400030{" "}
                  </span>
                </div>
                {/* <div className="social">
                  <a
                    // href="https://www.facebook.com/profile.php?id=100091588713018&is_tour_completed=true"
                    aria-label="Connect us through Facebook"
                    title="Connect us through Facebook"
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer"
                  >
                    <div className="social-btn color-telegram">
                      <BsFacebook className="icons8-telegram-app" />
                    </div>
                  </a>
                  <a
                    // href="https://instagram.com/genius_tutor01"
                    aria-label="Connect us through Instagram"
                    title="Connect us through Instagram"
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer"
                  >
                    <div className="social-btn color-instagram">
                      <div className="icons8-instagram"></div>
                    </div>
                  </a>
                  <a
                    // href="https://api.whatsapp.com/send/?phone=918210403033&text&type=phone_number&app_absent=0"
                    aria-label="Connect us through WhatsApp"
                    title="Connect us through WhatsApp"
                    target="_blank"
                    className="cursor-pointer"
                    rel="noreferrer"
                  >
                    <div className="social-btn color-whatsapp">
                      <BsWhatsapp className="icons8-whatsapp" />
                    </div>
                  </a>
                </div> */}
              </div>
            </div>

            <div className="flex basis-1/3 items-center flex-col mt-10 lg:mt-0 grid-cols-3 gap-2 sm:grid-cols-2 md:grid-cols-2 lg:col-span-2 relative">
              <div className="text-center sm:text-left lg:text-center justify-center text-white">
                <p className="text-2xl font-medium text-white font-Inter">
                  Quick Links
                </p>

                <div className="">
                  <nav aria-label="Footer About Nav" className="mt-8 ">
                    <ul className="space-y-4">
                      <li>
                        <a
                          className="text-white transition hover:text-white/75 capitalize cursor-pointer"
                          href="/"
                          aria-label="Home Page"
                          title="Home"
                          target="_blank"
                          onClick={(e) => handleScroll(`${href}`, e)}
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-white transition hover:text-white/75 capitalize cursor-pointer"
                          href="/about"
                          aria-label="The Film Page"
                          title="The Film"
                          target="_blank"
                          onClick={(e) => handleScroll(`${href}`, e)}
                        >
                          The Film
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-white transition hover:text-white/75 capitalize cursor-pointer"
                          href="/trustees"
                          aria-label="The Trust Page"
                          title="The Trust"
                          target="_blank"
                          onClick={(e) => handleScroll(`${href}`, e)}
                        >
                          The Trust
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-white transition hover:text-white/75 capitalize cursor-pointer"
                          href="/cause"
                          aria-label="The Cause Page"
                          title="The Cause"
                          target="_blank"
                          onClick={(e) => handleScroll(`${href}`, e)}
                        >
                          The Cause
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-white transition hover:text-white/75 capitalize cursor-pointer"
                          href="/blogs"
                          aria-label="Blogs"
                          title="Updates"
                          target="_blank"
                        >
                          Updates
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-white transition hover:text-white/75 capitalize cursor-pointer"
                          href="/donation"
                          aria-label="Donation Page"
                          title="Donation"
                          target="_blank"
                        >
                          Donation
                        </a>
                      </li>
                    </ul>
                  </nav>
                  {/* <Image
                    src={payimg}
                    alt="pay"
                    title="pay"
                    width="auto"
                    height="auto"
                    className="mt-3"
                  /> */}
                </div>
              </div>
            </div>
            <div className="flex basis-1/3 items-center flex-col mt-10 lg:mt-0 grid-cols-3 gap-2 sm:grid-cols-2 md:grid-cols-2 lg:col-span-2 relative">
              <h3 className="text-center text-2xl font-medium text-white font-Inter">
                Social Links
              </h3>
              <div className="social py-8">
                <div className="grid grid-cols-3 gap-3">
                  <a
                    // href="https://www.facebook.com/profile.php?id=100091588713018&is_tour_completed=true"
                    aria-label="Connect us through Facebook"
                    title="Connect us through Facebook"
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer y-8"
                  >
                    <span className="social-btn color-telegram">
                      <BsFacebook className="icons8-telegram-app" />
                    </span>
                  </a>
                  <a
                    // href="https://instagram.com/genius_tutor01"
                    aria-label="Connect us through Instagram"
                    title="Connect us through Instagram"
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer"
                  >
                    <div className="social-btn color-instagram">
                      <div className="icons8-instagram"></div>
                    </div>
                  </a>
                  <a
                    // href="https://api.whatsapp.com/send/?phone=918210403033&text&type=phone_number&app_absent=0"
                    aria-label="Connect us through WhatsApp"
                    title="Connect us through WhatsApp"
                    target="_blank"
                    className="cursor-pointer"
                    rel="noreferrer"
                  >
                    <div className="social-btn color-whatsapp">
                      <BsWhatsapp className="icons8-whatsapp" />
                    </div>
                  </a>
                </div>
              </div>
              <div className="text-center sm:text-left lg:text-center justify-center text-white">
                {/* <p className="text-2xl font-medium text-white font-Inter">
                  Extra Links
                </p> */}

                <div className="">
                  <nav aria-label="Footer About Nav" className="">
                    <ul className="space-y-4">
                      <li>
                        <a
                          className="inline-block text-white transition sm:text-sm lg:text-base font-Inter text-xs hover:text-white/75 capitalize cursor-pointer"
                          href="/privacy"
                          aria-label="Privacy Policy"
                          title="Privacy Policy"
                          target="_blank"
                        >
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a
                          className="inline-block text-white transition sm:text-sm lg:text-base font-Inter text-xs hover:text-white/75 capitalize cursor-pointer"
                          href="/terms-and-condition"
                          aria-label="Terms & Condition"
                          title="Terms & Condition"
                          target="_blank"
                        >
                          Terms & Conditions
                        </a>
                      </li>

                      <div>
                        <span className="font-inter text-white">
                          <strong>Contact us at </strong> :{" "}
                          <a
                            href="mailto:info@brihatmridangatrust.org"
                            aria-label="Connect us through Email"
                            title="Connect us through Email"
                            target="_blank"
                            className="text-white transition hover:text-white/75 cursor-pointer"
                          >
                            info@brihatmridangatrust.org
                          </a>
                        </span>
                      </div>
                    </ul>
                  </nav>
                  {/* <Image
                    src={payimg}
                    alt="pay"
                    title="pay"
                    width="auto"
                    height="auto"
                    className="mt-3"
                  /> */}
                </div>
              </div>
              {/* <ShortForm />
              <div className="text-center sm:text-left text-white">
                <p className="text-lg font-medium text-white font-Inter">
                  Request for Screening
                </p>
              </div>
              <div className="">
                <nav aria-label="Footer About Nav" className="mt-8 ">
                  <ul className="space-y-4 leading-normal">
                    <li className="leading-normal">
                      Schools, universities, and other educational institutions
                      are encouraged to engage with us by submitting screening
                      requests for our thought-provoking films. We welcome these
                      requests as they align with our mission to foster dialogue
                      and enlightenment through cinematic experiences within
                      educational communities. Institutions can effortlessly
                      initiate the process to host screenings at their premises
                      by sending email request to
                      <div className="font-inter mt-2 text-white">
                        <strong>Email</strong>:{" "}
                        <a
                          href="mailto:screening_request@brihatmridangatrust.com"
                          aria-label="Connect us through Email"
                          title="Connect us through Email"
                          target="_blank"
                          className="text-yellow-dark transition hover:text-white/75 cursor-pointer"
                        >
                          screening_request@brihatmridangatrust.com
                        </a>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div> */}
            </div>
          </div>
        </div>
        {/* copyright */}
        {/* <div className="mt-12 sm:flex place-content-center md:block w-full border-t border-white pt-6 pb-6"> */}
        <div className="sm:flex item md:block w-full border-t border-white pt-6 pb-6">
          <div className="mx-auto max-w-screen-sm px-4 text-center  justify-center items-center sm:flex gap-4  backg sm:text-left bg-clip-padding backdrop-filter backdrop-blur-sm">
            {/* <div className="flex flex-row">
              <div className="flex flex-row gap-3 ">
                <a
                  className="inline-block text-white transition sm:text-sm lg:text-base font-Inter text-xs hover:text-white/75 capitalize cursor-pointer"
                  href="/terms-and-condition"
                  aria-label="Terms & Condition"
                  title="Terms & Condition"
                  target="_blank"
                >
                  Terms & Conditions
                </a>

                <span className="mr-3">|</span>
              </div>

              <div className="flex flex-row gap-3 ">
                <a
                  className="inline-block text-white transition sm:text-sm lg:text-base font-Inter text-xs hover:text-white/75 capitalize cursor-pointer"
                  href="/privacy"
                  aria-label="Privacy Policy"
                  title="Privacy Policy"
                  target="_blank"
                >
                  Privacy Policy
                </a>

              </div>
            </div> */}

            <p className="mt-4 text-center text-xs sm:text-sm text-white font-Inter sm:order-first sm:mt-0">
              Copyright © 2024{" "}
              <a
                href="https://crowdfunding-donation.el.r.appspot.com/"
                aria-label="Our website https://crowdfunding-donation.el.r.appspot.com/"
                title="Our website https://crowdfunding-donation.el.r.appspot.com/"
                target="_blank"
                className="cursor-pointer text-white"
              >
                Radha and the Great Rescue
              </a>{" "}
              . All rights reserved Brihat Mridanga Trust.
            </p>
          </div>
        </div>
      </footer>
      {/* <a
        className="quote-btn text-sm p-2 font-Inter xl:px-4 py-2 fixed right-0 hover:no-underline top-1/2 rotate-90 bg-[#0E1340] text-white xl:text-base font-medium rounded-b-md"
        style={{ transformOrigin: "top right", marginTop: "-1.5rem" }}
        href="/contact"
        aria-label=""
        title=""
        target="_blank"
      >
        Get a Free Quote
      </a> */}
    </>
  );
};

export default Footer;
