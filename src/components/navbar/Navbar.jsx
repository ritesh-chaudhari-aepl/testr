import { nav } from "../.././data/nav2";

function Navbar() {
  function handleScroll(section) {
    let value = document.getElementById(section);
    console.log(value);
    if (value) {
      value.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }
  return (
    <nav className="flex">
      <div className="container mx-auto flex justify-between items-center">
        <div className="hidden lg:flex space-x-4">
          {/* {nav.map((item, index) => (
            <a
              key={index}
              href={`/#${item.href}`}
              className="text-white cursor-pointer hover:text-yellow-dark font-WhitneySemibold text-center text-lg not-italic font-medium leading-7 tracking-[0.2px]"
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
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
