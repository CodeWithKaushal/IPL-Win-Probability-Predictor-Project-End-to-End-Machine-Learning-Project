import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3">
          <img src="/assets/ipl-logo.svg" className="h-12" alt="IPL Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-primary">
            IPL Win Predictor
          </span>
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-white md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            <li>
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                className="block py-2 pl-3 pr-4 text-primary bg-transparent rounded md:bg-transparent md:p-0 cursor-pointer"
                activeClass="font-bold"
                offset={-100}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="predictor"
                spy={true}
                smooth={true}
                duration={500}
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 cursor-pointer"
                activeClass="text-primary font-bold"
                offset={-100}
              >
                Predictor
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 cursor-pointer"
                activeClass="text-primary font-bold"
                offset={-100}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="teams"
                spy={true}
                smooth={true}
                duration={500}
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 cursor-pointer"
                activeClass="text-primary font-bold"
                offset={-100}
              >
                Teams
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
