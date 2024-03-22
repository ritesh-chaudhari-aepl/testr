import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../pages/Footer";
import StartingBannerCard from "@/components/cards/StartingBannerCard";
import "./style.css";
import Image from "next/image";
import filmImage from "@/assets/hero-bg.svg";
import bigImg from "@/assets/trial.png";
import user from "@/assets/man1.webp";
import HoverCards from "@/components/cards/HoverCards";
import AboutCardsMob from "@/components/cards/AboutCardsMob";
import googleMata from "@/assets/character-humans/google-mata.png";
import motorBaba from "@/assets/character-humans/motor-baba.png";
import bhompooSwami from "@/assets/character-humans/bhompoo-swami.png";
import anupam from "@/assets/character-humans/Anupam-Kher-Biography.jpg";
import jairaj from "@/assets/character-humans/Jairaj-copy.png";
import jairajMob from "@/assets/character-humans/Jairaj-mob.jpeg";
import ImageSlider from "@/components/gallerySlider/ImageSlider";
import radha from "@/assets/character-humans/Radha1.jpg";
import radha1 from "@/assets/character-humans/radha.png";
import gaucho from "@/assets/character-humans/gaucho.jpeg";
import gaucho1 from "@/assets/character-humans/gaucho1.jpeg";
import kher from "@/assets/character-humans/kher.jpg";
// import aristadev from "@/assets/character-humans/Aristadev.png";
import aristadev from "@/assets/character-humans/aristadeva.png";
import ayaan from "@/assets/character-humans/ayaan.png";
import jishnu from "@/assets/character-humans/jishnu.png";
// import david from "@/assets/character-humans/David-Shapiro.jpg";
import david from "@/assets/character-humans/David-Shapiro1024.png";
import suresh from "@/assets/character-humans/Suresh-Eriyat.jpg";
import pierre from "@/assets/character-humans/Pierre-Assouline-LIGHT.jpg";
import NameImageCard from "@/components/cards/NameImageCard";

export default function Page() {
  return (
    <>
      {/* banner area */}
      <section
        id=""
        loading="eager"
        className="flex items-start bg-[#5b381f] mt-14"
      >
        <div className="about-bg min-w-full flex flex-col justify-between relative bg-cover bg-center bg-no-repeat">
          <Header headerBg="bg-black" className="" />
          <div className="mx-auto max-w-screen-2xl mt-[14%] md:mt-[8%] lg:mb-[4%] px-4 md:py-2 sm:px-6 flex flex-col h-auto justify-between lg:px-8">
            <div className="md:w-2/3 lg:w-1/2 pt-8 md:py-6 flex flex-col items-start gap-8 text-center sm:text-left">
              {/* by using StartingBannerCard Component */}
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
                h2first="About "
                h2second="the film"
                description="When Radha’s affectionate dwarf bull and cow are stolen by cow lifters, twelve-year-old Radha runs away from home on an audacious adventure to rescue them. Along with her only human friend and a suspended cop looking for redemption, they discover and defeat a large-scale cattle-rustling ring."
                btnDisplay="hidden"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-screen-xl px-8 mx-auto py-8 mb-4">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-yellow-dark text-5xl pb-4 font-WhitneySemibold not-italic capitalize leading-[76.8px]">
            About <span className="text-black">The Film</span>
          </h1>
          <span className="h-[3px] bg-gradient-to-r from-textDark via-brick to-yellow-dark w-16 mb-4" />
        </div>
        {/* 2nd section - story overview*/}
        <div className="hidden xl:block border-b mb-4 pb-6">
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-yellow-dark font-WhitneySemibold capitalize text-2xl">
              The <span className="text-black"> Story</span>
            </h2>
            {/* <span className="h-[3px] bg-gradient-to-r from-textDark via-brick to-yellow-dark w-16" /> */}
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div>
                <p className="p-2 font-sans text-xl leading-normal">
                  RADHA lives as a cowherd girl in her parents’ modest ahimsa
                  goshala - a farm where cows are protected from slaughter. She
                  is a “cow whisperer” who understands the moo’s and grunts of
                  “cow language.” Radha enjoys being with her loving animals
                  more than with her sophisticated, condescending schoolmates.
                </p>
                <p className="p-2 font-sans text-xl leading-normal">
                  When her dwarf bull, the intrepid ARISTADEVA, is stolen by
                  merciless cow-lifters, Radha sets out on a perilous journey to
                  chase the dacoits herself.
                </p>
                <p className="p-2 font-sans text-xl leading-normal">
                  She is joined by her only human friend, twelve-year-old AYAAN,
                  a Feluda fan (the detective character in Satyajit Ray’s
                  novels), and JISHNU, a child-like suspended cop looking for
                  redemption.
                </p>
              </div>
              <Image
                src={filmImage}
                title="banner image"
                name="banner image"
                aria-label="banner image"
                alt="banner image"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>

          <p className="p-2 font-sans text-xl leading-normal">
            The wannabe sleuths commence a road trip on a needle-in-the haystack
            search. Chasing after the thieves, they encounter GOOGLE MATA, a
            quack fortune teller, MOTOR BABA, a mystic car mechanic, BHOMPOO
            SWAMI, a magic trumpet player, a bohemian troupe of CHAU DANCERS,
            among other colourful characters.
          </p>
          <p className="p-2 font-sans text-xl leading-normal">
            Bumbling in their search for the animals, they cause a stampede in a
            cattle market, escape a police manhunt to bring them home, and
            precipitate a Border Security Force alert.
          </p>
          <p className="p-2 font-sans text-xl leading-normal">
            Ultimately, Radha alone comes face-to-face with the evil GAUCHO who
            runs an entire syndicate of cattle rustlers...
          </p>
        </div>
        {/* 2nd section - story overview*/}
        <div className="xl:hidden border-b mb-4 pb-6">
          <h2 className="font-bold font-WhitneySemibold capitalize text-2xl">
            The Story
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              <p className="p-2 font-sans text-xl leading-normal">
                RADHA lives as a cowherd girl in her parents’ modest ahimsa
                goshala - a farm where cows are protected from slaughter. She is
                a “cow whisperer” who understands the moo’s and grunts of “cow
                language.” Radha enjoys being with her loving animals more than
                with her sophisticated, condescending schoolmates.
              </p>
              <p className="p-2 font-sans text-xl leading-normal">
                When her dwarf bull, the intrepid ARISTADEVA, is stolen by
                merciless cow-lifters, Radha sets out on a perilous journey to
                chase the dacoits herself.
              </p>
              <p className="p-2 hidden lg:flex font-sans text-xl">
                She is joined by her only human friend, twelve-year-old AYAAN, a
                Feluda fan (the detective character in Satyajit Ray’s novels),
                and JISHNU, a child-like suspended cop looking for redemption.
              </p>
            </div>
            <Image
              src={filmImage}
              title="banner image"
              name="banner image"
              aria-label="banner image"
              alt="banner image"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <p className="p-2 lg:hidden font-sans text-xl">
            She is joined by her only human friend, twelve-year-old AYAAN, a
            Feluda fan (the detective character in Satyajit Ray’s novels), and
            JISHNU, a child-like suspended cop looking for redemption.
          </p>
          <p className="p-2 font-sans text-xl leading-normal">
            The wannabe sleuths commence a road trip on a needle-in-the-
            haystack search. Chasing after the thieves, they encounter GOOGLE
            MATA, a quack fortune teller, MOTOR BABA, a mystic car mechanic,
            BHOMPOO SWAMI, a magic trumpet player, a bohemian troupe of CHAU
            DANCERS, among other colourful characters.
          </p>
          <p className="p-2 font-sans text-xl leading-normal">
            Bumbling in their search for the animals, they cause a stampede in a
            cattle market, escape a police manhunt to bring them home, and
            precipitate a Border Security Force alert.
          </p>
          <p className="p-2 font-sans text-xl leading-normal">
            Ultimately, Radha alone comes face-to-face with the evil GAUCHO who
            runs an entire syndicate of cattle rustlers.
          </p>
        </div>

        {/* 3rd section - character description*/}
        <div className="flex flex-col border-b mb-4 pb-6 lg:flex-row gap-2 ">
          <div className="characters grid gap-4">
            <div className="flex flex-col gap-2">
              <h2 className="pt-6 font-bold text-yellow-dark font-WhitneySemibold capitalize text-2xl">
                The <span className="text-black"> Characters</span>
              </h2>
              {/* <span className="h-[3px] bg-gradient-to-r from-textDark via-brick to-yellow-dark w-16" /> */}
            </div>
            {/* for large view & desktop view lg, xl view */}

            {/* characters */}
            <div className="hidden lg:grid gap-6 grid-cols-1 md:grid:cols-2 lg:grid-cols-3">
              {/* 1 */}
              <HoverCards
                h3headline="Radha"
                subHeading="Saregama Lil’ Champ sensation Dnyaneshwari Gadage is Radha"
                paragraphs={[
                  "Radha is a joyful, feisty twelve year old village girl who loves animals and especially her pet dwarf bull. In her world, animals return what you give and people are too complicated. Being a “cow whisperer”, she sings to cows and confides in her bull. She often prefers sleeping in the barn. Socially awkward at school, she has only one human friend. Sheltered by life in the company of her family and animals, Radha is innocent to the harsh realities of the world. Her impulsive nature causes her to speak unvarnished truths seen as unsuitable in conventional social interaction. The quest to find her bull abruptly exposes her to the larger world of adult realities.",
                ]}
                userImg={radha}
                heightType="auto"
              />
              {/* 2 */}
              <HoverCards
                h3headline="Aristadeva"
                paragraphs={[
                  "Aristadeva is an adorable dwarf bull. He was not meant to be that way, but he just never grew up, much to the delight of Radha and to the dismay of her father. What good is a dwarf bull? He can’t ploy the fields. He can’t be used as a stud. He compensates by pretending that he can do everything that big bulls do. If there is any cow in trouble, Aristadeva is the first one to try and help. His size means he can go places other bulls can’t fit. He is the object of care and affection by Radha, and her perfect listener. Aristadeva may not be big, but he has a big heart.",
                ]}
                userImg={aristadev}
                heightType="full"
              />
              {/* 3 */}
              <HoverCards
                h3headline="Ayaan"
                subHeading="Know soon who will play Ayaan Ongoing auditions are promising!"
                paragraphs={[
                  "Ayaan is an imaginative eleven year old boy, Radha’s schoolmate and best friend. Unable to meet his father’s musical expectations on the trumpet, he appears as a failure to himself. Feelings of inadequacy follow him like a shadow. Still a child, sometimes pouting, sometimes competitive, Ayaan finds his only real validation of worth from Radha. He can be amused by a race between two ants and fascinated by Satyajit Ray’s beloved Sherlock Holmes-like character, Feluda. His emotional distance from his parents makes running away an attractive proposition.",
                ]}
                userImg={ayaan}
                heightType="full"
              />
              {/* 4 */}
              <HoverCards
                h3headline="Jishnu"
                subHeading="Know soon who will play Jishnu Ongoing auditions are promising!"
                paragraphs={[
                  "A suspended police officier, he is a man-child whose demeanor covers his innate insecurities. Having fumbled the job of transporting criminals to justice, his attempts to be taken seriously by his superiors wax fatal to his lawman ambitions. He is also seen as inept by his estranged wife. No matter how hard he tries, he is a screw-up. Only Radha and Ayaan place faith in his abilities to fulfill his duties as “COP”.",
                ]}
                userImg={jishnu}
                heightType="full"
              />
              {/* 5 */}
              <HoverCards
                h3headline="Gaucho"
                subHeading="Anupam Kher is Gaucho"
                paragraphs={[
                  "Smug and prideful, Gaucho is the epitome of evil. Proud of his vast network of cow-lifters, he sees the animals, like people, as expendable products. Maximizing profit and controlling others are his only satisfactions. The feisty Radha catches the fascination of this childless criminal. He lets his guard down a tad more than is characteristic and reaps the ruinous consequences",
                ]}
                userImg={gaucho1}
                heightType="full"
              />
            </div>
            {/* supporting roles */}
            <div className="hidden lg:grid grid-cols-1">
              <div>
                <div className="flex flex-col items-center mt-6">
                  <div className="flex pt-2 gap-3 ml-5 w-full items-center">
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
                    <div className="flex flex-col gap-2">
                      <h2 className="font-bold text-yellow-dark font-WhitneySemibold capitalize text-2xl">
                        Supporting{" "}
                        <span className="text-black"> Characters</span>
                      </h2>
                      {/* <span className="h-[3px] bg-gradient-to-r from-textDark via-brick to-yellow-dark w-16" /> */}
                    </div>
                  </div>
                  {/* <p className="p-2 w-full font-sans flex justify-start font-semibold text-xl">
                    The supporting characters of “Radha and the Great Rescue”
                  </p> */}
                  {/* <a className="relative block rounded-md mt-6 w-3/4 bg-white group h-[400px] overflow-y-auto scrollbar"> */}
                  <div className="relative grid grid-cols-1 w-full cursor-pointer rounded-md bg-white">
                    <div className="relative overflow-y-auto scrollbar">
                      <div className="mt-4 md:mt-0">
                        <div className="">
                          <div className="text-justify">
                            <p className="p-2 font-sans text-xl leading-normal">
                              In “Radha and the Great Rescue”, Radha’s journey
                              of adventure and encounters is populated by <br />{" "}
                              a bunch of extravagant humorous characters.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 px-4 py-2 justify-center md:grid-cols-2 gap-4 lg:grid-cols-3">
                      <NameImageCard
                        imgSrc={googleMata}
                        // className="w-auto h-60 rounded-lg shadow-md"
                        // alt="Google Mata"
                        // aria-label="Google Mata"
                        title="Google Mata"
                        name="Google Mata"
                      />
                      <NameImageCard
                        imgSrc={motorBaba}
                        // className="w-auto h-60 rounded-lg shadow-md"
                        // alt="Motor Baba"
                        // aria-label="Motor Baba"
                        title="Motor Baba"
                        name="Motor Baba"
                      />
                      <NameImageCard
                        imgSrc={bhompooSwami}
                        // className="w-auto h-60 rounded-lg shadow-md"
                        // alt="Bhompoo Swami"
                        // aria-label="Bhompoo Swami"
                        title="Bhompoo Swami"
                        name="Bhompoo Swami"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Dnyaneshwari ( Main Lead ) */}
            <div className="hidden lg:grid grid-cols-1">
              <div className="grid grid-cols-1 gap-8 w-full">
                <div className="flex flex-col items-center mt-6">
                  <div className="flex px-2 pt-2 gap-3 w-full items-center">
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
                    <div className="flex flex-col gap-2">
                      <h2 className="font-bold text-yellow-dark font-WhitneySemibold text-2xl">
                        Dnyaneshwari Gadage{" "}
                        <span className="text-black">
                          {" "}
                          - as “Radha” ( Main Lead )
                        </span>
                      </h2>
                      {/* <span className="h-[3px] bg-gradient-to-r from-textDark via-brick to-yellow-dark w-16" /> */}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:lg:grid lg:flex gap-2">
                    <div>
                      <p className="p-2 font-sans text-xl leading-normal font-semibold">
                        Saregama Lil’ Champ sensation Dnyaneshwari Gadage is
                        Radha
                      </p>
                      <p className="p-2 font-sans text-xl leading-normal">
                        Dnyaneshwari hails from Thane, Maharashtra. She was born
                        in a loving lower-middle class family with limited
                        resources. Amazingly, her music guru is her own father,
                        who has been sustaining his talented family as an auto
                        rikshaw driver. Celebrities such as Hema Malini, Ranveer
                        Singh, Jacky Shroff, and others are seeing in her the
                        next Lata Mangeshkar.
                      </p>
                      <p className="p-2 font-sans text-xl leading-normal">
                        The producers have seen in her not only a Radha who will
                        wonderfully sing to her cows, but also a sensitive
                        actress who will move the audiences when expressing her
                        care and tenderness to her animal friends.
                      </p>
                      <p className="p-2 hidden xl:flex font-sans text-xl">
                        Radha is a joyful, feisty twelve year old village girl
                        who loves animals and especially her pet dwarf bull. In
                        her world, animals return what you give and people are
                        too complicated. Being a “cow whisperer”, she sings to
                        cows and confides in her bull. She often prefers
                        sleeping in the barn. Socially awkward at school, she
                        has only one human friend.
                      </p>
                      <p className="p-2 hidden xl:flex font-sans text-xl">
                        Sheltered by life in the company of her family and
                        animals, Radha is innocent to the harsh realities of the
                        world. Her impulsive nature causes her to speak
                        unvarnished truths seen as unsuitable in conventional
                        social interaction. The quest to find her bull abruptly
                        exposes her to the larger world of adult realities.
                      </p>
                    </div>
                    <div className="flex w-full items-center justify-center">
                      <Image
                        src={radha}
                        alt="Dnyaneshwari"
                        height={1440}
                        width={1440}
                        title="Dnyaneshwari"
                        name="Dnyaneshwari"
                        aria-label="Dnyaneshwari"
                        className="w-200px lg:w-48 xl:w-80 h-auto rounded-lg shadow-md"
                      />
                    </div>
                  </div>
                  <p className="p-2 xl:hidden font-sans text-xl">
                    Radha is a joyful, feisty twelve year old village girl who
                    loves animals and especially her pet dwarf bull. In her
                    world, animals return what you give and people are too
                    complicated. Being a “cow whisperer”, she sings to cows and
                    confides in her bull. She often prefers sleeping in the
                    barn. Socially awkward at school, she has only one human
                    friend.
                  </p>
                  <p className="p-2 xl:hidden font-sans text-xl">
                    Sheltered by life in the company of her family and animals,
                    Radha is innocent to the harsh realities of the world. Her
                    impulsive nature causes her to speak unvarnished truths seen
                    as unsuitable in conventional social interaction. The quest
                    to find her bull abruptly exposes her to the larger world of
                    adult realities.
                  </p>
                </div>
                <p className="p-2 font-WhitneySemibold text-2xl leading-normal font-semibold">
                  Watch Amazing Dnyaneshwari !
                </p>

                <div className="grid grid-cols-2 w-full gap-4 justify-center items-center">
                  {/* <iframe
                    // width="560"
                    // height="315"
                    width={1440}
                    height={720}
                    src="https://www.youtube.com/embed/Lxa9_6jNR4w?si=eAs-78FHkHiAWKLqandamp;start=3"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                    className="w-full lg:h-72 xl:h-80 border-2 border-yellow-dark p-2 rounded-md"
                  ></iframe> */}
                  <iframe
                    // width="560"
                    // height="315"
                    width={1440}
                    height={720}
                    src="https://www.youtube.com/embed/HkOO49iytzk?si=BFZixG2-F03ZNl5a"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                    className="w-full lg:h-72 xl:h-80 border-2 border-yellow-dark p-2 rounded-md"
                  ></iframe>
                </div>
              </div>
            </div>
            {/* Actor Anupam Kher */}
            <div className="hidden lg:grid grid-cols-1">
              <div>
                <div className="flex flex-col items-center mt-6">
                  <div className="flex px-2 pt-2 gap-3 w-full items-center">
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
                    <div className="flex flex-col gap-2">
                      <h2 className="font-bold capitalize text-yellow-dark font-WhitneySemibold text-2xl">
                        Anupam <span className="text-black"> Kher</span>
                      </h2>
                      {/* <span className="h-[3px] bg-gradient-to-r from-textDark via-brick to-yellow-dark w-16" /> */}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div>
                      <p className="p-2 font-sans text-xl leading-normal font-semibold">
                        Anupam Kher is Gaucho
                      </p>
                      <p className="p-2 font-sans text-xl leading-normal">
                        Award winning international actor Anupam Kher is best
                        known for his prolific career in Indian cinema. He has
                        appeared internationally in over 500 films and 100
                        plays, over a span of 35 years, with blockbuster hits
                        including Saaransh​, ​Khosla Ka Ghosla​, ​A Wednesday,
                        ​Special 26,​ ​Maine Gandhi Ko Nahin Mara​ and The
                        Accidental Prime Minister​ to name a few.
                      </p>
                      <p className="p-2 font-sans text-xl leading-normal">
                        Having worked with acclaimed directors such as Ang Lee,
                        David O. Russell, Woody Allen, Gurinder Chaddha and the
                        Wachowskis, some of his Hollywood films include ​Silver
                        Linings Playbook​, ​Hotel Mumbai​ and ​The Big Sick.
                      </p>
                    </div>
                    <Image
                      src={anupam}
                      alt="Anupam Kher Actor"
                      title="Anupam Kher Actor"
                      name="Anupam Kher Actor"
                      aria-label="Anupam Kher Actor"
                      className="w-full h-auto rounded-lg shadow-md"
                      width={1440}
                      height={740}
                    />
                  </div>

                  <p className="p-2 font-sans text-xl leading-normal">
                    Anupam Kher, a member of the Academy of Motion Pictures and
                    Arts, and former Chairman of National School of Drama, and
                    the Film and Television Institute of India (FTII), is a
                    recipient of the IIFA Award for ​Outstanding Achievement in
                    Indian Cinema. He was the recipient of a record breaking
                    eight consecutive Filmfare Awards. In 2004, Kher was
                    bestowed with the Padma Shri, followed by the Padma Bhushan
                    Award in 2016, by the Indian government.
                  </p>
                  <p className="p-2 font-sans text-xl leading-normal">
                    He was awarded the Dalai Lama Award for his work with
                    underprivileged children through the Anupam Kher Foundation,
                    founded in 2008, and was also appointed as a UN Ambassador
                    for the HeForShe campaign.
                  </p>
                </div>
              </div>
            </div>

            {/* for mobile view and tab view xs, sm, md view */}
            {/* characters */}
            <div className="lg:hidden grid grid-cols-1 gap-2">
              {/* 1 */}
              <AboutCardsMob
                h3headline="Radha"
                subHeading="Saregama Lil’ Champ sensation Dnyaneshwari Gadage is Radha"
                p1="Radha is a joyful, feisty twelve year old village girl who loves animals and especially her pet dwarf bull. In her world, animals return what you give and people are too complicated. Being a “cow whisperer”, she sings to cows and confides in her bull. She often prefers sleeping in the barn. Socially awkward at school, she has only one human friend. Sheltered by life in the company of her family and animals, Radha is innocent to the harsh realities of the world. Her impulsive nature causes her to speak unvarnished truths seen as unsuitable in conventional social interaction. The quest to find her bull abruptly exposes her to the larger world of adult realities."
                userImg={radha1}
                objectType="cover"
              />
              {/* 2 */}
              <AboutCardsMob
                h3headline="Aristadev"
                p1="Aristadeva is an adorable dwarf bull. He was not meant to be that way, but he just never grew up, much to the delight of Radha and to the dismay of her father. What good is a dwarf bull? He can’t ploy the fields. He can’t be used as a stud. He compensates by pretending that he can do everything that big bulls do. If there is any cow in trouble, Aristadeva is the first one to try and help. His size means he can go places other bulls can’t fit. He is the object of care and affection by Radha, and her perfect listener. Aristadeva may not be big, but he has a big heart"
                userImg={aristadev}
                objectType="contain"
              />
              {/* 3 */}
              <AboutCardsMob
                h3headline="Ayaan"
                subHeading="Know soon who will play Ayaan Ongoing auditions are promising!"
                p1="Ayaan is an imaginative eleven year old boy, Radha’s schoolmate and best friend. Unable to meet his father’s musical expectations on the trumpet, he appears as a failure to himself. Feelings of inadequacy follow him like a shadow. Still a child, sometimes pouting, sometimes competitive, Ayaan finds his only real validation of worth from Radha. He can be amused by a race between two ants and fascinated by Satyajit Ray’s beloved Sherlock Holmes-like character, Feluda. His emotional distance from his parents makes running away an attractive proposition."
                userImg={ayaan}
                objectType="contain"
              />
              {/* 4 */}
              <AboutCardsMob
                h3headline="Jishnu"
                subHeading="Know soon who will play Jishnu Ongoing auditions are promising!"
                p1="A suspended police officier, he is a man-child whose demeanor covers his innate insecurities. Having fumbled the job of transporting criminals to justice, his attempts to be taken seriously by his superiors wax fatal to his lawman ambitions. He is also seen as inept by his estranged wife. No matter how hard he tries, he is a screw-up. Only Radha and Ayaan place faith in his abilities to fulfill his duties as “COP”."
                userImg={jishnu}
                objectType="contain"
              />
              {/* 5 */}
              <AboutCardsMob
                h3headline="Gaucho"
                p1="Smug and prideful, Gaucho is the epitome of evil. Proud of his vast network of cow-lifters, he sees the animals, like people, as expendable products. Maximizing profit and controlling others are his only satisfactions. The feisty Radha catches the fascination of this childless criminal. He lets his guard down a tad more than is characteristic and reaps the ruinous consequences"
                userImg={gaucho1}
                objectType="contain"
              />
            </div>
            {/* supporting roles */}
            <div className="border-r lg:hidden grid grid-cols-1">
              <div>
                <div className="flex flex-col items-center mt-6">
                  <div className="flex px-2 pt-2 gap-3 ml-0 w-full items-center">
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
                    {/* <h3 className="font-medium font-WhitneySemibold capitalize text-lg">
                      Supporting Characters
                    </h3> */}
                    <div className="flex flex-col gap-2">
                      <h2 className="font-bold text-yellow-dark font-WhitneySemibold capitalize text-2xl">
                        Supporting{" "}
                        <span className="text-black"> Characters</span>
                      </h2>
                      {/* <span className="h-[3px] bg-gradient-to-r from-textDark via-brick to-yellow-dark w-16" /> */}
                    </div>
                  </div>
                  {/* <p className="p-2 w-full font-sans flex justify-start font-semibold text-lg">
                    The supporting characters of “Radha and the Great Rescue”
                  </p> */}
                  {/* <a className="relative block rounded-md mt-6 w-3/4 bg-white group h-[400px] overflow-y-auto scrollbar"> */}
                  <div className="relative cursor-pointer grid grid-cols-1 rounded-md bg-white">
                    <div className="relative overflow-y-auto scrollbar">
                      <div className="mt-2 md:mt-0">
                        <div className="">
                          <div className="p-2 text-justify">
                            <p className="p-2 font-sans text-xl leading-normal">
                              In “Radha and the Great Rescue”, Radha’s journey
                              of adventure and encounters is populated by a
                              bunch of extravagant humorous characters.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid justify-center px-4 py-2 grid-cols-1 md:grid-cols-3 gap-4 lg:grid-cols-3">
                      <NameImageCard
                        imgSrc={googleMata}
                        // className="w-auto h-60 rounded-lg shadow-md"
                        // alt="Google Mata"
                        // aria-label="Google Mata"
                        title="Google Mata"
                        name="Google Mata"
                      />
                      <NameImageCard
                        imgSrc={motorBaba}
                        // className="w-auto h-60 rounded-lg shadow-md"
                        // alt="Motor Baba"
                        // aria-label="Motor Baba"
                        title="Motor Baba"
                        name="Motor Baba"
                      />
                      <NameImageCard
                        imgSrc={bhompooSwami}
                        // className="w-auto h-60 rounded-lg shadow-md"
                        // alt="Bhompoo Swami"
                        // aria-label="Bhompoo Swami"
                        title="Bhompoo Swami"
                        name="Bhompoo Swami"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Dnyaneshwari ( Main Lead ) */}
            <div className="lg:hidden grid grid-cols-1 gap-4 mt-4">
              <div>
                <div className="flex flex-col items-center mt-6">
                  <div className="flex px-2 pt-2 gap-3 w-full items-center">
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
                    <div className="flex flex-col gap-2">
                      <h2 className="font-bold text-yellow-dark font-WhitneySemibold text-2xl">
                        Dnyaneshwari Gadage{" "}
                        <span className="text-black">
                          {" "}
                          - as “Radha” ( Main Lead )
                        </span>
                      </h2>
                      {/* <span className="h-[3px] bg-gradient-to-r from-textDark via-brick to-yellow-dark w-16" /> */}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 ">
                    <div className="grid grid-cols-1 items-center md:grid-cols-2">
                      <div>
                        {" "}
                        <p className="p-2 font-sans text-lg leading-normal font-medium">
                          Saregama Lil’ Champ sensation Dnyaneshwari Gadage is
                          Radha
                        </p>
                        <p className="p-2 font-sans text-xl leading-normal">
                          Dnyaneshwari hails from Thane, Maharashtra. She was
                          born in a loving lower-middle class family with
                          limited resources. Amazingly, her music guru is her
                          own father, who has been sustaining his talented
                          family as an auto rikshaw driver. Celebrities such as
                          Hema Malini, Ranveer Singh, Jacky Shroff, and others
                          are seeing in her the next Lata Mangeshkar.
                        </p>
                        <p className="p-2 font-sans text-xl leading-normal">
                          The producers have seen in her not only a Radha who
                          will wonderfully sing to her cows, but also a
                          sensitive actress who will move the audiences when
                          expressing her care and tenderness to her animal
                          friends.
                        </p>
                      </div>
                      <div className="flex w-full justify-center">
                        <Image
                          src={radha}
                          alt="Dnyaneshwari"
                          title="Dnyaneshwari"
                          name="Dnyaneshwari"
                          aria-label="Dnyaneshwari"
                          className="w-64 h-auto rounded-lg shadow-md"
                        />
                      </div>
                    </div>
                    <p className="p-2 font-sans text-xl leading-normal">
                      Radha is a joyful, feisty twelve year old village girl who
                      loves animals and especially her pet dwarf bull. In her
                      world, animals return what you give and people are too
                      complicated. Being a “cow whisperer”, she sings to cows
                      and confides in her bull. She often prefers sleeping in
                      the barn. Socially awkward at school, she has only one
                      human friend.
                    </p>
                    <p className="p-2 font-sans text-xl leading-normal">
                      Sheltered by life in the company of her family and
                      animals, Radha is innocent to the harsh realities of the
                      world. Her impulsive nature causes her to speak
                      unvarnished truths seen as unsuitable in conventional
                      social interaction. The quest to find her bull abruptly
                      exposes her to the larger world of adult realities.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 w-full gap-4 justify-center items-center">
                {/* <iframe
                  // width="560"
                  // height="315"
                  width={1440}
                  height={720}
                  src="https://www.youtube.com/embed/Lxa9_6jNR4w?si=eAs-78FHkHiAWKLq&amp;start=3"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                  className="w-full h-auto border-2 border-yellow-dark p-2 rounded-md"
                ></iframe> */}
                <iframe
                  // width="560"
                  // height="315"
                  width={1440}
                  height={720}
                  src="https://www.youtube.com/embed/HkOO49iytzk?si=BFZixG2-F03ZNl5a"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                  className="w-full h-auto border-2 border-yellow-dark p-2 rounded-md"
                ></iframe>
              </div>
            </div>
            {/* Actor Anupam Kher */}
            <div className="lg:hidden grid grid-cols-1">
              <div>
                <div className="flex flex-col items-center mt-6">
                  <div className="flex px-2 pt-2 gap-3 w-full items-center">
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
                    <div className="flex flex-col gap-2">
                      <h2 className="font-bold capitalize text-yellow-dark font-WhitneySemibold text-2xl">
                        Anupam <span className="text-black"> Kher</span>
                      </h2>
                      {/* <span className="h-[3px] bg-gradient-to-r from-textDark via-brick to-yellow-dark w-16" /> */}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div>
                      <p className="p-2 font-sans text-xl leading-normal font-semibold">
                        Anupam Kher is Gaucho
                      </p>
                      <p className="p-2 font-sans text-xl leading-normal">
                        Smug and prideful, he is the epitome of evil. Proud of
                        his vast network of cow-lifters, He sees the animals,
                        like people, as expendable products. maximizing profit
                        and controlling others are his only satisfactions. The
                        feisty Radha catches the fascination of this childless
                        criminal. He lets his guard down a tad more than is
                        characteristic and reaps the ruinous consequences.
                      </p>
                    </div>
                    <Image
                      src={anupam}
                      alt="Anupam Kher Actor"
                      title="Anupam Kher Actor"
                      name="Anupam Kher Actor"
                      aria-label="Anupam Kher Actor"
                      className="w-full h-auto rounded-lg shadow-md"
                      width={1440}
                      height={740}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4th section - director's message producer's vision*/}
        <div className="flex flex-col mb-4 pb-6 lg:grid lg:grid-cols-3 gap-2 ">
          <div className="directors ">
            {/* for large view & desktop view lg, xl view */}
            <div className="border-r hidden lg:grid grid-cols-1">
              <HoverCards
                h3headline="The Director"
                subHeading="Suresh Eriyat"
                paragraphs={[
                  "For nearly two decades, Suresh Eriyat has pioneered the craft of animation on Indian screens. After graduating from the National Institute of Design, Ahmedabad in 1997, Suresh established Famous House of Animation, where he created some unforgettable animated ads, shorts, music videos with many firsts.",
                  "In 2009, he founded Studio Eeksaurus in partnership with the producer Nilima Eriyat. He created Amaron battery advertisements, music video Bindu re Bindu, the Simpu Series for Channel V, MTV PogaSeries, Johnny Bravo going to Bollywood, Levis Slim vs. Slim, Google Tanjore Paintings and many more. Suresh's portfolio includes not less than 400 films, both animation and live action, and has won him over 100 National and International Awards, including the prestigious Annecy Festival Cristal for his film “Fateline” in 2015, a first for India. His in-house projects “Tokri” and “Fisherwoman and Tuk-Tuk” have both won National Awards. Suresh is regularly invited to speak at International Seminars and Conferences to share his greater vision for the Indian Film Industry. He is now focused on using his creative experience and talent to direct the feature film “Radha and the Great Rescue”.",
                ]}
                userImg={suresh}
              />
            </div>
            {/* for mobile view & tab view xs, sm, md view */}
            <div className="lg:hidden grid grid-cols-1 gap-2">
              <AboutCardsMob
                h3headline="The Director"
                subHeading="Suresh Eriyat"
                p1="For nearly two decades, Suresh Eriyat has pioneered the craft of
                animation on Indian screens. After graduating from the National
                Institute of Design, Ahmedabad in 1997, Suresh established Famous
                House of Animation, where he created some unforgettable animated
                ads, shorts, music videos with many firsts."
                p2='In 2009, he founded Studio Eeksaurus in partnership with the
                producer Nilima Eriyat. He created Amaron battery advertisements,
                music video Bindu re Bindu, the Simpu Series for Channel V, MTV
                PogaSeries, Johnny Bravo going to Bollywood, Levis Slim vs. Slim,
                Google Tanjore Paintings and many more. Suresh&apos;s portfolio
                includes not less than 400 films, both animation and live action,
                and has won him over 100 National and International Awards,
                including the prestigious Annecy Festival Cristal for his film
                "Fateline" in 2015, a first for India. His in-house
                projects "Tokri" and "Fisherwoman and Tuk-Tuk"
                have both won National Awards. Suresh is regularly invited to
                speak at International Seminars and Conferences to share his
                greater vision for the Indian Film Industry. He is now focused on
                using his creative experience and talent to direct the feature
                film "Radha and the Great Rescue".'
                userImg={suresh}
                objectType="cover"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col mb-4 pb-6 lg:grid lg:grid-cols-3 gap-2 ">
          <div className="producers">
            <div className="border-r hidden lg:grid grid-cols-1">
              {/* 1 */}
              <HoverCards
                h3headline="The Producer"
                subHeading="Pierre Assouline, Only Films (Paris), Uplifting Cinema (Mumbai)"
                paragraphs={[
                  "Pierre Assouline is the President, co-founder, and curator of “Extravagant India!”, the International Indian Film Festival – Paris. He is a columnist for film industry magazines, a regular panelist and festival jury member, a member of the CII National Committee on Media and Entertainment, and a voting member of The Academy of Arts and Technics of Cinema (The Cesar).",
                  "As a producer, Pierre Assouline has worked with talents such as Mika Kaurismaki, Jan Svankmajer, Karim Dridi, Julie Delpy, Zakir Hussain, Johnny Depp, Mathieu Amalric, David Tennant, Shaji Karun, Vincent Gallo, Mohanlal...",
                  "His Selections and Awards include Competition in Venice, Competition and Jury Award in Locarno, Competition in Toronto, Official Selection in Cannes, National Award in India... ",
                  "Always involved in content and the creative process, Pierre also serves as creative producer: previously for the Oscar nominated Israeli/Palestinian feature film “Ajami” and recently for Shaji Karun’s “Olu”.",
                  "As an executive producer in India for several Western productions, his credits include Sony Pictures 'The Experiment' with Adrien Brody and Maggie Grace.",
                  "As a theatrical distributor and international sales agent, Pierre Assouline has promoted the films of legendary directors Satyajit Ray, Jean-Luc Godard, Mrinal Sen, André Techiné, Chantal Akerman, Leos Carax, Jiri Menzel, Lino Brocka and Shaji Karun among others.",
                  "Well-versed in Indian independent cinema and Indian culture, a translator into French of scriptures such as the Bhagavad-Gita, Pierre currently is developing a slate of universal uplifting films exporting India’s beauty to the world.",
                ]}
                userImg={pierre}
              />
            </div>
            {/* for mobile view & tab view xs, sm, md view */}

            <div className="lg:hidden grid grid-cols-1 gap-2">
              {/* 1 */}
              <AboutCardsMob
                h3headline="The Producer"
                subHeading=" Pierre Assouline, Only Films (Paris) & Uplifting Cinema (Mumbai)"
                p1="Pierre Assouline is the President, co-founder, and curator of “Extravagant India!”, the International Indian Film Festival – Paris. He is a columnist for film industry magazines, a regular panelist and festival jury member, a member of the CII National Committee on Media and Entertainment, and a voting member of The Academy of Arts and Technics of Cinema (The Cesar). "
                p2="As a producer, Pierre Assouline has worked with talents such as Mika Kaurismaki, Jan Svankmajer, Karim Dridi, Julie Delpy, Zakir Hussain, Johnny Depp, Mathieu Amalric, David Tennant, Shaji Karun, Vincent Gallo, Mohanlal..."
                p3="His Selections and Awards include Competition in Venice, Competition and Jury Award in Locarno, Competition in Toronto, Official Selection in Cannes, National Award in India... "
                p4="Always involved in content and the creative process, Pierre also serves as creative producer: previously for the Oscar nominated Israeli/Palestinian feature film “Ajami” and recently for Shaji Karun’s “Olu”."
                p5="As an executive producer in India for several Western productions, his credits include Sony Pictures’ “The Experiment” with Adrien Brody and Maggie Grace."
                p6="As a theatrical distributor and international sales agent, Pierre Assouline has promoted the films of legendary directors Satyajit Ray, Jean-Luc Godard, Mrinal Sen, André Techiné, Chantal Akerman, Leos Carax, Jiri Menzel, Lino Brocka and Shaji Karun among others."
                p7="Well-versed in Indian independent cinema and Indian culture, a translator into French of scriptures such as the Bhagavad-Gita, Pierre currently is developing a slate of universal uplifting films exporting India’s beauty to the world."
                userImg={pierre}
                objectType="contain"
              />
              {/* 2 */}
              <AboutCardsMob
                h3headline="The Producer"
                subHeading=" David Shapiro, ITV (Los Angeles), Uplifting Cinema (Mumbai)"
                p1="David SHAPIRO graduated from the University of Michigan with a degree in Urban Economics and received his master's in film from the London Film School. Cutting his teeth on commercials at Crocus Productions in Chicago while writing/directing an animated feature, “Gnosis”, David soon migrated to Los Angeles where he was chosen to be Roman Polanski’s “intern” during the making of “Chinatown”."
                p2="At Danny Thomas Productions David quickly progressed to Associate Producer and Producer of network television “movies of the week”. His credits include the hit comedy, “Three on a Date” (Producer), “Devil’s Triangle” (Associate Producer), “The Gun and the Pulpit” (Associate Producer), “Remember When” (Production Coordinator), and other movies as a PA."
                p3="As Director of Development, David read hundreds of scripts submitted for consideration, found properties, and cultivated ideas for development. He worked with numerous writers and network executives."
                p4="David set his sights on utilising the DVD “revolution” to carry his vision of spreading India’s spiritual knowledge through the film/TV medium. He formed ITV to produce and distribute programming aimed at educating people. In its 32 years of continuous operation as a non-profit, charitable corporation, it has made numerous short fictions, documentaries, educational films, children’s shows, cooking lessons, archival footage etc., and formed channels of distribution throughout the world."
                p5="David is now focused on producing films which combine compelling stories with uplifting messages. David shares his time between Los Angeles and Mumbai."
                userImg={david}
                objectType="contain"
              />
            </div>
          </div>
          <div className="producers">
            <div className="border-r hidden lg:grid grid-cols-1">
              {/* 2 */}
              <HoverCards
                h3headline="The Producer"
                subHeading="David Shapiro, ITV (Los Angeles), Uplifting Cinema (Mumbai)"
                paragraphs={[
                  "David SHAPIRO graduated from the University of Michigan with a degree in Urban Economics and received his master’s in film from the London Film School. Cutting his teeth on commercials at Crocus Productions in Chicago while writing/directing an animated feature, “Gnosis”, David soon migrated to Los Angeles where he was chosen to be Roman Polanski’s “intern” during the making of “Chinatown”.",
                  "At Danny Thomas Productions David quickly progressed to Associate Producer and Producer of network television “movies of the week”. His credits include the hit comedy, “Three on a Date” (Producer), “Devil’s Triangle” (Associate Producer), “The Gun and the Pulpit” (Associate Producer), “Remember When” (Production Coordinator), and other movies as a PA.",
                  "As Director of Development, David read hundreds of scripts submitted for consideration, found properties, and cultivated ideas for development. He worked with numerous writers and network executives.",
                  "David set his sights on utilising the DVD “revolution” to carry his vision of spreading India’s spiritual knowledge through the film/TV medium. He formed ITV to produce and distribute programming aimed at educating people. In its 32 years of continuous operation as a non-profit, charitable corporation, it has made numerous short fictions, documentaries, educational films, children’s shows, cooking lessons, archival footage etc., and formed channels of distribution throughout the world.",
                  "David is now focused on producing films which combine compelling stories with uplifting messages. David shares his time between Los Angeles and Mumbai.",
                ]}
                userImg={david}
              />
            </div>
            {/* for mobile view & tab view xs, sm, md view */}
          </div>
        </div>

        {/* 5th section - writer*/}
        <div className="flex flex-col border-b mb-4 pb-6 lg:flex-row gap-2 ">
          <div className="writer">
            {/* <div className="flex flex-col gap-2">
              <h2 className="pt-6 font-bold text-yellow-dark font-WhitneySemibold capitalize text-2xl">
                Director&apos;s <span className="text-black">Message</span>
              </h2>
              <span className="h-[3px] bg-gradient-to-r from-textDark via-brick to-yellow-dark w-16" />
            </div> */}
            {/* for large view & desktop view lg, xl view */}
            <div className="border-r hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <HoverCards
                h3headline="The Writer"
                subHeading="Jairaj Padmanabhan"
                paragraphs={[
                  "Jairaj Padmanabhan spent 16 years in media and advertising agencies Ogilvy, Lintas Media and Mudra. He is a scriptwriter and filmmaker, ardent Indian hockey supporter, occasional corporate trainer and teacher, reluctant actor and full-time collector of experiences, memories and stories.",
                  "Jairaj is the Creator and Director of Superhit 3D animated series “Jay Jay: The Chosen One” on Showmax, the Author of the book Vendor of Poems, and the Director of the much appreciated documentary “Different Shade of Blue”, about the physically challenged Indian cricket team.",
                  "Jeetu Joseph, the writer-director of the blockbuster “Drishyam”, next film, produced by the notable production houses Cloud 9 and Junglee Pictures, will be from a screenplay by the scriptwriter of Radha and the Great Rescue, Jairaj Padmanabhan.  Jeetu Joseph and the producers are all in praise for Jairaj’s work:  “We are thrilled to bring this incredible story to screen. Jairaj Padmanabhan's screenplay beautifully aligns with our collective goal of creating cinema that captivates and profoundly connects, leaving a lasting impression on viewers.",
                ]}
                userImg={jairaj}
              />
            </div>
            {/* for mobile view & tab view xs, sm, md view */}
            <div className="lg:hidden grid grid-cols-1 gap-2">
              <AboutCardsMob
                h3headline="The Writer"
                subHeading="Jairaj Padmanabhan"
                p1="Jairaj Padmanabhan spent 16 years in media and advertising agencies Ogilvy, Lintas Media and Mudra. He is a scriptwriter and filmmaker, ardent Indian hockey supporter, occasional corporate trainer and teacher, reluctant actor and full-time collector of experiences, memories and stories."
                p2="Jairaj is the Creator and Director of Superhit 3D animated series “Jay Jay: The Chosen One” on Showmax, the Author of the book Vendor of Poems, and the Director of the much appreciated documentary “Different Shade of Blue”, about the physically challenged Indian cricket team."
                p3="Jeetu Joseph, the writer-director of the blockbuster “Drishyam”, next film, produced by the notable production houses Cloud 9 and Junglee Pictures, will be from a screenplay by the scriptwriter of Radha and the Great Rescue, Jairaj Padmanabhan.  Jeetu Joseph and the producers are all in praise for Jairaj’s work:  “We are thrilled to bring this incredible story to screen. Jairaj Padmanabhan's screenplay beautifully aligns with our collective goal of creating cinema that captivates and profoundly connects, leaving a lasting impression on viewers."
                userImg={jairajMob}
                objectType="cover"
              />
            </div>
          </div>
        </div>

        <ImageSlider t1="Location" t2="View" />
      </div>
      <Footer />
    </>
  );
}
