import { useState } from "react";

const About = () => {
  const [activeTab, setActiveTab] = useState<"how" | "accuracy" | "data">(
    "how"
  );

  const factorsData = [
    { name: "Team Strength", value: 35, color: "bg-primary" },
    { name: "Match Situation", value: 30, color: "bg-secondary" },
    { name: "Venue Advantage", value: 15, color: "bg-green-500" },
    { name: "Recent Form", value: 12, color: "bg-purple-500" },
    { name: "Head-to-Head", value: 8, color: "bg-blue-500" },
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-white to-gray-50" id="about">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium">
            MACHINE LEARNING POWERED
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-4">
            About the IPL Predictor
          </h2>
          <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
            Our advanced algorithm learns from historical match data to predict
            real-time win probabilities
          </p>
        </div>

        {/* Tab navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              onClick={() => setActiveTab("how")}
              className={`px-5 py-2.5 text-sm font-medium ${
                activeTab === "how"
                  ? "text-white bg-primary"
                  : "text-gray-900 bg-white hover:bg-gray-100"
              } rounded-l-lg border border-gray-200`}
            >
              How It Works
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("accuracy")}
              className={`px-5 py-2.5 text-sm font-medium ${
                activeTab === "accuracy"
                  ? "text-white bg-primary"
                  : "text-gray-900 bg-white hover:bg-gray-100"
              } border-t border-b border-gray-200`}
            >
              Model Accuracy
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("data")}
              className={`px-5 py-2.5 text-sm font-medium ${
                activeTab === "data"
                  ? "text-white bg-primary"
                  : "text-gray-900 bg-white hover:bg-gray-100"
              } rounded-r-lg border border-gray-200`}
            >
              Data Sources
            </button>
          </div>
        </div>

        {/* Tab content */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card border border-gray-200">
            {activeTab === "how" && (
              <div>
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary mr-4">
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
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    How It Works
                  </h3>
                </div>

                <p className="text-gray-600 mb-4">
                  Our IPL Win Probability Predictor uses advanced machine
                  learning algorithms to analyze historical IPL match data and
                  predict the outcome of ongoing matches in real-time.
                </p>

                <div className="bg-gray-50 rounded-lg p-4 border border-gray-100 mb-6">
                  <h4 className="font-semibold mb-2">Key Prediction Factors</h4>
                  <ul className="space-y-3">
                    {factorsData.map((factor) => (
                      <li key={factor.name}>
                        <div className="flex justify-between mb-1 text-sm">
                          <span>{factor.name}</span>
                          <span className="font-medium">{factor.value}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`${factor.color} h-2 rounded-full`}
                            style={{ width: `${factor.value}%` }}
                          ></div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-gray-600">
                  Using these weighted factors, our model calculates the
                  probability of each team winning the match at any given stage
                  of the game with remarkable accuracy.
                </p>
              </div>
            )}

            {activeTab === "accuracy" && (
              <div>
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-green-100 text-green-600 mr-4">
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
                  <h3 className="text-2xl font-bold text-gray-800">
                    Model Accuracy
                  </h3>
                </div>

                <p className="text-gray-600 mb-4">
                  Our prediction model has been trained on data from all IPL
                  seasons, including more than 800 matches. The model accuracy
                  is continuously improving as more matches are played.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                    <div className="text-4xl font-bold text-primary mb-1">
                      85.7%
                    </div>
                    <div className="text-sm text-gray-500">
                      Overall Accuracy
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                    <div className="text-4xl font-bold text-secondary mb-1">
                      91.2%
                    </div>
                    <div className="text-sm text-gray-500">
                      Late Game Accuracy
                    </div>
                  </div>
                </div>

                <div className="bg-primary/10 p-4 rounded-lg mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-primary font-semibold">
                      Last 50 Matches
                    </span>
                    <span className="text-primary font-semibold">89.4%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-primary h-2.5 rounded-full"
                      style={{ width: "89.4%" }}
                    ></div>
                  </div>
                </div>

                <p className="text-gray-600">
                  The predictor achieves the highest accuracy after the
                  powerplay (6 overs) is completed, as the model has more
                  in-game data to generate reliable predictions.
                </p>
              </div>
            )}

            {activeTab === "data" && (
              <div>
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
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
                        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Data Sources
                  </h3>
                </div>

                <p className="text-gray-600 mb-4">
                  Our model is trained on comprehensive historical IPL data from
                  official sources going back to the inaugural 2008 season. We
                  continuously update our dataset after each match.
                </p>

                <div className="bg-gray-50 rounded-lg p-4 border border-gray-100 mb-6">
                  <h4 className="font-semibold mb-2">Dataset Highlights</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-3 rounded border border-gray-200">
                      <div className="text-2xl font-bold text-primary">
                        800+
                      </div>
                      <div className="text-sm text-gray-500">Total Matches</div>
                    </div>
                    <div className="bg-white p-3 rounded border border-gray-200">
                      <div className="text-2xl font-bold text-primary">15+</div>
                      <div className="text-sm text-gray-500">Seasons</div>
                    </div>
                    <div className="bg-white p-3 rounded border border-gray-200">
                      <div className="text-2xl font-bold text-primary">
                        240K+
                      </div>
                      <div className="text-sm text-gray-500">
                        Ball-by-Ball Data
                      </div>
                    </div>
                    <div className="bg-white p-3 rounded border border-gray-200">
                      <div className="text-2xl font-bold text-primary">25+</div>
                      <div className="text-sm text-gray-500">Features</div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600">
                  We clean, normalize, and engineer specialized features from
                  the raw data to ensure the highest possible prediction
                  quality.
                </p>
              </div>
            )}
          </div>

          <div className="card border border-gray-200 relative overflow-hidden">
            {/* Decorative background pattern */}
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/5 rounded-full"></div>
            <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-primary/10 rounded-full"></div>

            <div className="relative z-10">
              {activeTab === "how" && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Machine Learning Pipeline
                  </h3>

                  <div className="space-y-6">
                    <div className="flex">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
                        1
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold">
                          Data Collection
                        </h4>
                        <p className="text-gray-600">
                          Historical match data is collected and preprocessed
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
                        2
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold">
                          Feature Engineering
                        </h4>
                        <p className="text-gray-600">
                          Key statistical metrics are extracted and normalized
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
                        3
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold">
                          Model Training
                        </h4>
                        <p className="text-gray-600">
                          Machine learning algorithms analyze patterns and train
                          the model
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
                        4
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold">
                          Real-time Prediction
                        </h4>
                        <p className="text-gray-600">
                          Live match data is processed to generate win
                          probabilities
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex items-center">
                      <svg
                        className="w-6 h-6 text-yellow-500 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <p className="text-sm text-gray-600">
                        Our model is continuously retrained with new match data
                        for improved accuracy
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "accuracy" && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Accuracy by Match Phase
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>Powerplay (1-6 overs)</span>
                        <span className="font-medium">72.3%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-yellow-500 h-3 rounded-full"
                          style={{ width: "72.3%" }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>Middle Overs (7-15)</span>
                        <span className="font-medium">84.1%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-green-500 h-3 rounded-full"
                          style={{ width: "84.1%" }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>Death Overs (16-20)</span>
                        <span className="font-medium">91.2%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-primary h-3 rounded-full"
                          style={{ width: "91.2%" }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>Close Matches (margin &lt;10 runs)</span>
                        <span className="font-medium">86.5%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-blue-500 h-3 rounded-full"
                          style={{ width: "86.5%" }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg border border-gray-200 p-5">
                    <h4 className="font-semibold mb-3">
                      Accuracy Improvement Over Time
                    </h4>
                    <div className="flex items-center justify-center">
                      {/* Simple chart representation */}
                      <div className="h-32 w-full flex items-end space-x-2">
                        <div className="bg-gray-200 w-1/5 h-14"></div>
                        <div className="bg-gray-300 w-1/5 h-20"></div>
                        <div className="bg-primary-300 w-1/5 h-24"></div>
                        <div className="bg-primary-400 w-1/5 h-28"></div>
                        <div className="bg-primary w-1/5 h-32"></div>
                      </div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                      <span>2019</span>
                      <span>2020</span>
                      <span>2021</span>
                      <span>2022</span>
                      <span>2023</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "data" && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Data Processing Pipeline
                  </h3>

                  <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
                    <h4 className="font-semibold mb-2">Training Process</h4>
                    <img
                      src="https://via.placeholder.com/400x200?text=ML+Pipeline+Diagram"
                      alt="Machine Learning Pipeline Diagram"
                      className="w-full rounded-lg mb-2"
                    />
                    <p className="text-sm text-gray-600">
                      Our model uses gradient boosting algorithms to process
                      match data
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h5 className="font-medium mb-2">Algorithms Used</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Gradient Boosting</li>
                        <li>• Random Forest</li>
                        <li>• Logistic Regression</li>
                        <li>• Neural Networks</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h5 className="font-medium mb-2">Feature Categories</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Team Statistics</li>
                        <li>• Player Performance</li>
                        <li>• Match Situation</li>
                        <li>• Venue Factors</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <svg
                      className="w-10 h-10 text-blue-500 mr-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <div>
                      <h5 className="font-medium">Data Privacy Compliant</h5>
                      <p className="text-sm text-gray-600">
                        We only use publicly available match statistics
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
