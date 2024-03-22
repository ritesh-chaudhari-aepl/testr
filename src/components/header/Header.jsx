"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../navbar/Navbar";
import logo from "../../assets/bmt-logo.png";
import IndianFlag from "../../assets/Indianflag-icon.svg";
import Image from "next/image";
import { HiOutlineX } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";
import { nav } from "../.././data/nav2";
import MobileNav from "../navbar/MobileNav";
import { RiH1 } from "react-icons/ri";

const Header = ({ headerBg, position, initialMobileNavState }) => {
  const [mobileNav, setMobileNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (
        mobileNav &&
        !e.target.closest(".modal-container") &&
        e.target.closest(".header")
      ) {
        setMobileNav(true);
      } else {
        setMobileNav(false);
      }
    };
    document.addEventListener("mousedown", handleDocumentClick);

    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, [mobileNav]);

  const closeMobileNav = () => {
    setMobileNav(false);
  };

  return (
    <div
      className={`${scrolled ? " text-white" : `${headerBg}`} text-white p-1 ${
        position === "relative" ? "relative" : "fixed top-0 z-10"
      } w-full`}
    >
      <div className="mx-auto max-w-screen-2xl ">
        <div className="flex items-center justify-between">
          <a title="logo" name="logo" aria-label="logo" href="/">
            <Image
              src={logo}
              alt="logo"
              priority
              className="md:w-32 cursor-pointer w-24"
            />
          </a>
          <div className="flex space-x-4 md:space-x-8">
            <Navbar data={nav} className="flex" />

            <div className=" modal-container">
              <button
                title="menu bar"
                name="menu bar"
                aria-label="menu bar"
                className="lg:hidden"
                onClick={() => setMobileNav(!mobileNav)}
              >
                {mobileNav ? (
                  <HiOutlineX className="lg:text-basse md:text-4xl text-3xl text-primary" />
                ) : (
                  <AiOutlineMenu className="lg:text-basse md:text-4xl text-3xl text-secondary" />
                )}
              </button>
            </div>
          </div>
          <div
            className={`header  ${
              mobileNav ? "left-0" : "-left-full"
            }  fixed top-0 bottom-0 w-[60vw] xl:hidden z-50 transition-all`}
          >
            <MobileNav setMobileNav={setMobileNav} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
