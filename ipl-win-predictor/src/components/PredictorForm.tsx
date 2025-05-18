import { useState, useEffect } from "react";
import type { FormEvent } from "react";
import { predictMatch } from "../services/predictionService";
import type { PredictionResult } from "../services/predictionService";
import TeamLogo from "./TeamLogo";

const PredictorForm = () => {
  // Team and city lists
  const teams = [
    "Royal Challengers Bangalore",
    "Kings XI Punjab",
    "Delhi Daredevils",
    "Mumbai Indians",
    "Kolkata Knight Riders",
    "Rajasthan Royals",
    "Chennai Super Kings",
    "Sunrisers Hyderabad",
    "Delhi Capitals",
    "Punjab Kings",
    "Lucknow Super Giants",
    "Gujarat Titans",
  ];

  const cities = [
    "Bangalore",
    "Chandigarh",
    "Delhi",
    "Mumbai",
    "Kolkata",
    "Jaipur",
    "Hyderabad",
    "Chennai",
    "Cape Town",
    "Port Elizabeth",
    "Durban",
    "Centurion",
    "East London",
    "Johannesburg",
    "Kimberley",
    "Bloemfontein",
    "Ahmedabad",
    "Cuttack",
    "Nagpur",
    "Dharamsala",
    "Visakhapatnam",
    "Pune",
    "Raipur",
    "Ranchi",
    "Abu Dhabi",
    "Bengaluru",
    "Indore",
    "Dubai",
    "Sharjah",
    "Navi Mumbai",
    "Lucknow",
    "Guwahati",
    "Mohali",
  ];

  // Form state
  const [battingTeam, setBattingTeam] = useState(teams[0]);
  const [bowlingTeam, setBowlingTeam] = useState(teams[1]);
  const [city, setCity] = useState(cities[0]);
  const [target, setTarget] = useState(180);
  const [score, setScore] = useState(80);
  const [overs, setOvers] = useState(10.0);
  const [wickets, setWickets] = useState(3);
  const [loading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState<PredictionResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [apiConnected, setApiConnected] = useState<boolean | null>(null);
  const [activeTab, setActiveTab] = useState<"teams" | "situation">("teams");

  // Check if API is connected on component mount
  useEffect(() => {
    const checkApiConnection = async () => {
      try {
        const response = await fetch("http://localhost:5000/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        setApiConnected(response.ok);
      } catch (error) {
        setApiConnected(false);
        console.error("API connection check failed:", error);
      }
    };
    checkApiConnection();
  }, []);

  // Handle form changes
  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    // For numeric inputs, ensure it's a number
    if (name === "target") {
      const numValue = parseFloat(value);
      setTarget(isNaN(numValue) ? 0 : numValue);
    } else if (name === "score") {
      const numValue = parseFloat(value);
      setScore(isNaN(numValue) ? 0 : numValue);
    } else if (name === "overs") {
      const numValue = parseFloat(value);
      // Ensure overs is between 0 and 19.5
      if (!isNaN(numValue) && numValue >= 0 && numValue <= 19.5) {
        setOvers(numValue);
      }
    } else if (name === "wickets") {
      const numValue = parseInt(value);
      // Ensure wickets is between 0 and 9
      if (!isNaN(numValue) && numValue >= 0 && numValue <= 9) {
        setWickets(numValue);
      }
    } else if (name === "battingTeam") {
      setBattingTeam(value);
    } else if (name === "bowlingTeam") {
      setBowlingTeam(value);
    } else if (name === "city") {
      setCity(value);
    }
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validate teams are different
    if (battingTeam === bowlingTeam) {
      setError("Batting and bowling teams cannot be the same");
      return;
    }

    setLoading(true);

    // Call our prediction service
    predictMatch({
      battingTeam: battingTeam,
      bowlingTeam: bowlingTeam,
      city: city,
      target: target,
      score: score,
      overs: overs,
      wickets: wickets,
    })
      .then((result) => {
        setPrediction(result);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Prediction error:", error);
        setLoading(false);
        setError("Failed to get prediction. Please try again later.");
      });
  };

  // Calculate match situation metrics
  const runsLeft = target - score;
  const ballsInAnOver = 6;
  const totalBalls = 120;
  const oversCompleted = Math.floor(overs);
  const ballsCompleted =
    oversCompleted * ballsInAnOver + Math.round((overs % 1) * 10);
  const ballsLeft = totalBalls - ballsCompleted;
  const runRate =
    ballsLeft > 0 ? ((runsLeft * 6) / ballsLeft).toFixed(2) : "N/A";
  const progressPercentage = Math.min(100, (score / target) * 100);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 mt-14" id="predictor">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-primary mb-2">
          IPL Win Probability Predictor
        </h1>
        <p className="text-xl text-gray-600">
          Predict your team's chances in real-time with machine learning
        </p>
      </div>

      {error && (
        <div
          className="mb-6 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded"
          role="alert"
        >
          <p className="font-bold">Error</p>
          <p>{error}</p>
        </div>
      )}

      {apiConnected === false && (
        <div
          className="mb-6 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded"
          role="alert"
        >
          <p className="font-bold">API Connection Failed</p>
          <p>
            The prediction API is not available. Using fallback method for
            predictions.
          </p>
        </div>
      )}

      <div className="grid md:grid-cols-3 gap-8">
        {/* Form Card */}
        <div className="card md:col-span-1 border border-gray-200">
          <div className="flex border-b border-gray-200 mb-4">
            <button
              onClick={() => setActiveTab("teams")}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === "teams"
                  ? "border-b-2 border-primary text-primary"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Teams
            </button>
            <button
              onClick={() => setActiveTab("situation")}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === "situation"
                  ? "border-b-2 border-primary text-primary"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Match Situation
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            {activeTab === "teams" && (
              <div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Batting Team
                  </label>
                  <select
                    name="battingTeam"
                    value={battingTeam}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  >
                    {teams.sort().map((team) => (
                      <option key={team} value={team}>
                        {team}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Bowling Team
                  </label>
                  <select
                    name="bowlingTeam"
                    value={bowlingTeam}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  >
                    {teams.sort().map((team) => (
                      <option key={team} value={team}>
                        {team}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Team logos display */}
                <div className="flex items-center justify-center my-6 p-4 bg-gray-50 rounded-lg">
                  <TeamLogo teamName={battingTeam} size="lg" showName={true} />

                  <div className="team-vs text-center px-2">VS</div>

                  <TeamLogo teamName={bowlingTeam} size="lg" showName={true} />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Host City
                  </label>
                  <select
                    name="city"
                    value={city}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  >
                    {cities.sort().map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {activeTab === "situation" && (
              <div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Target
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                      Runs
                    </span>
                    <input
                      type="number"
                      name="target"
                      value={target}
                      onChange={handleChange}
                      min={1}
                      className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-primary-500 focus:border-primary-500 block flex-1 min-w-0 w-full text-sm p-2.5"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Current Score
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                      Runs
                    </span>
                    <input
                      type="number"
                      name="score"
                      value={score}
                      onChange={handleChange}
                      min={0}
                      className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-primary-500 focus:border-primary-500 block flex-1 min-w-0 w-full text-sm p-2.5"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Overs Completed
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                      Overs
                    </span>
                    <input
                      type="number"
                      name="overs"
                      value={overs}
                      onChange={handleChange}
                      min={0}
                      max={19.5}
                      step={0.1}
                      className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-primary-500 focus:border-primary-500 block flex-1 min-w-0 w-full text-sm p-2.5"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Wickets Lost
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                      Wickets
                    </span>
                    <input
                      type="number"
                      name="wickets"
                      value={wickets}
                      onChange={handleChange}
                      min={0}
                      max={9}
                      className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-primary-500 focus:border-primary-500 block flex-1 min-w-0 w-full text-sm p-2.5"
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex-1">
                    <span className="text-xs text-gray-500">Current Score</span>
                    <div className="text-lg font-semibold flex items-center">
                      {score}/{wickets}
                      <span className="text-sm text-gray-500 ml-1">
                        ({overs} ov)
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <span className="text-xs text-gray-500">Target</span>
                    <div className="text-lg font-semibold">{target} runs</div>
                  </div>
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-3 text-center transition-all"
              disabled={loading}
            >
              {loading ? (
                <div className="flex justify-center items-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Calculating...
                </div>
              ) : (
                "Predict Win Probability"
              )}
            </button>
          </form>
        </div>

        {/* Match Summary and Prediction Card */}
        <div className="md:col-span-2">
          <div className="card mb-6 border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">
              Match Situation
            </h2>

            <div className="match-summary rounded-lg">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <p className="text-gray-700 font-semibold text-sm">Target</p>
                  <p className="text-2xl font-bold text-primary">
                    {target} runs
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <p className="text-gray-700 font-semibold text-sm">
                    Required Run Rate
                  </p>
                  <p className="text-2xl font-bold text-primary">{runRate}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <p className="text-gray-700 font-semibold text-sm">
                    Runs Needed
                  </p>
                  <p className="text-2xl font-bold text-primary">
                    {runsLeft} runs
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <p className="text-gray-700 font-semibold text-sm">
                    Balls Remaining
                  </p>
                  <p className="text-2xl font-bold text-primary">
                    {ballsLeft} balls
                  </p>
                </div>
              </div>

              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-primary bg-primary-100">
                      Chase Progress
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-primary">
                      {score}/{target} runs ({progressPercentage.toFixed(1)}%)
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded-full bg-gray-200">
                  <div
                    style={{ width: `${progressPercentage}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary rounded-full transition-all duration-500 ease-in-out"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {prediction && (
            <div className="card border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-green-500 mr-3">
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Win Probability
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-6 bg-gray-50 p-6 rounded-lg mb-6">
                <div>
                  <div className="flex flex-col items-center mb-3">
                    <TeamLogo
                      teamName={battingTeam}
                      size="lg"
                      showName={true}
                    />
                  </div>

                  <div className="relative pt-4">
                    <div className="overflow-hidden h-5 mb-1 text-xs flex rounded-full bg-gray-200">
                      <div
                        style={{
                          width: `${prediction.battingTeamProb * 100}%`,
                        }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary rounded-full transition-all duration-1000 ease-in-out"
                      ></div>
                    </div>
                    <p
                      className={`text-center font-bold text-xl ${
                        prediction.battingTeamProb > prediction.bowlingTeamProb
                          ? "text-green-600"
                          : ""
                      }`}
                    >
                      {(prediction.battingTeamProb * 100).toFixed(1)}%
                    </p>
                  </div>
                </div>

                <div>
                  <div className="flex flex-col items-center mb-3">
                    <TeamLogo
                      teamName={bowlingTeam}
                      size="lg"
                      showName={true}
                    />
                  </div>

                  <div className="relative pt-4">
                    <div className="overflow-hidden h-5 mb-1 text-xs flex rounded-full bg-gray-200">
                      <div
                        style={{
                          width: `${prediction.bowlingTeamProb * 100}%`,
                        }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary rounded-full transition-all duration-1000 ease-in-out"
                      ></div>
                    </div>
                    <p
                      className={`text-center font-bold text-xl ${
                        prediction.bowlingTeamProb > prediction.battingTeamProb
                          ? "text-green-600"
                          : ""
                      }`}
                    >
                      {(prediction.bowlingTeamProb * 100).toFixed(1)}%
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-center">
                <div
                  className={`p-6 rounded-lg ${
                    prediction.winner === battingTeam
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  <h3 className="text-xl font-bold mb-1">Prediction</h3>
                  <p className="text-2xl font-bold mb-2">
                    {prediction.winner} is likely to win!
                  </p>
                  <div className="text-sm opacity-75">
                    Based on similar match situations from historical IPL data
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PredictorForm;
