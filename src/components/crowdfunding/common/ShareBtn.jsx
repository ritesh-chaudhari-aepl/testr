import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { FaWhatsapp } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ShareBtn() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="cursor-pointer gap-3 rounded-lg bg-yellow-dark px-5 py-3 items-center font-medium text-white sm:w-auto inline-flex w-full justify-center shadow-sm ring-1 ring-inset ring-white hover:bg-green-dark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="-mr-1 h-5 w-5 text-white"
          >
            <path d="M13 4.5a2.5 2.5 0 1 1 .702 1.737L6.97 9.604a2.518 2.518 0 0 1 0 .792l6.733 3.367a2.5 2.5 0 1 1-.671 1.341l-6.733-3.367a2.5 2.5 0 1 1 0-3.475l6.733-3.366A2.52 2.52 0 0 1 13 4.5Z" />
          </svg>
          Share
          {/* <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-white"
            aria-hidden="true"
          /> */}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  title="Share on WhatsApp"
                  name="Share on WhatsApp"
                  aria-label="Share on WhatsApp"
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "flex gap-2 items-center px-4 py-2 text-xl"
                  )}
                >
                  <p className="font-medium p-1 text-white bg-green-dark rounded-sm">
                    <FaWhatsapp />
                  </p>
                  Whatsapp
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  title="Share on Facebook"
                  name="Share on Facebook"
                  aria-label="Share on Facebook"
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "flex gap-2 items-center px-4 py-2 text-xl"
                  )}
                >
                  <p className="font-medium p-1 text-white bg-blue-darkBlue rounded-sm">
                    <RiFacebookFill />
                  </p>
                  Facebook
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  title="Share on Twitter"
                  name="Share on Twitter"
                  aria-label="Share on Twitter"
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "flex gap-2 items-center px-4 py-2 text-xl"
                  )}
                >
                  <p className="font-medium p-1 text-white bg-blue-500 rounded-sm">
                    <FaTwitter />
                  </p>
                  Tweet
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  title="Share on Linkedin"
                  name="Share on Linkedin"
                  aria-label="Share on Linkedin"
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "flex gap-2 items-center px-4 py-2 text-xl"
                  )}
                >
                  <p className="font-medium p-1 text-white bg-blue-darkBlue rounded-sm">
                    <FaLinkedinIn />
                  </p>
                  LinkedIn
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  title="Share on Mail"
                  name="Share on Mail"
                  aria-label="Share on Mail"
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "flex gap-2 items-center px-4 py-2 text-xl"
                  )}
                >
                  <p className="font-medium p-1 text-white bg-red-600 rounded-sm">
                    <BiLogoGmail />
                  </p>
                  Mail
                </a>
              )}
            </Menu.Item>
            {/* <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2 text-left text-sm'
                    )}
                  >
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </form> */}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
