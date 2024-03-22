import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../pages/Footer";
import StartingBannerCard from "@/components/cards/StartingBannerCard";
import "./style.css";

export default function Page() {
  return (
    <>
      <section
        id=""
        loading="eager"
        className="flex items-start bg-[#5b381f] mt-24"
      >
        <div className="cause-bg min-w-full flex flex-col justify-between relative bg-cover bg-center bg-no-repeat">
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
                h2first="Film Media"
                h2second="supported Causes"
                description="The Mridanga is a percussion instrument traditionally carrying the rythm of devotional songs. Our Trust has imagined a Brihat Mridanga, or Great Mridanga, with far and wide amplifying power, as the symbol of the most impactful media that Cinema is."
                btnDisplay="hidden"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-screen-xl px-8 mx-auto py-8 mb-4">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-yellow-dark text-5xl pb-4 font-WhitneySemibold not-italic capitalize leading-[76.8px]">
            The <span className="text-black">Cause</span>
          </h1>

          <span className="h-[3px] bg-gradient-to-r from-textDark via-brick to-yellow-dark w-16 mb-4" />
        </div>

        {/* big screen association creates impact */}
        <div className="flex flex-col pt-6 gap-2">
          <h2 className="font-bold text-yellow-dark font-WhitneySemibold capitalize text-2xl">
            Big Screen{" "}
            <span className="text-black"> association creates impact</span>
          </h2>
          <span className="h-[3px] bg-gradient-to-r from-textDark via-brick to-yellow-dark w-16" />
        </div>
        <p className="p-2 mt-4 font-sans text-xl leading-normal">
          Movies continue to impact and shape our culture. The Trust uses that
          same media to educate and transform the conversation in India about
          the welfare of animals and the wisdom of cow protection. The Trust
          will organise a number of itinerant teams to travel throughout India
          where free screenings of the cow protection advocating movie “Radha
          and the Great Rescue” will reach into villages, schools, colleges, and
          universities. An illustrated novel based on the film will be
          distributed freely through the educational institutions and libraries.
          The Trust will link like-minded organisations and participate in
          conferences designed to promote satvic values. Outreach to online
          media will further the influence of the Trust’s work. At every stage,
          the latest activities will be found on our update page.
        </p>
        <p className="p-2 font-sans text-xl leading-normal">
          Help support a media blitz designed to create a revival in the way
          Indians see nature, animals, and, especially, gomata.
        </p>

        {/* Cow Protection & Animal Welfare */}
        <div className="flex flex-col pt-6 gap-2">
          <h2 className="font-bold text-yellow-dark font-WhitneySemibold capitalize text-2xl">
            Cow Protection<span className="text-black"> & Animal Welfare</span>
          </h2>
          <span className="h-[3px] bg-gradient-to-r from-textDark via-brick to-yellow-dark w-16" />
        </div>
        <div className="flex px-2 pt-3 gap-3 items-center">
          {/* <svg
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
          </svg> */}
          <h3 className="py-2 font-sans text-xl leading-normal font-semibold">
            Protect Cows… Protect Our Civilisation.
          </h3>
        </div>
        <p className="p-2 font-sans text-xl leading-normal">
          Just as a child feeds on the breast milk of the mother, human society
          takes milk from the cow. In the Vedic tradition, cows are considered
          mothers. The bull is also considered the father of human society
          because just as the father earns to feed the children, the bull tills
          the earth to produce food grains. Lord Krishna loves the cows. He is
          Himself Govinda, a cowherd boy. A civilised man is expected to give
          all protection to the bulls and cows. Today, people are becoming more
          and more uncivilised by neglecting such instructions. The violence
          against innocent animals increases without limit. This savagery
          extends to a far too large part of humankind.
        </p>
        <p className="p-2 font-sans text-xl leading-normal">
          The movie “Radha and the Great Rescue” dramatises the need to nurture
          our children not only through material comforts, but through
          tenderness, affection and compassion toward all sentient beings. The
          bull’s will to survive is mirrored in Radha’s loyal, unconditional
          resolve to save her beloved animals. Ultimately, the film highlights
          the universal principles of respect and love that connect all living
          creatures.
        </p>
        <p className="p-2 font-sans text-xl leading-normal">
          In sync with today’s global youth’s number one concern, this film is
          designed to once again remind the audience of its great dependence on
          nature and other living beings.
        </p>

        {/* girl empowerment */}
        <div className="flex flex-col pt-6 gap-2">
          <h2 className="font-bold text-yellow-dark font-WhitneySemibold capitalize text-2xl">
            Girl <span className="text-black"> Empowerment</span>
          </h2>
          <span className="h-[3px] bg-gradient-to-r from-textDark via-brick to-yellow-dark w-16" />
        </div>
        {/* <div className="flex px-2 pt-2 gap-3 items-center">
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
          <h3 className="font-medium font-WhitneySemibold capitalize text-lg">
            Pierre Assouline, Only films (Paris) & Uplifting Cinema (Mumbai)
          </h3>
        </div> */}
        <p className="p-2 font-sans mt-4 text-xl leading-normal">
          Mass media in India is responsible for playing a significant function
          to project and inform about needs such as women and young girl
          empowerment. In Radha’s case, her quest to save her animal friends is
          a coming-of-age experience that firmly establishes her potential for
          success in any endeavour.
        </p>
        <p className="p-2 font-sans text-xl leading-normal">
          In our days of trending feminism, a still insufficient portion of
          women in India are free to employ their free will. They are sometimes
          not permitted nor even encouraged to carve out their own lives the way
          they aspire to. In some villages and semi-urban cities, women are
          still denied higher education.
        </p>
        <p className="p-2 font-sans text-xl leading-normal">
          {" "}
          Though living in male-dominating societies, many women can only
          survive the brunt of unequal access and pay in jobs. More than men and
          boys, they suffer financial trustworthiness, societal constraints, and
          religious restrictions. The mass media performs a crucial role in
          either perpetuating or repairing negative attitudes toward young girls
          and women.{" "}
        </p>
        {/* <div className="flex px-2 pt-2 gap-3 items-center">
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
          <h3 className="font-medium font-WhitneySemibold capitalize text-lg">
            David Shapiro, Uplifting Cinema (Mumbai), ITV (LA)
          </h3>
        </div>
        <p className="p-2 font-sans text-xl leading-normal">
          David received his master&apos;s in film from the London Film School.
          His thesis film, “Like to Be” was a study of a young man&apos;s
          ontological search for meaning, &  was a harbinger on his later
          work in the medium. Cutting his teeth on commercials at Crocus
          Productions in Chicago while writing/directing an animated feature,
          “Gnosis”, David soon migrated to Los Angeles where he was chosen by
          the American Film Institute to be the intern to Roman Polanski during
          the making of “Chinatown”. At Danny Thomas Productions, David quickly
          progressed to Associate Producer, Director of Development, and
          Producer. There, David read hundreds of scripts submitted for
          consideration, found properties & ltivated ideas for script
          development. He worked with writers & twork executives, bringing
          properties from concept & ript through post production.
        </p>
        <p className="p-2 font-sans text-xl leading-normal">
          David then launched his own production studio, ITV Productions. In its
          32 years of continuous operation, David produced & stributed a
          catalog of over 200 hours of original & quired content including
          documentaries, educational films, children&apos;s shows, cooking
          lessons, & rrative fiction in 19 languages, with channels of
          distribution around the world. After riding the wave of Film -&gt; VHS
          -&gt; DVD -&gt; VOD & Streaming, he is now focused on producing
          feature films which combine commercial potential & iritual
          insight. David shares his time between Mumbai & s Angeles.
        </p> */}
      </div>

      {/* 5th section - gallery */}
      <div className="max-w-screen-xl px-8 mx-auto py-8 mb-4">
        <div className="flex gap-2 ">
          <div className="gallery w-full flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <h2 className="pt-6 font-bold text-yellow-dark font-WhitneySemibold capitalize text-2xl">
                Background <span className="text-black"> & Note of Intent</span>
              </h2>
              <span className="h-[3px] bg-gradient-to-r from-textDark via-brick to-yellow-dark w-16" />
            </div>
            {/* background */}
            <div className="mt-6">
              <h2 className="font-bold font-WhitneySemibold capitalize text-2xl">
                Background
              </h2>
              <p className="p-2 font-medium font-sans text-xl">
                The cow lifting and smuggling plague in contemporary India.
              </p>
              <p className="p-2 font-sans text-xl leading-normal">
                Along the largely porous boundary between the Indian state of
                West Bengal and Bangladesh, criminal gangs conduct cattle-raids
                and cattle smuggling while making thousands of crores of rupees
                annually in illicit profits. Estimates that three-fourths of all
                cows slaughtered in Bangladesh originate in India. In this
                thriving black market, herds of cows worth 50 billion rupees are
                sent across to Bangladesh every year. In 2016, an unofficial
                home ministry estimate claimed that roughly two million cattle
                were being pushed by smugglers into Bangladesh every year to
                meet the high demand for beef. The cattle lifted from Uttar
                Pradesh and other states are sold in Bangladesh for up to 70,000
                rupees per animal.
              </p>
              <p className="p-2 font-sans text-xl leading-normal">
                In India, export of cow or ox meat is illegal. And despite
                legislation, cattle continue to be smuggled into Bangladesh. The
                Border Security Force has stepped up its intelligence gathering
                and maintenance of cow registers. Undercover operations have
                commenced to garner information and take action against those
                keeping cattle illegally. BSF doubled the manpower patrolling
                outposts and has been repairing or replacing old, worn out
                fences. Speed boats are now used for vigil along riverine
                borders. To a certain extent, these measures have deterred
                handlers.
              </p>
            </div>
            {/* note of intent */}
            <div className="mt-6">
              <h2 className="font-bold font-WhitneySemibold capitalize text-2xl">
                Note of Intent
              </h2>
              <p className="p-2 font-medium font-sans text-xl">
                Radha and the Great Rescue is a tale of mystery, adventure,
                faith, and good overcoming evil.
              </p>
              <p className="p-2 font-sans text-xl leading-normal">
                Radha&apos;s unconditional love for her dwarf bull examplifies
                the possibility of a sacred bond between human and animal.
                Living a sheltered, simple life in rural India, Radha&apos;s
                confrontation with the complex world of adult modernity is a
                classic fish-out-of-water experience. The bull&apos;s charm,
                tenderness and will to survive are mirrored in Radha&apos;s
                loyal, unconditional resolve to save her animals. Ultimately,
                the film highlights the universal principle that connects all
                living creatures - respect and love.
              </p>
              <p className="p-2 font-sans text-xl leading-normal">
                India has a cultural heritage intricately connected with the
                cows. The earth, Mother Bhumi, is portrayed in the body of a
                cow. Lord Krishna loves the cows. He is Himself Govinda, a
                cowherd boy. The movie dramatises the need to nurture our
                children not only through material comforts, but through
                tenderness, affection and compassion. In sync with today&apos;s
                global youth&apos;s number one concern, this film is designed to
                once again remind the audience of its great dependence on nature
                and other living beings.
              </p>
            </div>
            {/* <div className="gallery-wrap mt-6 flex w-full h-[70vh]">
              <div className="item item-1"></div>
              <div className="item item-2"></div>
              <div className="item item-3"></div>
              <div className="item item-4"></div>
              <div className="item item-5"></div>
              <div className="item item-6"></div> 
              <div className="item item-7"></div>
              <div className="item item-8"></div>
              <div className="item item-9"></div>
              <div className="item item-10"></div>
              <div className="item item-11"></div>
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
