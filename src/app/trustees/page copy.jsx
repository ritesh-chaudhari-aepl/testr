import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../pages/Footer";
import Image from "next/image";
import actor from "../../assets/man1.webp";
import HoverCards from "@/components/cards/HoverCards";
import bigImg from "@/assets/man.webp";
import StartingBannerCard from "@/components/cards/StartingBannerCard";
import "./style.css";
import AboutCardsMob from "@/components/cards/AboutCardsMob";
import ContactContainer from "@/components/crowdfunding/common/ContactContainer";
import ImageSlider from "@/components/gallerySlider/ImageSlider.jsx";
import demo from "@/assets/certificate/demo.webp";
import LegalDocuments from "@/components/documents-certificates/LegalDocuments";
import schools from "@/assets/gallery/Schools.png";
import universities from "@/assets/gallery/universities.png";
import villages from "@/assets/gallery/Villages.png";
import van from "@/assets/gallery/van.png";
import damodar from "@/assets/gallery/damodar-dulal.jpeg";
import laxmidhar from "@/assets/gallery/laxmidhar-behera.png";
import varun from "@/assets/gallery/Varun.jpeg";

export default function Page() {
  return (
    <>
      <Header headerBg="bg-transparent" />
      <section id="" className="flex items-start bg-[#141414]">
        <div className="blogs-bg min-w-full flex flex-col md:mt-14 justify-between relative bg-cover bg-center bg-no-repeat">
          <div className="mx-auto max-w-screen-2xl px-4 py-2 sm:px-6 md:flex flex-col h-auto justify-between lg:px-8">
            <div className="lg:w-1/2 xl:w-2/3  mt-8 py-6 flex flex-col items-start gap-8 text-center sm:text-left">
              {/* by using MainCard Component */}
              <StartingBannerCard
                section="about"
                v1="36"
                v2="40"
                v3="50"
                v4="0.40"
                v5="33"
                v6="35"
                v7="73"
                v8="0.04"
                h2first="Brihat Mridanga"
                h2second="Trust"
                description="
                Trust Members are animal - welfare advocates dedicated to using media to widely broadcast the message of India’s compassion for all living beings. The members are exemplary in their commitment to cow protection and Vedic values."
                link=""
                btnDisplay="hidden"
              />
            </div>
          </div>
        </div>
      </section>
      {/* the trust */}
      <div className="max-w-screen-xl px-8 mx-auto py-12">
        <div>
          <div className="flex flex-col justify-center items-center">
            <h2 className="font-bold text-yellow-dark text-center text-4xl md:text-5xl pb-4 font-WhitneySemibold not-italic capitalize leading-[76.8px]">
              The
              <span className="text-black"> Trust</span>
            </h2>

            <span className="h-[3px] bg-gradient-to-r from-textDark via-brick to-yellow-dark w-16 mb-4" />
          </div>

          <p className="p-2 font-sans text-xl leading-normal">
            The Trust supports and propagates protection of animals, animal
            liberation, animal rights, wildlife protection, animal welfare and
            animal justice. It promotes traditional values expounded in India’s
            ancient wisdom.
            {/* Meet the brilliant minds & talented souls bringing ‘Radha & the
            Great Rescue’ to life! From our stellar cast, including the
            sensational Dnyaneshwari Gadage, to our visionary director, Suresh
            Eriyat, each member of our trustees has embarked on this journey
            with passion & dedication. */}
          </p>
        </div>
        <div className="grid gap-4 pt-6">
          {/* legal documents */}
          <LegalDocuments />
        </div>
      </div>
      {/* school, universities, villages */}
      <div className="max-w-screen-xl px-8 mx-auto py-8 grid gap-2">
        <div className="flex px-2 gap-3 w-full items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="12"
            viewBox="0 0 10 12"
            fill="none"
            className="-mt-7 pt-0"
          >
            <path
              d="M9.63078 7.131C9.57428 7.189 9.36094 7.437 9.1622 7.641C7.99708 8.924 4.95762 11.024 3.36678 11.665C3.12518 11.768 2.51437 11.986 2.18802 12C1.8753 12 1.5772 11.928 1.29274 11.782C0.938139 11.578 0.653678 11.257 0.497808 10.878C0.397467 10.615 0.241598 9.828 0.241598 9.814C0.0857282 8.953 0 7.554 0 6.008C0 4.535 0.0857282 3.193 0.213346 2.319C0.227959 2.305 0.383829 1.327 0.554311 0.992C0.867024 0.38 1.47784 0 2.13151 0H2.18802C2.61374 0.015 3.50901 0.395 3.50901 0.409C5.01413 1.051 7.98344 3.048 9.17681 4.375C9.17681 4.375 9.51291 4.716 9.65904 4.929C9.88699 5.235 10 5.614 10 5.993C10 6.416 9.87238 6.81 9.63078 7.131Z"
              fill="black"
            />
          </svg>
          <h3 className="font-semibold font-WhitneySemibold text-xl">
            How the Brihat Mridanga Trust will come to your schools, colleges,
            campuses, and villages with free screenings and educational Q&A
          </h3>
        </div>
        <p className="p-2 ml-6 font-sans text-xl leading-normal">
          In a first action phase, six vans will carry equipment and each with a
          crew of two on a pre-planned visit to villages, schools, towns, and
          universities. The diver cum video technician will ensure that the
          screening and sound are customized for the venues. The presenter will
          introduce the topic of cow protection and animal welfare, conduct a
          Q&A after the screening, and be available for personal advice and
          counsel. Cow products will be displayed and distributed. A contact
          list will be compiled. Further participation by interested members of
          the public will be encouraged. Each team will have an ongoing
          itinerary which will ensure the most efficient use of fuel and time.
          The number of teams will be increased proportionally to the means made
          available to the Trust by your generosity.
        </p>
        {/* cards */}
        <div className="px-3 mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="grid gap-2 border">
            <Image
              alt="school"
              title="school"
              src={schools}
              className="h-64 w-full object-cover"
            />

            <h3 className="text-lg px-4 font-bold text-gray-900 sm:text-xl">
              Schools
            </h3>

            <p className="px-4 pb-3 max-w-sm lg:text-xl text-gray-700">
              In schools, children can enjoy an adventurous movie that both
              girls and boys will find exciting. What better way to inspire and
              trigger emotional consciousness for cows and other animals
              welfare?
            </p>
          </div>
          <div className="grid gap-2 border">
            <Image
              alt="villages"
              title="villages"
              src={villages}
              className="h-64 w-full object-cover"
            />

            <h3 className="text-lg px-4 font-bold text-gray-900 sm:text-xl">
              Villages
            </h3>

            <p className="px-4 pb-3 max-w-sm lg:text-xl text-gray-700">
              In villages, children and their parents can spend time together at
              a family event, ask questions, explore the issues, and be
              thoroughly &quot;edutained.&quot;
            </p>
            <br />
          </div>
          <div className="grid gap-2 border">
            <Image
              alt="university"
              title="university"
              src={universities}
              className="h-64 w-full object-cover"
            />

            <h3 className="text-lg px-4 font-bold text-gray-900 sm:text-xl">
              Universities
            </h3>

            <p className="px-4 pb-3 max-w-sm lg:text-xl text-gray-700">
              In colleges and universities, after enjoying the international
              cinematic quality of the film, students can raise questions and
              enter into lively debates moderated by the Trust representative.
            </p>
          </div>
        </div>
      </div>
      {/* van parties */}
      <div className="max-w-screen-xl px-8 mx-auto py-8 grid gap-2 grid-cols-1">
        <div>
          <div className="flex flex-col items-center mt-6">
            <div className="flex px-2 pt-2 gap-3 ml-5 w-full items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="12"
                viewBox="0 0 10 12"
                fill="none"
              >
                <path
                  d="M9.63078 7.131C9.57428 7.189 9.36094 7.437 9.1622 7.641C7.99708 8.924 4.95762 11.024 3.36678 11.665C3.12518 11.768 2.51437 11.986 2.18802 12C1.8753 12 1.5772 11.928 1.29274 11.782C0.938139 11.578 0.653678 11.257 0.497808 10.878C0.397467 10.615 0.241598 9.828 0.241598 9.814C0.0857282 8.953 0 7.554 0 6.008C0 4.535 0.0857282 3.193 0.213346 2.319C0.227959 2.305 0.383829 1.327 0.554311 0.992C0.867024 0.38 1.47784 0 2.13151 0H2.18802C2.61374 0.015 3.50901 0.395 3.50901 0.409C5.01413 1.051 7.98344 3.048 9.17681 4.375C9.17681 4.375 9.51291 4.716 9.65904 4.929C9.88699 5.235 10 5.614 10 5.993C10 6.416 9.87238 6.81 9.63078 7.131Z"
                  fill="black"
                />
              </svg>
              <h3 className="font-semibold font-WhitneySemibold capitalize text-lg">
                JOURNEY OF THE VAN PARTIES
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center lg:items-start">
              <div>
                {/* <p className="px-2 font-medium font-sans text-xl leading-normal">
                  CREW VAN
                </p> */}
                <p className="p-2 font-sans text-xl leading-normal">
                  The screening campaign will be organised in phases. In the
                  first phase we will have six van parties which will each
                  travel to various places in the country for one year
                  organising and setting up the screenings of the film. Each van
                  will have two crew members: a driver cum video technician, and
                  a speaker to animate a post screening debate with the
                  audience. A dynamic movement will thus be created to reach out
                  to as many regions and audiences as possible.
                </p>
                <p className="hidden lg:block p-2 font-sans text-xl leading-normal">
                  The funds needed for purchasing equipments, paying salaries to
                  crew members, planning and managing this screening campaign
                  are detailed in the provisional list of expenses available in
                  the document below.
                </p>
              </div>
              <Image
                src={van}
                alt="crew van"
                title="crew van"
                name="crew van"
                aria-label="crew van"
                className="w-full h-64 lg:h-full rounded-lg shadow-md"
              />
            </div>

            <p className="lg:hidden block p-2 font-sans text-xl leading-normal">
              We will need money to purchase equipments, pay salaries to crew
              members looking after the management of this campaign and arrange
              their food and accommodation. An in-depth list of expenses is
              given in the document below.
            </p>
          </div>
        </div>
      </div>
      {/* request for Screening */}
      <div className="max-w-screen-xl px-6 mx-auto py-8 grid gap-2">
        <div className="flex px-2 gap-3 w-full items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="12"
            viewBox="0 0 10 12"
            fill="none"
          >
            <path
              d="M9.63078 7.131C9.57428 7.189 9.36094 7.437 9.1622 7.641C7.99708 8.924 4.95762 11.024 3.36678 11.665C3.12518 11.768 2.51437 11.986 2.18802 12C1.8753 12 1.5772 11.928 1.29274 11.782C0.938139 11.578 0.653678 11.257 0.497808 10.878C0.397467 10.615 0.241598 9.828 0.241598 9.814C0.0857282 8.953 0 7.554 0 6.008C0 4.535 0.0857282 3.193 0.213346 2.319C0.227959 2.305 0.383829 1.327 0.554311 0.992C0.867024 0.38 1.47784 0 2.13151 0H2.18802C2.61374 0.015 3.50901 0.395 3.50901 0.409C5.01413 1.051 7.98344 3.048 9.17681 4.375C9.17681 4.375 9.51291 4.716 9.65904 4.929C9.88699 5.235 10 5.614 10 5.993C10 6.416 9.87238 6.81 9.63078 7.131Z"
              fill="black"
            />
          </svg>
          <h3 className="font-semibold fon t-WhitneySemibold text-xl">
            Request for Screening
          </h3>
        </div>
        <p className="p-2 ml-2 md:ml-6 font-sans text-xl leading-normal">
          Schools, universities, and other educational institutions are
          encouraged to engage with us by submitting screening requests for our
          thought-provoking films. We welcome these requests as they align with
          our mission to foster dialogue and enlightenment through cinematic
          experiences within educational communities. Institutions can initiate
          the process to host screenings at their premises by sending email
          request to{" "}
          <a
            href="mailto:screening_request@brihatmridangatrust.org"
            className="font-bold text-base md:text-xl text-yellow-dark tracking-wider hover:text-blue-800"
          >
            screening_request@brihatmridangatrust.org
          </a>
        </p>
      </div>
      {/* trustees and board members */}
      <div className="max-w-screen-xl px-8 mx-auto py-12">
        <div className="flex flex-col justify-center items-center">
          <h2 className="font-bold text-center text-yellow-dark text-4xl md:text-5xl pb-4 font-WhitneySemibold not-italic capitalize leading-[76.8px]">
            The Trustees <span className="text-black">and Board members </span>
          </h2>

          <span className="h-[3px] bg-gradient-to-r from-textDark via-brick to-yellow-dark w-16 mb-4" />
        </div>
        {/* <p className="p-2 font-sans text-xl leading-normal">
          Meet the brilliant minds & talented souls bringing ‘Radha & the Great
          Rescue’ to life! From our stellar cast, including the sensational
          Dnyaneshwari Gadage, to our visionary director, Suresh Eriyat, each
          member of our trustees has embarked on this journey with passion &
          dedication.
        </p> */}

        <div className="flex flex-col gap-8">
          {/* section - cast */}
          <div className="flex flex-col">
            {/* <h2 className="pt-8 font-bold text-yellow-dark font-WhitneySemibold capitalize text-2xl">
              Cast <span className="text-black">Members</span>
            </h2> */}
            <div className="flex gap-4">
              {/* for large view & desktop view lg, xl view */}
              <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-3">
                <HoverCards
                  h3headline="Vikash Kumar"
                  subHeading="(Trustee)"
                  paragraphs={[
                    "For nearly two decades, Suresh Eriyat has pioneered the craft of animation on Indian screens. After graduating from the National Institute of Design, Ahmedabad in 1997, Suresh established Famous House of Animation, where he created some unforgettable animated ads, shorts, music videos with many firsts.",
                  ]}
                  userImg={bigImg}
                />
                <HoverCards
                  h3headline="Varun Sethi"
                  subHeading="(Trustee)"
                  paragraphs={[
                    "For nearly two decades, Suresh Eriyat has pioneered the craft of animation on Indian screens. After graduating from the National Institute of Design, Ahmedabad in 1997, Suresh established Famous House of Animation, where he created some unforgettable animated ads, shorts, music videos with many firsts.",
                  ]}
                  userImg={varun}
                />
                <HoverCards
                  h3headline="Damodar Dulal Das"
                  subHeading="(Board Member)"
                  paragraphs={[
                    "For nearly two decades, Suresh Eriyat has pioneered the craft of animation on Indian screens. After graduating from the National Institute of Design, Ahmedabad in 1997, Suresh established Famous House of Animation, where he created some unforgettable animated ads, shorts, music videos with many firsts.",
                  ]}
                  userImg={damodar}
                />
              </div>
              {/* for mobile view & tab view xs, sm, md view */}
              <div className="lg:hidden grid grid-cols-1 lg:grid-cols-3 gap-3">
                <AboutCardsMob
                  h3headline="Vikash Kumar"
                  subHeading="(Trustee)"
                  p1="For nearly two decades, Suresh Eriyat has pioneered the
                      craft of animation on Indian screens. After graduating
                      from the National Institute of Design, Ahmedabad in 1997,
                      Suresh established Famous House of Animation, where he
                      created some unforgettable animated ads, shorts, music
                      videos with many firsts."
                  userImg={actor}
                />
                <AboutCardsMob
                  h3headline="Varun Sethi"
                  subHeading="(Trustee)"
                  p1="For nearly two decades, Suresh Eriyat has pioneered the
                      craft of animation on Indian screens. After graduating
                      from the National Institute of Design, Ahmedabad in 1997,
                      Suresh established Famous House of Animation, where he
                      created some unforgettable animated ads, shorts, music
                      videos with many firsts."
                  userImg={varun}
                />
                <AboutCardsMob
                  h3headline="Damodar Dulal Das"
                  subHeading="(Board Member)"
                  p1="For nearly two decades, Suresh Eriyat has pioneered the
                      craft of animation on Indian screens. After graduating
                      from the National Institute of Design, Ahmedabad in 1997,
                      Suresh established Famous House of Animation, where he
                      created some unforgettable animated ads, shorts, music
                      videos with many firsts."
                  userImg={damodar}
                />
              </div>
            </div>
          </div>

          <hr />

          {/* section - crew */}
          <div className="flex flex-col">
            {/* <h2 className="pt-8 font-bold text-yellow-dark font-WhitneySemibold capitalize text-2xl">
              Cast <span className="text-black">Members</span>
            </h2> */}
            <div className="flex gap-4">
              {/* for large view & desktop view lg, xl view */}
              <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-3">
                <HoverCards
                  h3headline="Laxmidhar Behera"
                  subHeading="(Board Member)"
                  paragraphs={[
                    "For nearly two decades, Suresh Eriyat has pioneered the craft of animation on Indian screens. After graduating from the National Institute of Design, Ahmedabad in 1997, Suresh established Famous House of Animation, where he created some unforgettable animated ads, shorts, music videos with many firsts.",
                  ]}
                  userImg={laxmidhar}
                />
                {/* <HoverCards
                  h3headline="Varun Sethi"
                  subHeading="(Trustee)"
                  paragraphs={[

                  ]}
                  "For nearly two decades, Suresh Eriyat has pioneered the
                      craft of animation on Indian screens. After graduating
                      from the National Institute of Design, Ahmedabad in 1997,
                      Suresh established Famous House of Animation, where he
                      created some unforgettable animated ads, shorts, music
                      videos with many firsts."
                  userImg={bigImg}
                /> */}
                <HoverCards
                  h3headline="Krishna Naam"
                  subHeading="(Board Member)"
                  paragraphs={[
                    "For nearly two decades, Suresh Eriyat has pioneered the craft of animation on Indian screens. After graduating from the National Institute of Design, Ahmedabad in 1997, Suresh established Famous House of Animation, where he created some unforgettable animated ads, shorts, music videos with many firsts.",
                  ]}
                  userImg={bigImg}
                />
              </div>
              {/* for mobile view & tab view xs, sm, md view */}
              <div className="lg:hidden grid grid-cols-1 lg:grid-cols-3 gap-3">
                <AboutCardsMob
                  h3headline="Laxmidhar Behera"
                  subHeading="(Board Member)"
                  p1="For nearly two decades, Suresh Eriyat has pioneered the
                      craft of animation on Indian screens. After graduating
                      from the National Institute of Design, Ahmedabad in 1997,
                      Suresh established Famous House of Animation, where he
                      created some unforgettable animated ads, shorts, music
                      videos with many firsts."
                  userImg={laxmidhar}
                />
                {/* <AboutCardsMob
                  h3headline="Varun Sethi"
                  subHeading="(Trustee)"
                  p1="For nearly two decades, Suresh Eriyat has pioneered the
                      craft of animation on Indian screens. After graduating
                      from the National Institute of Design, Ahmedabad in 1997,
                      Suresh established Famous House of Animation, where he
                      created some unforgettable animated ads, shorts, music
                      videos with many firsts."
                  userImg={actor}
                /> */}
                <AboutCardsMob
                  h3headline="Krishna Naam"
                  subHeading="(Board Member)"
                  p1="For nearly two decades, Suresh Eriyat has pioneered the
                      craft of animation on Indian screens. After graduating
                      from the National Institute of Design, Ahmedabad in 1997,
                      Suresh established Famous House of Animation, where he
                      created some unforgettable animated ads, shorts, music
                      videos with many firsts."
                  userImg={actor}
                />
              </div>
            </div>
          </div>

          <hr />
          {/* on-hold */}
          {/* section - gallery */}
          {/* <div className="flex gap-2 ">
            <div className="gallery w-full flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <h2 className="pt-6 font-bold text-yellow-dark font-WhitneySemibold capitalize text-2xl">
                  Behind <span className="text-black">the scenes</span>
                </h2>
                <span className="h-[3px] bg-gradient-to-r from-textDark via-brick to-yellow-dark w-16" />
              </div>
              <div className="gallery-wrap mt-6 flex w-full h-[70vh]">
                <div className="item item-1"></div>
                <div className="item item-2"></div>
                <div className="item item-3"></div>
                <div className="item item-4"></div>
                <div className="item item-5"></div>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* <ContactContainer /> */}
      {/* <ImageSlider t1="Location" t2="View" /> */}
      <Footer />
    </>
  );
}
