import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-primary/95 text-white py-10 mt-auto">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <img
                src="/assets/ipl-logo.svg"
                className="h-10 mr-3"
                alt="IPL Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap">
                IPL Win Predictor
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              Advanced machine learning predictions for IPL matches with
              real-time analytics and insights.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-gray-300"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300"
                aria-label="Twitter"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="md:col-span-1">
            <h2 className="mb-6 text-sm font-semibold uppercase">Navigation</h2>
            <ul className="space-y-3">
              <li>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
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
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
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
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
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
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  Teams
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h2 className="mb-6 text-sm font-semibold uppercase">Teams</h2>
            <ul className="space-y-3">
              <li className="text-gray-300 hover:text-white">Mumbai Indians</li>
              <li className="text-gray-300 hover:text-white">
                Chennai Super Kings
              </li>
              <li className="text-gray-300 hover:text-white">
                Royal Challengers Bangalore
              </li>
              <li className="text-gray-300 hover:text-white">
                Kolkata Knight Riders
              </li>
              <li className="text-gray-300 hover:text-white">Delhi Capitals</li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h2 className="mb-6 text-sm font-semibold uppercase">
              Contact & Support
            </h2>
            <ul className="space-y-3">
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span className="text-gray-300">support@iplpredictor.com</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-gray-300">+91 12345 67890</span>
              </li>
              <li>
                <div className="flex mt-4">
                  <input
                    type="email"
                    className="rounded-l-lg p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-primary-300 focus:border-primary-300"
                    placeholder="Your email"
                  />
                  <button className="px-3 text-sm font-medium text-white bg-secondary rounded-r-lg border border-secondary hover:bg-secondary-hover focus:ring-4 focus:outline-none focus:ring-secondary-300">
                    Subscribe
                  </button>
                </div>
                <p className="mt-1 text-xs text-gray-400">
                  Get updates on new features
                </p>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-gray-600" />

        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="flex flex-col md:flex-row md:items-center">
            <span className="text-sm text-gray-300 mb-2 md:mb-0">
              © {new Date().getFullYear()} IPL Win Probability Predictor | All
              Rights Reserved
            </span>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center md:ml-3 text-sm text-secondary font-medium mb-2 md:mb-0 transition-all hover:text-white"
            >
              <span className="group-hover:scale-105 group-hover:translate-x-1 transition-all duration-300 inline-flex items-center">
                Developed by Kaushal Divekar
                <svg
                  className="w-4 h-4 ml-1 text-secondary group-hover:text-white transition-colors"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
              </span>
            </a>
          </div>
          <ul className="flex flex-wrap items-center text-sm text-gray-300">
            <li className="mr-6">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li className="mr-6">
              <a href="#" className="hover:underline">
                Terms &amp; Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Cookies Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
