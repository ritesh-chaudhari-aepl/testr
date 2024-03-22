import { nav } from "../.././data/nav1";
import { BsWhatsapp } from "react-icons/bs";

function MobileNav({ onClose }) {
  function handleScroll(section) {
    let value = document.getElementById(section);
    if (value) {
      value.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });

      // Close the mobile navigation after a short delay to allow time for the scroll to complete
      // setTimeout(() => onClose(), 200);
    }
  }

  return (
    <div className="w-full h-full bg-textDark transition-all">
      <div className="h-full flex flex-col justify-center no-underline items-center gap-y-8">
        {/* {nav.map((item, index) => (
          <a
            key={index}
            href={`/#${item.href}`}
            className="text-white cursor-pointer hover:text-yellow-dark font-WhitneySemibold text-center text-lg not-italic font-medium leading-7 tracking-[0.2px]"
            onClick={() => handleScroll(item.href)}
          >
            {item.name}
          </a>
        ))} */}
        <a
          href="/#hero"
          className="text-white cursor-pointer hover:text-yellow-dark font-WhitneySemibold text-center text-lg not-italic font-medium leading-7 tracking-[0.2px]"
        >
          Home
        </a>
        <a
          href="/about"
          className="text-white cursor-pointer hover:text-yellow-dark font-WhitneySemibold text-center text-lg not-italic font-medium leading-7 tracking-[0.2px]"
        >
          The Film
        </a>
        <a
          href="/trustees"
          className="text-white cursor-pointer hover:text-yellow-dark font-WhitneySemibold text-center text-lg not-italic font-medium leading-7 tracking-[0.2px]"
        >
          The Trust
        </a>
        <a
          href="/cause"
          className="text-white cursor-pointer hover:text-yellow-dark font-WhitneySemibold text-center text-lg not-italic font-medium leading-7 tracking-[0.2px]"
        >
          The Cause
        </a>
        <a
          href="/blogs"
          className="text-white cursor-pointer hover:text-yellow-dark font-WhitneySemibold text-center text-lg not-italic font-medium leading-7 tracking-[0.2px]"
        >
          Updates
        </a>
        <a
          href="/donation"
          className="text-white cursor-pointer hover:text-yellow-dark font-WhitneySemibold text-center text-lg not-italic font-medium leading-7 tracking-[0.2px]"
        >
          Donation
        </a>
        {/* <div className="item-center justify-center gap-8 flex flex-col lg:hidden">
          <a
            // onClick={() => onClose()}
            href="#ContactUs"
            className="text-white cursor-pointer hover:text-textDark font-WhitneySemibold text-center text-xl not-italic font-medium leading-7 tracking-[0.2px] inline-block rounded-md bg-gradient-to-r from-yellow-dark to-yellow-dark px-8 py-4 transition hover:bg-indigo-700 capitalize"
          >
            Contact Us
          </a>
        </div> */}
      </div>
    </div>
  );
}

export default MobileNav;
