/**
 * API service for prediction requests
 *
 * This service connects to the Python Flask API that uses the ML model pipe.pkl
 * It provides fallback functionality if the API is not available
 */

import { mapToModelFeatures } from "../models/predictionModel";

export interface PredictionParams {
  battingTeam: string;
  bowlingTeam: string;
  city: string;
  target: number;
  score: number;
  overs: number;
  wickets: number;
}

export interface PredictionResult {
  battingTeamProb: number;
  bowlingTeamProb: number;
  winner: string;
}

export const predictMatch = async (
  params: PredictionParams
): Promise<PredictionResult> => {
  try {    // Call our backend API (either Flask API or Netlify function)
    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
    const isNetlifyFunction = API_URL.includes('/.netlify/functions');
    
    // Adapt endpoint based on whether we're using Netlify functions or the Flask API
    const endpoint = isNetlifyFunction ? `${API_URL}/predict` : `${API_URL}/predict`;
    
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        batting_team: params.battingTeam,
        bowling_team: params.bowlingTeam,
        city: params.city,
        target: params.target,
        score: params.score,
        overs: params.overs,
        wickets: params.wickets,
      }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const prediction = await response.json();

    return {
      battingTeamProb: prediction.batting_team_prob,
      bowlingTeamProb: prediction.bowling_team_prob,
      winner: prediction.winner,
    };
  } catch (error) {
    console.error("API call failed:", error);

    // Fallback to offline prediction if API call fails
    return new Promise((resolve) => {
      // Map UI parameters to model features
      const features = mapToModelFeatures(
        params.battingTeam,
        params.bowlingTeam,
        params.city,
        params.target,
        params.score,
        params.overs,
        params.wickets
      );

      // Fallback logic for demo purposes
      let battingTeamProb = 0.5; // Start at 50-50

      // Adjust based on run rates
      if (features.cur_run_rate > features.req_run_rate) {
        battingTeamProb += 0.2;
      } else if (features.cur_run_rate < features.req_run_rate) {
        battingTeamProb -= 0.2;
      }

      // Adjust based on wickets left
      battingTeamProb += features.wickets_left / 30; // Max impact: +0.33

      // Randomize slightly for demo
      battingTeamProb += Math.random() * 0.2 - 0.1;

      // Ensure probability is between 0 and 1
      battingTeamProb = Math.max(0.05, Math.min(0.95, battingTeamProb));

      const bowlingTeamProb = 1 - battingTeamProb;

      resolve({
        battingTeamProb,
        bowlingTeamProb,
        winner:
          battingTeamProb > bowlingTeamProb
            ? params.battingTeam
            : params.bowlingTeam,
      });
    });
  }
};
