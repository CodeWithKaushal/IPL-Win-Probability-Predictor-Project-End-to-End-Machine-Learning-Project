import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isScrolled = scrollPosition > 20;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white/80 border-b border-gray-200"
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3">
          <img src="/assets/ipl-logo.svg" className="h-12" alt="IPL Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-primary">
            IPL Win Predictor
          </span>
        </a>

        {/* User Profile and Menu Button */}
        <div className="flex items-center md:order-2 gap-3">
          <div className="hidden md:flex">
            <button
              type="button"
              className="flex text-sm bg-primary-100 rounded-full md:me-0 ring-2 ring-primary-200 focus:ring-4 focus:ring-primary-300"
              id="user-menu-button"
              aria-expanded="false"
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-10 h-10 rounded-full p-1"
                src="/assets/ipl-logo.svg"
                alt="user photo"
              />
            </button>
          </div>

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
                d={isOpen ? "M1 1L16 16M16 1L1 16" : "M1 1h15M1 7h15M1 13h15"}
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-white md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                className="block py-2 pl-3 pr-4 text-primary rounded hover:bg-primary-100 md:hover:bg-transparent md:p-0 cursor-pointer"
                activeClass="font-bold"
                offset={-100}
                onClick={() => setIsOpen(false)}
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
                onClick={() => setIsOpen(false)}
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
                onClick={() => setIsOpen(false)}
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
                onClick={() => setIsOpen(false)}
              >
                Teams
              </Link>
            </li>
            <li className="md:hidden flex items-center justify-center mt-3">
              <button className="px-4 py-2 bg-primary text-white rounded-full hover:bg-primary-600 transition-colors">
                My Account
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
