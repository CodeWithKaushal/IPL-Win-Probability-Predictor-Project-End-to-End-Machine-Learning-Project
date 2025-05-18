import { Link } from "react-scroll";
import { useState, useEffect, useCallback } from "react";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationIndex, setAnimationIndex] = useState(0);
  const [isPulsing, setIsPulsing] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Sequence animations for a staggered effect
    const interval = setInterval(() => {
      setAnimationIndex((prev) => (prev < 5 ? prev + 1 : prev));
    }, 300);

    return () => clearInterval(interval);
  }, []);

  // Add a pulsing effect when hovering over the title
  const handleTitleHover = useCallback(() => {
    setIsPulsing(true);
    setTimeout(() => setIsPulsing(false), 1000);
  }, []);

  return (
    <div
      className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden"
      id="home"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-primary/30 z-0"></div>

      {/* Animated cricket elements background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full backdrop-blur-sm"
            style={{
              width: `${Math.random() * 2 + 0.5}rem`,
              height: `${Math.random() * 2 + 0.5}rem`,
              backgroundColor:
                i % 3 === 0
                  ? "rgba(255,255,255,0.1)"
                  : i % 3 === 1
                  ? "rgba(234,88,12,0.1)"
                  : "rgba(37,99,235,0.1)",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${
                5 + Math.random() * 15
              }s ease-in-out infinite, 
                         pulse ${3 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Cricket ball seam animation */}
      <div
        className="absolute top-1/4 right-1/4 z-0 w-32 h-32 md:w-48 md:h-48 rounded-full border-2 border-dashed border-red-500/30"
        style={{
          animation: "spin 15s linear infinite",
        }}
      ></div>

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
            style={{
              animationDuration: "3s",
              filter: "drop-shadow(0 0 10px rgba(234, 88, 12, 0.5))",
            }}
          />
        </div>

        <h1
          className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg cursor-pointer"
          onMouseEnter={handleTitleHover}
        >
          <span
            className={`text-secondary inline-block transition-all duration-300 hover:scale-110 hover:rotate-3 ${
              isPulsing ? "animate-pulse" : ""
            }`}
          >
            IPL
          </span>{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Win Probability Predictor
          </span>
        </h1>

        <p
          className={`text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto transition-all duration-1000 transform ${
            animationIndex >= 1
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent font-semibold">
            Harness the power of machine learning
          </span>{" "}
          to predict match outcomes in real-time with{" "}
          <span className="relative inline-block">
            <span className="relative z-10">precision and accuracy</span>
            <span className="absolute bottom-0 left-0 right-0 h-3 bg-secondary/30 -z-10 transform -rotate-1"></span>
          </span>
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 transform ${
            animationIndex >= 2
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
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
          <div
            className={`bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 transform hover:scale-105 transition-all duration-500 hover:shadow-xl ${
              animationIndex >= 1
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <div
              className="text-secondary text-4xl mb-3 animate-bounce"
              style={{ animationDuration: "3s" }}
            >
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

          <div
            className={`bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 transform hover:scale-105 transition-all duration-500 hover:shadow-xl ${
              animationIndex >= 2
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div
              className="text-secondary text-4xl mb-3 animate-pulse"
              style={{ animationDuration: "4s" }}
            >
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

          <div
            className={`bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 transform hover:scale-105 transition-all duration-500 hover:shadow-xl ${
              animationIndex >= 3
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            <div
              className="text-secondary text-4xl mb-3 animate-spin"
              style={{ animationDuration: "10s" }}
            >
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

      {/* Scroll down indicator with animation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <Link
          to="predictor"
          spy={true}
          smooth={true}
          duration={500}
          className="text-white cursor-pointer flex flex-col items-center group"
        >
          <span className="text-sm mb-2 group-hover:text-secondary transition-colors">
            Scroll Down
          </span>
          <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center p-1 group-hover:border-secondary transition-colors">
            <div className="w-1 bg-white rounded-full animate-[bounce_1.5s_infinite] group-hover:bg-secondary transition-colors"></div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
