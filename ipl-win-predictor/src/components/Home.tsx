import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      className="relative min-h-[90vh] flex flex-col justify-center items-center"
      id="home"
    >
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      <div className="text-center z-10 px-4 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          IPL Win Probability Predictor
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-10">
          Predict the outcome of IPL matches in real-time with our machine
          learning model
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            to="predictor"
            spy={true}
            smooth={true}
            duration={500}
            className="bg-primary hover:bg-primary-hover text-white font-bold py-4 px-8 rounded-lg text-lg transition-all cursor-pointer"
          >
            Try Predictor
          </Link>
          <Link
            to="teams"
            spy={true}
            smooth={true}
            duration={500}
            className="bg-secondary hover:bg-secondary-hover text-white font-bold py-4 px-8 rounded-lg text-lg transition-all cursor-pointer"
          >
            View Teams
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
