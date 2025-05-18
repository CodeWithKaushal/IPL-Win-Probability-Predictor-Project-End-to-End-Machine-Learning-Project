/**
 * Model interface for IPL Win Predictor
 *
 * This file defines interfaces for the machine learning model integration.
 * In a real application, this would connect to the Python ML model via API calls.
 */

// Input features for the prediction model
export interface ModelFeatures {
  batting_team: string;
  bowling_team: string;
  city: string;
  runs_left: number;
  balls_left: number;
  wickets_left: number;
  total_runs_x: number;
  cur_run_rate: number;
  req_run_rate: number;
}

// Prediction response from the model
export interface ModelPrediction {
  home_win_probability: number;
  away_win_probability: number;
  predicted_winner: string;
}

// Map from UI parameters to model features
export function mapToModelFeatures(
  battingTeam: string,
  bowlingTeam: string,
  city: string,
  target: number,
  score: number,
  overs: number,
  wickets: number
): ModelFeatures {
  const runsLeft = target - score;
  const ballsInAnOver = 6;
  const totalBalls = 120;
  const oversCompleted = Math.floor(overs);
  const ballsCompleted =
    oversCompleted * ballsInAnOver + Math.round((overs % 1) * 10);
  const ballsLeft = totalBalls - ballsCompleted;
  const wicketsLeft = 10 - wickets;

  const curRunRate = overs > 0 ? score / overs : 0;
  const reqRunRate = ballsLeft > 0 ? (runsLeft * 6) / ballsLeft : 99.99;

  return {
    batting_team: battingTeam,
    bowling_team: bowlingTeam,
    city: city,
    runs_left: runsLeft,
    balls_left: ballsLeft,
    wickets_left: wicketsLeft,
    total_runs_x: target,
    cur_run_rate: curRunRate,
    req_run_rate: reqRunRate,
  };
}
