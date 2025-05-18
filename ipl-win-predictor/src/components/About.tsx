const About = () => {
  return (
    <div className="py-16 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary">
            About the Predictor
          </h2>
          <p className="text-xl text-gray-600 mt-4">
            Understanding how our IPL prediction model works
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              How It Works
            </h3>
            <p className="text-gray-600 mb-4">
              Our IPL Win Probability Predictor uses machine learning algorithms
              to analyze historical IPL match data and predict the outcome of
              ongoing matches.
            </p>
            <p className="text-gray-600 mb-4">
              The model takes into account various factors such as:
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-4">
              <li>Current score and target</li>
              <li>Wickets lost and overs completed</li>
              <li>Team performance history</li>
              <li>Venue statistics</li>
              <li>Head-to-head team records</li>
            </ul>
            <p className="text-gray-600">
              Using this data, the model calculates the probability of each team
              winning the match at any given stage of the game.
            </p>
          </div>

          <div className="card">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Model Accuracy
            </h3>
            <p className="text-gray-600 mb-4">
              Our prediction model has been trained on data from all IPL
              seasons, including more than 800 matches. The model accuracy is
              continuously improving as more matches are played.
            </p>
            <div className="bg-primary/10 p-4 rounded-lg mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-primary font-semibold">
                  Model Accuracy
                </span>
                <span className="text-primary font-semibold">85.7%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-primary h-2.5 rounded-full"
                  style={{ width: "85.7%" }}
                ></div>
              </div>
            </div>
            <p className="text-gray-600">
              The predictor works best when used after the powerplay (6 overs)
              is completed, as the model has more in-game data to make accurate
              predictions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
