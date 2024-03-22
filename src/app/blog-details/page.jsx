import React from "react";
import MainCard from "../../components/cards/MainCard";
import Header from "../../components/header/Header";
import Footer from "../../pages/Footer";
import Image from "next/image";
import fp1 from "../../assets/fp1.webp";
import fp2 from "../../assets/fp2.webp";
import sp1 from "../../assets/sp1.webp";
import mp2 from "../../assets/mp2.webp";
import mp3 from "../../assets/mp3.webp";
import "./style.css";
import SmallBlogCards from "@/components/cards/blogs/SmallBlogCards";

export default function Page() {
  return (
    <>
      <Header headerBg="bg-black" />
      <section id="" className="flex items-start mt-14">
        <div className="blogs-bg min-w-full flex flex-col justify-between items-center relative bg-cover bg-center bg-no-repeat">
          <div className="mx-auto max-w-screen-xl px-4 py-2 md:px-6 w-full md:flex flex-col h-auto justify-between mt-14">
            <div className="w-full mt-8 py-6 flex flex-col items-start gap-8 text-center sm:text-left">
              {/* by using MainCard Component */}
              {/* <MainCard
                section="cause"
                v1="36"
                v2="40"
                v3="50"
                v4="0.40"
                v5="33"
                v6="35"
                v7="73"
                v8="0.04"
                h2first="updates"
                h2second="/ blogs"
                description="Join our community of filmmakers by supporting uplifting stories that are changing the world."
                link=""
              /> */}
              <div className="flex flex-col justify-center items-center">
                <h1 className="font-bold text-yellow-dark text-5xl pb-4 font-WhitneySemibold not-italic capitalize leading-[76.8px]">
                  updates <span className="text-white">/ blogs</span>
                </h1>

                <span className="h-[3px] bg-gradient-to-r from-white via-brick to-yellow-dark w-16 mb-4" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-screen-xl px-8 lg:px-0 mx-auto py-12">
        <a
          title="Back to Blog Page"
          name="Back to Blog Page"
          aria-label="Back to Blog Page"
          // className="inline-block cursor-pointer rounded-full bg-gradient-to-r from-pink-darkPink to-blue-light px-8 py-4 text-sm font-medium text-white transition hover:bg-indigo-700 capitalize"
          className="cursor-pointer"
          href="/blogs"
        >
          Back to Blog
        </a>

        <div className="flex md:flex-row flex-col gap-3">
          <div className="flex md:w-2/3 flex-col border-b-2 pb-8 gap-5">
            <div className="flex flex-col px-2 pt-4 gap-3">
              <h2 className="font-bold font-WhitneySemibold capitalize text-4xl tracking-wider">
                Who is Shmuel in The Chosen?
              </h2>
              <span className="h-[3px] bg-gradient-to-r from-textDark via-brick to-yellow-dark w-20" />
              <div className="flex flex-col gap-4">
                <p className="font-sans text-gray-700 font-semibold text-xl">
                  By Angel Studios | October 29, 2023
                </p>
                <p className="font-sans text-xl">
                  Learn about the influence of Shmuel in The Chosen & his role
                  as a Pharisee opposing Jesus. Explore the biblical foundation
                  & impact of Shmuel&apos;s role.
                </p>
                <div className="">
                  <Image
                    src={fp1}
                    alt="featured post"
                    title="featured post"
                    name="featured post"
                    aria-label="featured post"
                    className="h-56 w-full object-cover sm:h-72 md:h-96"
                  />
                </div>
                <h3 className="font-WhitneySemibold font-bold text-3xl">
                  Exploring the Cinematic Magic: The Art of Movie-making
                </h3>
                <p className="font-sans text-xl">
                  In the world of storytelling, few mediums hold the power to
                  captivate & inspire like the silver screen. Movies are a
                  dynamic art form, combining visuals, sound, & narrative to
                  transport audiences to different worlds, evoke emotions, and
                  provoke thought. This blog delves into the enchanting world of
                  movie-making, shedding light on the intricacies that transform
                  a simple idea into a cinematic masterpiece.
                </p>
                <p className="font-sans text-xl">
                  At the heart of every great film lies a compelling story.
                  Screenwriters craft narratives that connect with the audience
                  on a profound level, offering tales of love, adventure,
                  suspense, & more. Characters become our allies, guiding us
                  through their journeys, their growth mirroring our own.
                </p>

                <div className="">
                  <Image
                    src={fp2}
                    alt="featured post"
                    title="featured post"
                    name="featured post"
                    aria-label="featured post"
                    className="h-56 w-full object-cover sm:h-72 md:h-96"
                  />
                </div>
                <p className="font-sans text-xl">
                  Direction is the compass of this journey. The director&apos;s
                  vision guides the storytelling, shaping the actors&apo ;s
                  performances, camera work, & editing into a coherent and
                  immersive experience. Cinematography adds a layer of visual
                  enchantment, with talented directors of photography painting
                  each frame with emotion.
                </p>
                <p className="font-sans text-xl">
                  But what would a movie be without its stars? Actors breathe
                  life into their characters, becoming vessels for emotion and
                  truth. Their dedication to their craft is often awe-inspiring,
                  as they undergo physical & emotional transformations to tell a
                  story convincingly.
                </p>
                <p className="font-sans text-xl">
                  Movie-making is a collaborative art that demands technical
                  expertise, creativity, & boundless passion. It is an
                  alchemical process that turns ideas into unforgettable
                  experiences. Whether it&apos;s the charm of classic films, the
                  adrenaline rush of action sequences, or the emotional
                  rollercoaster of dramas, movies continue to be a source of
                  joy, inspiration, & wonder. In 300 words, we&apov;se merely
                  scratched the surface of this vast, magical world, where every
                  frame tells a story & every moment is an opportunity to share
                  a piece of the human experience. So, the next time you sit
                  down to watch a movie, remember the incredible artistry &
                  dedication that goes into making it a reality.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4"></div>
          {/* sidebar */}
          <div className=" md:w-1/3 flex flex-col">
            <h2 className="font-WhitneyMedium font-semibold border-b-2 text-xl pb-4">
              Recent Posts
            </h2>
            <SmallBlogCards
              image={sp1}
              h3headline="What to Expect in The Chosen Season 4"
            />
            <SmallBlogCards
              image={fp1}
              h3headline="What to Expect in The Chosen Season 4"
            />
            <SmallBlogCards
              image={fp2}
              h3headline="What to Expect in The Chosen Season 4"
            />
            <SmallBlogCards
              image={mp2}
              h3headline="What to Expect in The Chosen Season 4"
            />
            <SmallBlogCards
              image={mp3}
              h3headline="What to Expect in The Chosen Season 4"
            />
            <SmallBlogCards
              image={sp1}
              h3headline="What to Expect in The Chosen Season 4"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
