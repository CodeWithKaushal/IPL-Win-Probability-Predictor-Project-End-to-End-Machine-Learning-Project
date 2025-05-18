import { Link } from "react-scroll";
import { useState, useEffect } from "react";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden"
      id="home"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-primary/30 z-0"></div>

      {/* Animated cricket balls background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      <div
        className={`text-center z-10 px-4 max-w-5xl transition-all duration-1000 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="flex justify-center mb-6">
          <img
            src="/assets/ipl-logo.svg"
            alt="IPL Logo"
            className="h-24 md:h-32 animate-pulse"
            style={{ animationDuration: "3s" }}
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
          <span className="text-secondary">IPL</span> Win Probability Predictor
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
          Harness the power of machine learning to predict match outcomes in
          real-time with precision and accuracy
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="predictor"
            spy={true}
            smooth={true}
            duration={500}
            className="bg-primary hover:bg-primary-hover text-white font-bold py-4 px-8 rounded-full text-lg transition-all cursor-pointer shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center group"
          >
            Try Predictor
            <svg
              className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              ></path>
            </svg>
          </Link>
          <Link
            to="teams"
            spy={true}
            smooth={true}
            duration={500}
            className="bg-secondary hover:bg-secondary-hover text-white font-bold py-4 px-8 rounded-full text-lg transition-all cursor-pointer shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            View Teams
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 transform hover:scale-105 transition-transform">
            <div className="text-secondary text-4xl mb-3">
              <svg
                className="w-12 h-12 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Real-Time Analytics
            </h3>
            <p className="text-gray-300">
              Dynamic predictions update as the match progresses
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 transform hover:scale-105 transition-transform">
            <div className="text-secondary text-4xl mb-3">
              <svg
                className="w-12 h-12 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">ML Powered</h3>
            <p className="text-gray-300">
              Advanced algorithms trained on historical IPL data
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 transform hover:scale-105 transition-transform">
            <div className="text-secondary text-4xl mb-3">
              <svg
                className="w-12 h-12 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Live Matches</h3>
            <p className="text-gray-300">
              Simulate match scenarios during live games
            </p>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <Link
          to="predictor"
          spy={true}
          smooth={true}
          duration={500}
          className="text-white cursor-pointer flex flex-col items-center"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Home;
