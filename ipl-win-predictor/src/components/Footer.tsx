import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-6 mt-auto">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">
              IPL Win Probability Predictor
            </h3>
            <p className="text-gray-300">
              Get real-time win predictions for IPL matches
            </p>
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="predictor"
              spy={true}
              smooth={true}
              duration={500}
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              Predictor
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              About
            </Link>
            <Link
              to="teams"
              spy={true}
              smooth={true}
              duration={500}
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              Teams
            </Link>
          </div>
        </div>
        <hr className="my-4 border-gray-600" />
        <div className="text-center text-gray-300">
          <p>
            © {new Date().getFullYear()} IPL Win Probability Predictor | All
            Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
